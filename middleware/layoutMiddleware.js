export default context => {
  if (context.$device.isMobileOrTablet){
    return 'default'
  } else {
    return 'defaultPC'
  }
}