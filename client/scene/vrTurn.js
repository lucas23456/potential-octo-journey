AFRAME.registerComponent('turncontrols', {
    schema: {
        turnType: { type: 'string', default: 'none' },
        snapDegrees: { type: 'float', default: 45 },
        turnSpeed: { type: 'float', default: 2 }
    },
    init: function() {
        //Do nothing if this controller isn't meant to turn or the turnType is invalid
        if (this.data.turnType == 'none') return;
        this.invalid = this.data.turnType != 'snap' && this.data.turnType != 'smooth'
        if (this.invalid) {
            console.log("You have not entered a valid turnType! Only none, snap, and smooth are accepted.");
            return;
        }

        //Get scene element references
        this.player = document.querySelector('a-scene').querySelector('#player');
        this.head = player.querySelector('#head');        
        var controllerR = document.querySelector('a-scene').querySelector('#rightHand');

        //Set up variables to read controller input and control turn logic
        this.rotateX = 0;
        this.justSnapped = false;
        this.unsnapZone = .99;

        //Set up variables to facilitate position adjustment after turning
        this.lastHeadPos = new THREE.Vector3();
        this.currentHeadPos = new THREE.Vector3();
        this.posAdjustNeeded = false;

        //Hook up event listeners for the relevant turning input events
        controllerR.addEventListener('axismove', (event) => {
        this.rotateX = event.detail.axis[2] != 0 ? event.detail.axis[2] : event.detail.axis[0];
        });
    },
    tick: function(time, timeDelta) {
        //Do nothing if this controller isn't meant to turn or the turnType is invalid
        if (this.data.turnType == 'none' || this.invalid) return;

        //Adjust position and turn based on schema
        if (this.posAdjustNeeded) this.posAdjust();
        if (this.data.turnType == 'snap') this.snapTurn();
        if (this.data.turnType == 'smooth') this.smoothTurn(timeDelta / 3500);

    },
    snapTurn: function() {
        //If player hasn't snapped yet and input is max on either end, rotate the player by snapDegrees
        if (!this.justSnapped) {
            if (Math.abs(this.rotateX) == 1) {                
                this.lastHeadPos.setFromMatrixPosition(this.head.object3D.matrixWorld);
                this.player.object3D.rotation.y += (this.data.snapDegrees * (Math.PI / 180) * -this.rotateX);                
                this.justSnapped = true;
                this.posAdjustNeeded = true;
            }
        }
        //If player has snapped, check to see if they've moved away from either end
        else if (this.rotateX > -this.unsnapZone && this.rotateX < this.unsnapZone) 
            this.justSnapped = false;
    },
    smoothTurn: function(dt) {
        //If there's input, rotate the player smoothly
        if (this.rotateX != 0) {
            this.lastHeadPos.setFromMatrixPosition(this.head.object3D.matrixWorld);
            this.player.object3D.rotation.y += -this.rotateX * dt * this.data.turnSpeed;
            this.posAdjustNeeded = true;
        }
    },
    posAdjust: function() {
        //You need to adjust for your shifted head position after rotating the player rig,
        //but it doesn't work the same function as the turn because of some nonsense with A-Frame and WebXR.
        //So instead, this function corrects for it on the tick after the turn.
        let newHeadPos = new THREE.Vector3().setFromMatrixPosition(this.head.object3D.matrixWorld);
        this.player.object3D.position.add(this.lastHeadPos.sub(newHeadPos));
        this.posAdjustNeeded = false;
    }
});