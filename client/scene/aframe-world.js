export async function markup(
  /** @type {import("@notml/core").oom} */ oom,
  /** @type {import("@notml/core").OOMElementProxy} */ assets,
  /** @type {import("@notml/core").OOMElementProxy} */ scene
) {
  const room = window.localStorage.getItem('room')

  assets(oom
    .img({
      id: 'grid',
      src: '/scene/img/grid.png',
      crossorigin: 'anonymous'
    })
    .img({
      id: 'sky',
      src: '/scene/img/sky.png',
      crossorigin: 'anonymous'
    }))
  scene(oom
   /** .aEntity({
      staticBody: true,
      position: '0 0 0',
      geometry: 'primitive: plane; width: 300; height: 300;',
      rotation: '-90 0 0',
      material: 'src: #grid; repeat: 100 100; transparent: true; metalness:0; roughness: 10; sphericalEnvMap: #sky;'
    }) */
    .aEntity({ light: 'color: white; intensity: 1.5; type: ambient;', visible: '' })
    .aSky({ src: '#sky', rotation: '0 -90 0' }))

  await import(`./room/${room}.js`).then(({ markup }) => markup(oom, assets, scene))
}
