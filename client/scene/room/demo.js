export function markup(
  /** @type {import("@notml/core").oom} */ oom,
  /** @type {import("@notml/core").OOMElementProxy} */ assets,
  /** @type {import("@notml/core").OOMElementProxy} */ scene
) {
  assets(oom
    .aAssetItem({
      id: 'art-gallery-cage',
      src: './scene/models/ArtGalleryCAGE.glb'
    }))
  scene(oom
    .aBox({
      staticBody: true,
      position: '10 0 10',
      width: '10',
      height: '3',
      depth: '10'
    })
    .aEntity({ gltfModel: '#art-gallery-cage', position: '15 0.25 7' }))
}
