
export function markup(
  /** @type {import("@notml/core").oom} */ oom,
  /** @type {import("@notml/core").OOMElementProxy} */ assets,
  /** @type {import("@notml/core").OOMElementProxy} */ scene
                                            
)



{
  assets(oom
    .aAssetItem({
      id: 'BlackBox',
      src: 'https://cdn.glitch.global/b1780a83-15c5-4154-bd07-deed2726dd55/BlackBoxGallery.gltf?v=1673646332178'
    })
             
         .aAssetItem({
    id: 'Navigmesh',
      src: '/scene/spiralNavMesh.gltf'
    }) 
         )
  
  scene(oom
    
    .aEntity({ id: 'Navigationmesh', navMesh: true, visible: false,  gltfModel: '#Navigmesh', position: '0 0 0', scale: '0.5 0.5 0.5'})
        // .aEntity({ id: 'NavigationmeshSphere', navMesh: true, visible: false,  gltfModel: '#NavigmeshSphere', position: '0 0 0', scale: '2 2 2'})
    .aEntity({ gltfModel: '#BlackBox', position: '0 0 0', scale: '0.5 0.5 0.5', enmap:'' })
        
  
       
       )
  // .aEntity({ gltfModel: '#X-program', position: '-30 -1 28', scale: '2 2 2', enmapinner:'', link:'href: https://seasoned-discovered-mass.glitch.me' }))
 // 'href: https://fantasy-eight-swordfish.glitch.me'
  
  
}
