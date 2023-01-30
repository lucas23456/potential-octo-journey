export async function markup(
  /** @type {import("@notml/core").oom} */ oom,
  /** @type {Function} */ loadPage
) {
  const style = document.createElement('style')

  style.innerHTML = `
    body{display: flex; justify-content: center; align-items: center; height: 130vh; overflow-x: hidden; overflow-y: hidden;}
    login-form .content { display: flex;  flex-direction: row; width: 600px; }
    login-form {display: flex; justify-content: center; align-items: center;}
    login-form .login { display: flex; justify-content: center;}
    login-form .space { margin: 4px }
    login-form{display: flex; align-items: center; flex-direction: column;}
    .selector{visibility: hidden;}
    button{background: #0d73ac; color: white; border: none; border-radius: 5px; cursor: pointer; width: 80px;}
  `

  oom(document.head, style)

  await Promise.all([
    import('https://cdn.jsdelivr.net/npm/@material/mwc-top-app-bar-fixed@0.25.3/+esm'),
    import('https://cdn.jsdelivr.net/npm/@material/mwc-select@0.25.3/+esm'),
    import('https://cdn.jsdelivr.net/npm/@material/mwc-textfield@0.25.3/+esm'),
  ])


  class LoginForm extends oom.extends(HTMLElement) {

    static tagName = 'login-form'
    // https://github.com/nodutilus/notml/issues/2
    // static style = oom.style({
    //   '.content': { display: 'flex', flexDirection: 'column' },
    //   '.login': { display: 'flex', justifyContent: 'flex-end' },
    //   '.space': { margin: '8px' }
    // })

    rooms = [
      //{ id: 'demo', name: 'Folding building' },
      //{ id: 'empty', name: 'ToryLab' },
      // { id: 'blackSpiral', name: 'BlackBoxGallery0' },
      { id: 'gallery1', name: 'Gallery' },
      // { id: 'spiral', name: 'Spiral' }
    ]

    template = () => {
      const room = 'gallery1'
     const username = window.localStorage.getItem('username') || ''
      const roomElm = oom
        .mwcSelect({ class: 'selector', style:"visibility: hidden", required: true, label: 'Комната' })
      const usernameElm = oom
        .mwcTextfield({ class: 'space', required: true, label: 'Ваше имя (A-Z a-z)', pattern: '[\\w ().]+', value: username })

        let textvr = `VR-галерея — это виртуальная реальность в мире искусства. Новые технологии позволяют исследовать и создавать оригинальные выставочные пространства, погружая зрителей в арт-объект при помощи сразу нескольких органов чувств.
                    Любой желающий теперь может не только оценить красоту глазами, но даже оказаться внутри картины, услышать звуки, мелодии, шорохи, а иногда – почувствовать прикосновение.
                    К этому же сегменту искусства относят онлайн-выставки. Виртуальные галереи открывают возможности глобального охвата аудитории, популяризируют искусство, делая подобные бизнес-проекты востребованными и прибыльными. Виртуальные мероприятия доступны 24 часа в сутки, 7 дней в неделю. Они стали отличной альтернативой для любителей искусства, кто не может посетить музей лично. Это особенно актуально в эпоху COVID-19 – закрытых границ и режима изоляции.
                    Любой человек 21 века легко может ознакомиться с экспонатами частных коллекций, посетив интерактивный музей. После виртуальной экскурсии стало возможным приобрести произведения искусства из любой точки мира.`


      for (const { id, name } of this.rooms) {
        roomElm(oom
          .mwcListItem({ selected: room === id, value: id }, name))
      }

      /** @type {import("@material/mwc-select").Select} */ // @ts-ignore
      this.room = roomElm.dom
      /** @type {import("@material/mwc-textfield").TextField} */ // @ts-ignore
      this.username = usernameElm.dom


      let buttontxt = "Вход"



      return oom
      .div({ style: "margin: 0 auto;" }, oom
        .div({ slot: 'text', style:"margin-top: -25vh; margin-left: 31%; text-align: justify; font-size: small; z-index: 5; color: white; width: 50%"}, textvr))
        .div({ class: 'content space' }, this.room, this.username, oom
          .div({ class: 'login space' }, oom.button({
            onclick: () => this.openRoom(),
            ...{ icon: 'login', id:"myButton"}
          },buttontxt)))
    }

    openRoom() {
      const room = this.room.value
      const username = this.username.value

      let meta = window.parent.document.getElementById('close');

      meta.className ="closemulti";

      if (room && username && this.username.checkValidity()) {
        window.localStorage.setItem('room', room)
        window.localStorage.setItem('username', username)
        loadPage('scene')
      }



    }

  }


  oom.define(LoginForm)
  oom(window.document.body, new LoginForm())
}
