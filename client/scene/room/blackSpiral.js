
export function markup(
  /** @type {import("@notml/core").oom} */ oom,
  /** @type {import("@notml/core").OOMElementProxy} */ assets,
  /** @type {import("@notml/core").OOMElementProxy} */ scene
                                            
)



{
  assets(oom
    .aAssetItem({
      id: 'HallDeconstruct',
      src: 'https://cdn.glitch.global/07dee895-de9d-44b6-8eb8-3985d37cefa6/BlackCone.gltf?v=1654263034830'
    })
         
    .aAssetItem({
      id: 'HallDeconstruct2floor',
      src: 'https://cdn.glitch.global/07dee895-de9d-44b6-8eb8-3985d37cefa6/SpiralSphere.gltf?v=1652983032574'
    })        
         
  .aAssetItem({
      id: 'Glass',
      src: 'https://cdn.glitch.global/07dee895-de9d-44b6-8eb8-3985d37cefa6/BlackConeGlass.gltf?v=1654159841503'
    })
         .aAssetItem({
      id: 'SphereGlass',
      src: 'https://cdn.glitch.global/07dee895-de9d-44b6-8eb8-3985d37cefa6/SpiralSphereGlass.gltf?v=1652983030072'
    })
         .aAssetItem({
    id: 'Navigmesh',
      src: '/scene/spiralNavMesh.gltf'
    }) 
         .aAssetItem({
    id: 'NavigmeshSphere',
      src: '/scene/spiralSphereNavMesh.gltf'
    }) 
         
         
         .aAssetItem({
      id: 'X-program',
      src: 'https://cdn.glitch.global/88fe0f09-858a-449e-936d-4ec30e06f635/X-prog.gltf?v=1650704573096'
    })
         .aAssetItem({
      id: 'SphereGlassOuter',
      src: 'https://cdn.glitch.global/07dee895-de9d-44b6-8eb8-3985d37cefa6/SpiralSphereGlassOuter.gltf?v=1652983030072'
    })
  .aAssetItem({
      id: 'GlassOuter',
      src: 'https://cdn.glitch.global/07dee895-de9d-44b6-8eb8-3985d37cefa6/GlassOuter.gltf?v=1652719035424'
    }))
  
  scene(oom
    
    .aEntity({ id: 'Navigationmesh', navMesh: true, visible: false,  gltfModel: '#Navigmesh', position: '0 0 0', scale: '2 2 2'})
        // .aEntity({ id: 'NavigationmeshSphere', navMesh: true, visible: false,  gltfModel: '#NavigmeshSphere', position: '0 0 0', scale: '2 2 2'})
    .aEntity({ gltfModel: '#HallDeconstruct', position: '0 0 0', scale: '2 2 2', enmap:'' })
    // .aEntity({ gltfModel: '#HallDeconstruct2floor', position: '0 0 0', scale: '2 2 2', enmap:'' })
  .aEntity({ gltfModel: '#Glass', position: '0 0 0', scale: '2 2 2', enmapinner:''})
  // .aEntity({ gltfModel: '#GlassOuter', position: '0 0 0', scale: '2 2 2', enmap:''})
       // .aEntity({ gltfModel: '#SphereGlass', position: '0 0 0', scale: '2 2 2', enmapinner:''})
  // .aEntity({ gltfModel: '#SphereGlassOuter', position: '0 0 0', scale: '2 2 2', enmap:''})
       
       )
  // .aEntity({ gltfModel: '#X-program', position: '-30 -1 28', scale: '2 2 2', enmapinner:'', link:'href: https://seasoned-discovered-mass.glitch.me' }))
 // 'href: https://fantasy-eight-swordfish.glitch.me'
  
  
}
