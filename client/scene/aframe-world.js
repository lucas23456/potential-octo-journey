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
      src: 'https://cdn.glitch.global/b1780a83-15c5-4154-bd07-deed2726dd55/sky.jpg?v=1671351037168',
      crossorigin: 'anonymous'
    }))
  scene( {}, oom
   /** .aEntity({
      staticBody: true,
      position: '0 0 0',
      geometry: 'primitive: plane; width: 300; height: 300;',
      rotation: '-90 0 0',
      material: 'src: #grid; repeat: 100 100; transparent: true; metalness:0; roughness: 10; sphericalEnvMap: #sky;'
    }) */
    
    .aSky({ src: '#sky', rotation: '0 355 0' }))

  await import(`./room/${room}.js`).then(({ markup }) => markup(oom, assets, scene))
}
