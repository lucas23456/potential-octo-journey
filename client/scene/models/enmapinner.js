AFRAME.registerComponent("enmapinner", {
        init: function() {
          var targetCube = new THREE.WebGLRenderTargetCube(512, 512);
          var renderer = this.el.sceneEl.renderer;

          this.el.addEventListener("model-loaded", e => {
            let mesh = this.el.getObject3D("mesh");
            
            var texture = new THREE.TextureLoader().load(
              "https://cdn.glitch.global/07dee895-de9d-44b6-8eb8-3985d37cefa6/PanoSpiral.jpg?v=1652719081430",
              function() {
                var cubeTex = targetCube.fromEquirectangularTexture(renderer, texture);
                mesh.traverse(function(el) {
                  if (el.material) {
                    el.material.envMap = cubeTex.texture;
                    el.material.envMap.intensity = 3;
                    el.material.needsUpdate = true;
                  }
                });
                
              }
            );
          });
        }
      });