
export function markup(
  /** @type {import("@notml/core").oom} */ oom,
  /** @type {import("@notml/core").OOMElementProxy} */ assets,
  /** @type {import("@notml/core").OOMElementProxy} */ scene

)



{
  assets(oom
    .aAssetItem({
      id: 'BlackBox',
      src: 'https://cdn.glitch.global/eb261a95-cfaa-4a8c-b81c-6556b37d623f/Gallery_Second_Painter2.glb?v=1674937332132'
    })

    .aAssetItem({
      id: 'TextBoards',
      src: 'https://cdn.glitch.global/eb261a95-cfaa-4a8c-b81c-6556b37d623f/TextBoards.glb?v=1674937928654'
    })

         .aAssetItem({
      id: 'Glass',
      src: 'https://cdn.glitch.global/eb261a95-cfaa-4a8c-b81c-6556b37d623f/Gallery_Second_Painter_Glass.glb?v=1674895326977'
    })
         .aAssetItem({
      id: 'InnerGlassWindow',
      src: 'https://cdn.glitch.global/eb261a95-cfaa-4a8c-b81c-6556b37d623f/InnerGlassWindow.glb?v=1674932374079'
    })
         .aAssetItem({
      id: 'OuterGlassWindow',
      src: 'https://cdn.glitch.global/eb261a95-cfaa-4a8c-b81c-6556b37d623f/OuterGlassWindow.glb?v=1674932375685'
    })



    //      .aAssetItem({
    //   id: 'LowResImage',
    //   src: 'https://cdn.glitch.global/b1780a83-15c5-4154-bd07-deed2726dd55/GalleryLowRes.glb?v=1674025516989'
    // })
    //      .aAssetItem({
    //   id: 'HiResImage',
    //   src: 'https://cdn.glitch.me/b1780a83-15c5-4154-bd07-deed2726dd55/GalleryHiRes.glb?v=1674025521005'
    // })

         .aAssetItem({
    id: 'Navigmesh',
      src: '/scene/spiralNavMesh2.gltf'
    })
         )

  scene(oom

    .aEntity({ id: 'Navigationmesh', navMesh: true, visible: false,  gltfModel: '#Navigmesh', position: '0 0 0', scale: '0.5 0.5 0.5'})
        // .aEntity({ id: 'NavigationmeshSphere', navMesh: true, visible: false,  gltfModel: '#NavigmeshSphere', position: '0 0 0', scale: '2 2 2'})
    .aEntity( { gltfModel: '#BlackBox', position: '0 0 0', scale: '0.5 0.5 0.5'})
.aEntity( { gltfModel: '#TextBoards', position: '0 0 0', scale: '0.5 0.5 0.5'})
        .aEntity({ gltfModel: '#Glass', position: '0 0 0', scale: '0.5 0.5 0.5', enmap:''})

        .aEntity({ gltfModel: '#InnerGlassWindow', position: '0 0 0', scale: '0.5 0.5 0.5', enmap:''})
        .aEntity({ gltfModel: '#OuterGlassWindow', position: '0 0 0', scale: '0.5 0.5 0.5', enmapinner:''})

        // .aEntity({ id: 'HRes', gltfModel: '#HiResImage', rotation: '0 90 0', position: '9.4 3.35 -19.53', scale: '4 4 4'})


        .aEntity({ light: 'color: white; intensity: 0.15; type: ambient;', visible: 'true' })

        .aSound({ id: 'elemWave',position: '0 8 0', src: 'https://cdn.glitch.global/eb261a95-cfaa-4a8c-b81c-6556b37d623f/you_leave_music.mp3?v=1674932534936', autoplay:'true', loop:'true', maxDistance:'2', volume:'1'})


       )
  // .aEntity({ gltfModel: '#X-program', position: '-30 -1 28', scale: '2 2 2', enmapinner:'', link:'href: https://seasoned-discovered-mass.glitch.me' }))
 // 'href: https://fantasy-eight-swordfish.glitch.me'


}
