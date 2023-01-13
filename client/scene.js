export async function markup(/** @type {import("@notml/core").oom} */ oom) {
  const loadingLib = src => new Promise(resolve => {
    oom(window.document.head, oom.script({ src, onload: () => resolve() }))
  })
  const room = window.localStorage.getItem('room')
  const userName = window.localStorage.getItem('username')
  const isArtist = userName.toLocaleLowerCase() === 'artist'
  const isPegasVr = userName.toLocaleLowerCase() === 'pegasvr'
  const isSpeaker = isArtist || isPegasVr
  let hasMic = isSpeaker
  const style = document.createElement('style')

  style.innerHTML = `
    scene-actions { opacity: 0.7; position: fixed; bottom: 8px; left: 8px; }
  `

  oom(document.head, style)

  if (hasMic) {
    const media = await navigator.mediaDevices.getUserMedia({ audio: true }).catch(() => false)

    hasMic = !!media
  }

  // https://github.com/n5ro/aframe-extras/issues/369
  // await loadingLib('https://cdn.jsdelivr.net/npm/aframe@1.3.0/dist/aframe-master.js')
  // await loadingLib('https://aframe.io/releases/1.3.0/aframe.min.js')
  await loadingLib('https://cdn.jsdelivr.net/npm/aframe@1.0.4/dist/aframe-master.js')
  
  
  await loadingLib('./scene/link-blank.js')
  
  await loadingLib('https://cdn.jsdelivr.net/npm/socket.io-client@4.4.1/dist/socket.io.js')
  // https://github.com/open-easyrtc/open-easyrtc/pull/70
  //               'https://cdn.jsdelivr.net/npm/open-easyrtc@2.0.13/api/easyrtc.js'
  await loadingLib('https://cdn.jsdelivr.net/gh/open-easyrtc/open-easyrtc@socket.io-4/api/easyrtc.js')
  await loadingLib('https://cdn.jsdelivr.net/npm/aframe-extras@6.1.1/dist/aframe-extras.js')
  await loadingLib('https://cdn.jsdelivr.net/npm/aframe-thumb-controls-component@2.0.2/dist/aframe-thumb-controls-component.js')
  await loadingLib('https://cdn.jsdelivr.net/npm/aframe-teleport-controls@0.3.1/dist/aframe-teleport-controls.js')
  // https://github.gitop.top/networked-aframe/networked-aframe/issues/280
  // await loadingLib('https://cdn.jsdelivr.net/npm/networked-aframe@0.9.1/dist/networked-aframe.js')
  await loadingLib('https://cdn.jsdelivr.net/npm/networked-aframe@0.8.3/dist/networked-aframe.js')
  //await loadingLib('https://cdn.jsdelivr.net/gh/donmccurdy/aframe-physics-system@v3.2.0/dist/aframe-physics-system.js')
  // добавил отражения enmap.js
  await loadingLib('./scene/models/enmap.js')
  await loadingLib('./scene/models/enmapinner.js')
  
  // добавил разрешение на видео
  //await loadingLib('./scene/play-on-click.js')
  await loadingLib('./scene/hide-on-play.js')
  
  // добавил обработчик событий?
  await loadingLib('https://unpkg.com/aframe-event-set-component@3.0.3/dist/aframe-event-set-component.min.js')
  
  //  добавил поворот на стике
  await loadingLib('https://cdn.jsdelivr.net/npm/gl-matrix@3.0.0/gl-matrix-min.js')
  
  await loadingLib('./scene/vrTurn.js')
  
   //await loadingLib('./newTabLink.js')


  await Promise.all([
    import('https://cdn.jsdelivr.net/npm/@material/mwc-fab@0.25.3/+esm')
  ])

  oom(window.document.head, oom
    .script({ src: './scene/aframe-register-component.js' }))

  const scripts = window.document.head.querySelectorAll('script')
  const script = scripts.item(scripts.length - 1)

  await new Promise(resolve => { script.onload = () => resolve() })

  const assets = oom.aAssets({ id: 'main-assets' })
  const scene = oom.aScene({
    id: 'main-scene',
    // Добавил renderer
    renderer: 'antialias: true; colorManagement: true;',
    physics: 'gravity: -0.5;',
    networkedScene: `room: ${room}; debug: false; adapter: easyrtc; audio: ${hasMic};`
  }, assets)

  oom(window.document.body, scene)

  await import('./scene/aframe-world.js').then(({ markup }) => markup(oom, assets, scene))
  await import('./scene/aframe-avatars.js').then(({ markup }) => markup(oom, assets, scene))

  class SceneActions extends oom.extends(HTMLElement) {

    static tagName = 'scene-actions'
    // https://github.com/nodutilus/notml/issues/2
    // static style = oom.style({
    //   'scene-actions': {
    //     opacity: '0.7',
    //     position: 'fixed',
    //     bottom: '8px',
    //     left: '8px'
    //   }
    // })

    enableMicrophone = true

    micIcon = oom.mwcIcon({ slot: 'icon' }, hasMic ? 'mic' : 'mic_off')
    template = () => {
      const tmpl = oom()

      if (isSpeaker) {
        tmpl(oom
          .mwcFab({
            onclick: () => { if (hasMic) this.toggleMicrophone() },
            ...{ mini: true, label: 'Mic' }
          }, this.micIcon))
      }

      return tmpl
    }

    toggleMicrophone() {
      this.enableMicrophone = !this.enableMicrophone
      // @ts-ignore
      window.NAF.connection.adapter.enableMicrophone(this.enableMicrophone)
      this.micIcon({ innerHTML: this.enableMicrophone ? 'mic' : 'mic_off' })
    }

  }

  oom.define(SceneActions)
  oom(window.document.body, new SceneActions())
}
