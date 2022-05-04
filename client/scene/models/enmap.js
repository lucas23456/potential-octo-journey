AFRAME.registerComponent("enmap", {
        init: function() {
          var targetCube = new THREE.WebGLRenderTargetCube(512, 512);
          var renderer = this.el.sceneEl.renderer;

          this.el.addEventListener("model-loaded", e => {
            let mesh = this.el.getObject3D("mesh");
            
            var texture = new THREE.TextureLoader().load(
              "https://cdn.glitch.global/88fe0f09-858a-449e-936d-4ec30e06f635/PanoramaOuter.jpg?v=1650638059527",
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

