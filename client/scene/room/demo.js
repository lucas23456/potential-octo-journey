
export function markup(
  /** @type {import("@notml/core").oom} */ oom,
  /** @type {import("@notml/core").OOMElementProxy} */ assets,
  /** @type {import("@notml/core").OOMElementProxy} */ scene
                                            
)



{
  assets(oom
    .aAssetItem({
      id: 'HallDeconstruct',
      src: 'https://cdn.glitch.global/b5b15357-41a5-4881-a872-3cb6b05c0e48/FoldsMeshBuild.gltf?v=1651044548576'
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
    .aEntity({ id:'navigationmesh', navMesh: true, visible: false, gltfModel: '/scene/test-navmesh.gltf', position: '0 0 0', scale: '2 2 2'})
    .aEntity({ gltfModel: '#HallDeconstruct', position: '0 0 0', scale: '2 2 2', enmap:'' })
  //.aEntity({ gltfModel: '#Glass', position: '0 -1 0', scale: '2 2 2', enmap:''})
  //.aEntity({ gltfModel: '#GlassInner', position: '0 -1 0', scale: '2 2 2', enmapinner:''})
  //.aEntity({ gltfModel: '#X-program', position: '0 -1 0', scale: '2 2 2',enmapinner:'' })
       )
  
  
}
