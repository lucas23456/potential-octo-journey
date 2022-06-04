
export function markup(
  /** @type {import("@notml/core").oom} */ oom,
  /** @type {import("@notml/core").OOMElementProxy} */ assets,
  /** @type {import("@notml/core").OOMElementProxy} */ scene
                                            
)



{
  assets(oom
    .aAssetItem({
      id: 'HallDeconstruct',
      src: 'https://cdn.glitch.global/07dee895-de9d-44b6-8eb8-3985d37cefa6/BlackCone.gltf?v=1654266565013'
    })
         
    .aAssetItem({
      id: 'HallDeconstruct2floor',
      src: 'https://cdn.glitch.global/07dee895-de9d-44b6-8eb8-3985d37cefa6/SpiralSphere.gltf?v=1652983032574'
    })        
         
  .aAssetItem({
      id: 'Glass',
      src: 'https://cdn.glitch.global/07dee895-de9d-44b6-8eb8-3985d37cefa6/ConeGlass.gltf?v=1654154756855'
    })
         .aAssetItem({
      id: 'GlassWall0',
      src: 'https://cdn.glitch.global/07dee895-de9d-44b6-8eb8-3985d37cefa6/BlackConeGlassWalls.gltf?v=1654271436101'
    })
         .aAssetItem({
      id: 'GlassWall1',
      src: 'https://cdn.glitch.global/07dee895-de9d-44b6-8eb8-3985d37cefa6/BlackConeGlassWalls1.gltf?v=1654271443556'
    })
         .aAssetItem({
      id: 'GlassWall2',
      src: 'https://cdn.glitch.global/07dee895-de9d-44b6-8eb8-3985d37cefa6/BlackConeGlassWalls2.gltf?v=1654271443348'
    })
         .aAssetItem({
      id: 'GlassWall3',
      src: 'https://cdn.glitch.global/07dee895-de9d-44b6-8eb8-3985d37cefa6/BlackConeGlassWalls3.gltf?v=1654271441980'
    })
         .aAssetItem({
      id: 'GlassWall4',
      src: 'https://cdn.glitch.global/07dee895-de9d-44b6-8eb8-3985d37cefa6/BlackConeGlassWalls4.gltf?v=1654271441837'
    })
         .aAssetItem({
      id: 'GlassWall5',
      src: 'https://cdn.glitch.global/07dee895-de9d-44b6-8eb8-3985d37cefa6/BlackConeGlassWalls5.gltf?v=1654271441586'
    })
         .aAssetItem({
      id: 'GlassWall6',
      src: 'https://cdn.glitch.global/07dee895-de9d-44b6-8eb8-3985d37cefa6/BlackConeGlassWalls6.gltf?v=1654271441555'
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
      src: 'https://cdn.glitch.global/07dee895-de9d-44b6-8eb8-3985d37cefa6/SpiralSphereGlassOuter.gltf?v=1652983030072',
    
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
       .aEntity({ gltfModel: '#GlassWall0', position: '0 0 0', scale: '2 2 2', enmapinner:'',animationMixer:'clip: KeyAction ;"})
  // .aEntity({ gltfModel: '#SphereGlassOuter', position: '0 0 0', scale: '2 2 2', enmap:''})
       
       )
  // .aEntity({ gltfModel: '#X-program', position: '-30 -1 28', scale: '2 2 2', enmapinner:'', link:'href: https://seasoned-discovered-mass.glitch.me' }))
 // 'href: https://fantasy-eight-swordfish.glitch.me'
  
  
}
