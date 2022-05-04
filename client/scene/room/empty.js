
export function markup(
  /** @type {import("@notml/core").oom} */ oom,
  /** @type {import("@notml/core").OOMElementProxy} */ assets,
  /** @type {import("@notml/core").OOMElementProxy} */ scene
                                            
)



{
  assets(oom
    .aAssetItem({
      id: 'HallDeconstruct',
      src: 'https://cdn.glitch.global/88fe0f09-858a-449e-936d-4ec30e06f635/ToryMagaz.gltf?v=1650647864449'
    })
  .aAssetItem({
      id: 'Glass',
      src: 'https://cdn.glitch.global/88fe0f09-858a-449e-936d-4ec30e06f635/GlassOuter.gltf?v=1650638051413'
    })
         .aAssetItem({
      id: 'Navigmesh',
      src: '/scene/hall-navmesh.gltf'
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
    
    .aEntity({ id: 'Navigationmesh', navMesh: true, visible: false,  gltfModel: '#Navigmesh', position: '-30 0 28', scale: '2 2 2'})
    .aEntity({ gltfModel: '#HallDeconstruct', position: '-30 -1 28', scale: '2 2 2', enmap:'' })
  .aEntity({ gltfModel: '#Glass', position: '-30 -1 28', scale: '2 2 2', enmap:''})
  .aEntity({ gltfModel: '#GlassInner', position: '-30 -1 28', scale: '2 2 2', enmapinner:''})
  .aEntity({ gltfModel: '#X-program', position: '-30 -1 28', scale: '2 2 2', enmapinner:'', link:'href: https://slender-groovy-aquarius.glitch.me' }))
 // 'href: https://fantasy-eight-swordfish.glitch.me'
  
  
}
