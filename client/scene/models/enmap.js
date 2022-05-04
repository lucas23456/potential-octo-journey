AFRAME.registerComponent("enmap", {
        init: function() {
          var targetCube = new THREE.WebGLRenderTargetCube(512, 512);
          var renderer = this.el.sceneEl.renderer;

          this.el.addEventListener("model-loaded", e => {
            let mesh = this.el.getObject3D("mesh");
            
            var texture = new THREE.TextureLoader().load(
              "/scene/img/sky.png",
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

