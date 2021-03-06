export default {
  subnotes:{
    link_text: `по&nbsp;<a :href="link" class="link-help">ccылке</a>`
  },

  footer: { 
    menu: [
      {
        img: 'slide1.jpg',
        text: 'Обзор проекта Система Bitbon',
        link: '/firstpitch',
        slug: '/firstpitch',
        bg_active: ['#3e4f94', '#00083e']
      },
      {
        img: 'slide1.jpg',
        text: 'Обзор проекта Система Bitbon',
        link: '/firstpitch2',
        slug: '/firstpitch2',
        bg_active: [ '#5b3f70', '#27133e']
      },
      {
        img: 'slide1.jpg',
        text: 'Обзор проекта Система Bitbon',
        link: '/firstpitch3',
        slug: '/firstpitch3',
        bg_active: ['#848a98', '#333540']
      },
      {
        img: 'slide1.jpg',
        text: 'Обзор проекта Система Bitbon',
        link: '/firstpitch4',
        slug: '/firstpitch4',
        bg_active: ['#989784', '#404033']
      },
    ],
  },

  preloader: {
    text_about: 'разработано командой bitbon.today',
    subtitle: 'лучший презентационный материал на тему Cистемы Bitbon'
  },

  burger:{
    firstpitch: {
      points: [
        {
          name: 'Начало',
          hash: 'start'
        },
        {
          name: 'IPO',
          hash: 'ipo'
        },
        {
          name: 'Фондирование',
          hash: 'fondirovanie'
        },
        {
          name: 'О Системе Битбон',
          hash: 'o-sisteme'
        },
        {
          name: 'О токене Битбон',
          hash: 'token-bitbon'
        },
      ]
    }
  }
  /*
  test:'ну',
  infrastructure2slide: {
    title:'Инфраструктура системы bitbon',
    subtitle: 'инвестиционная привлекательность',
    article: {
      chapter1:{
        title: 'Оператор',
        text: `<a class="link-help" href="">Пользователь</a> Системы с расширенными полномочиями. В задачи Оператора входят: <span class="bold">поддержка и развитие Системы Bitbon.</span>Сейчас роль Оператора выполняет компания Симкорд. В процессе развития Системы часть своих полномичий Симкорд будет делегировать другим Операторам. В момент когда количество Операторов достигнет 1,345 все полномочия будут разделены, и наступит полная децентрализация Системы Bitbon.`
      },
      chapter2:{
        title: 'Bitup-Агентство',
        text: `Лицензированная <a class="link-help" href="">организация</a>, которая занимается процедурой оцифровки актива, консалтингом, верификацией пользователей, процедурой наследования активов. Сопровождает Контрактата (бизнесмена) от стадии IBO (процесс сбора Bitbon для реализации проекта) и далее.`
      }
    }
  }*/

}
 