
export function markup(
  /** @type {import("@notml/core").oom} */ oom,
  /** @type {import("@notml/core").OOMElementProxy} */ assets,
  /** @type {import("@notml/core").OOMElementProxy} */ scene
                                            
)



{
  assets(oom
    .aAssetItem({
      id: 'BlackBox',
      src: 'https://cdn.glitch.global/b1780a83-15c5-4154-bd07-deed2726dd55/BlackBoxGallery.gltf?v=1673638158045'
    })
             
         .aAssetItem({
    id: 'Navigmesh',
      src: '/scene/spiralNavMesh.gltf'
    }) 
         )
  
  scene(oom
    
    .aEntity({ id: 'Navigationmesh', navMesh: true, visible: false,  gltfModel: '#Navigmesh', position: '0 0 0', scale: '2 2 2'})
        // .aEntity({ id: 'NavigationmeshSphere', navMesh: true, visible: false,  gltfModel: '#NavigmeshSphere', position: '0 0 0', scale: '2 2 2'})
    .aEntity({ gltfModel: '#BlackBox', position: '0 0 0', scale: '2 2 2', enmap:'' })
    // .aEntity({ gltfModel: '#HallDeconstruct2floor', position: '0 0 0', scale: '2 2 2', enmap:'' })
  .aEntity({ gltfModel: '#Glass', position: '0 0 0', scale: '2 2 2', enmapinner:''})
  // .aEntity({ gltfModel: '#GlassOuter', position: '0 0 0', scale: '2 2 2', enmap:''})
       .aEntity({ gltfModel: '#GlassWall0', position: '0 0 0', scale: '2 2 2', enmapinner:'',animation:'property: position; to: 0 0.1 0; dir: alternate; loop: true; dur: 2500; easing: linear'})
        .aEntity({ gltfModel: '#GlassWall1', position: '0 0 0', scale: '2 2 2', enmapinner:'',animation:'property: position; to: 0 -0.1 0; dir: alternate; loop: true; dur: 2500; easing: linear'})
        .aEntity({ gltfModel: '#GlassWall2', position: '0 0 0', scale: '2 2 2', enmapinner:'',animation:'property: position; to: 0 -0.12 0; dir: alternate; loop: true; dur: 2500; easing: linear'})
        .aEntity({ gltfModel: '#GlassWall3', position: '0 0 0', scale: '2 2 2', enmapinner:'',animation:'property: rotation; to: 0 1 0; dir: alternate; loop: true; dur: 2500; easing: linear'})
        .aEntity({ gltfModel: '#GlassWall4', position: '0 0 0', scale: '2 2 2', enmapinner:'',animation:'property: position; to: 0 -0.1 0; dir: alternate; loop: true; dur: 2500; easing: linear'})
        .aEntity({ gltfModel: '#GlassWall5', position: '0 0 0', scale: '2 2 2', enmapinner:'',animation:'property: rotation; to: 0 -0.7 0; dir: alternate; loop: true; dur: 2500; easing: linear'})
        .aEntity({ gltfModel: '#GlassWall6', position: '0 0 0', scale: '2 2 2', enmapinner:'',animation:'property: rotation; to: 0 -0.5 0; dir: alternate; loop: true; dur: 2500; easing: linear'})
  // .aEntity({ gltfModel: '#SphereGlassOuter', position: '0 0 0', scale: '2 2 2', enmap:''})
       
       )
  // .aEntity({ gltfModel: '#X-program', position: '-30 -1 28', scale: '2 2 2', enmapinner:'', link:'href: https://seasoned-discovered-mass.glitch.me' }))
 // 'href: https://fantasy-eight-swordfish.glitch.me'
  
  
}
