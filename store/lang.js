export const state = () => ({
  lang: [
    {
      lang: 'ru',
      title: 'РУ',
      alt: 'russian language',
      img: require('~/assets/img/lang/ru.svg'),
    },
    {
      lang: 'en',
      title: 'EN',
      alt: 'russian language',
      img: require('~/assets/img/lang/ru.svg'),
    },
  ]
})

export const getters = {
  getLang: (state) =>  {
    return state.lang;
  }
}