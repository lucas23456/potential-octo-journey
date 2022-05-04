export function markup(
  /** @type {import("@notml/core").oom} */ oom,
  /** @type {import("@notml/core").OOMElementProxy} */ assets,
  /** @type {import("@notml/core").OOMElementProxy} */ scene
) {
  scene(oom
    .aBox({
      staticBody: true,
      position: '10 0.5 0',
      width: '10',
      height: '1',
      depth: '10'
    })
    .aBox({
      staticBody: true,
      position: '20 2 0',
      width: '10',
      height: '1',
      depth: '10'
    })
    // .aEntity({ navMesh: true, gltfModel: '/scene/test-navmesh.gltf' })
  )
}
