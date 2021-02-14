export default context => {
  if (context.$device.isMobileOrTablet){
    return 'default'
  } else if (context.route.path === '/'){
    return 'defaultPC'
  } else {
    return 'defaultPCpitch'
  }
}