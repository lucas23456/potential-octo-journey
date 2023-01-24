AFRAME.registerComponent("enmapinner", {
        init: function() {
          var targetCube = new THREE.WebGLRenderTargetCube(512, 512);
          var renderer = this.el.sceneEl.renderer;

          this.el.addEventListener("model-loaded", e => {
            let mesh = this.el.getObject3D("mesh");
            
            var texture = new THREE.TextureLoader().load(
              "https://cdn.glitch.global/b1780a83-15c5-4154-bd07-deed2726dd55/sky.jpg?v=1674479429651",
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