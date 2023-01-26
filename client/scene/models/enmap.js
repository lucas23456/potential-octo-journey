AFRAME.registerComponent("enmap", {
        init: function() {
          var targetCube = new THREE.WebGLRenderTargetCube(512, 512);
          var renderer = this.el.sceneEl.renderer;

          this.el.addEventListener("model-loaded", e => {
            let mesh = this.el.getObject3D("mesh");
            
            var texture = new THREE.TextureLoader().load(
              "https://cdn.glitch.global/acdfc730-297b-4c52-b068-50f3904fbb54/PanoCircle.jpg?v=1674762023389",
              function() {
                var cubeTex = targetCube.fromEquirectangularTexture(renderer, texture);
                mesh.traverse(function(el) {
                  if (el.material) {
                    el.material.envMap = cubeTex.texture;
                    el.material.envMap.intensity = 1;
                    el.material.needsUpdate = true;
                  }
                });
                
              }
            );
          });
        }
      });

