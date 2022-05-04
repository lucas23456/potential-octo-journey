
export function markup(
  /** @type {import("@notml/core").oom} */ oom,
  /** @type {import("@notml/core").OOMElementProxy} */ assets,
  /** @type {import("@notml/core").OOMElementProxy} */ scene
                                            
)



{
  assets(oom
         
    .img({
      id: 'grid',
      src: '/scene/img/grid.png',
      crossorigin: 'anonymous'
    })
    .aAssetItem({
      id: 'HallDeconstruct',
      src: 'https://cdn.glitch.global/07dee895-de9d-44b6-8eb8-3985d37cefa6/FoldsMeshWoDenosie.gltf?v=1651685013445'
    })
  .aAssetItem({
      id: 'Glass',
      src: 'https://cdn.glitch.global/88fe0f09-858a-449e-936d-4ec30e06f635/GlassOuter.gltf?v=1650638051413'
    })
         .aAssetItem({
      id: 'X-program',
      src: 'https://cdn.glitch.global/88fe0f09-858a-449e-936d-4ec30e06f635/X-prog.gltf?v=1650704573096'
    })
  .aAssetItem({
      id: 'GlassInner',
      src: 'https://cdn.glitch.global/88fe0f09-858a-449e-936d-4ec30e06f635/GlassInner.gltf?v=1650638051773'
    }))
  
  scene(oom
    .aEntity({ id:'navigationmeshFold', navMesh: true, visible: false, gltfModel: '/scene/test-navmesh.gltf', position: '-28 0 -35', scale: '2 2 2', enmap:'' })
    .aEntity({ gltfModel: '#HallDeconstruct', position: '-28 0 -35', scale: '2 2 2', enmap:'' })
        .aEntity({
      
      position: '0 .2 0',
      geometry: 'primitive: plane; width: 300; height: 300;',
      rotation: '-90 0 0',
      material: 'src: #grid; repeat: 100 100; transparent: true; metalness:0; roughness: 10; sphericalEnvMap: #sky;'
    })
  //.aEntity({ gltfModel: '#Glass', position: '0 -1 0', scale: '2 2 2', enmap:''})
  //.aEntity({ gltfModel: '#GlassInner', position: '0 -1 0', scale: '2 2 2', enmapinner:''})
  //.aEntity({ gltfModel: '#X-program', position: '0 -1 0', scale: '2 2 2',enmapinner:'' })
       )
  
  
}
