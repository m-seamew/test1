export default context => {
  if (context.$device.isMobileOrTablet){
    if(context.route.path === '/'){
      return 'defaultMain'
    }else {
      return 'default'
    }
  } else if (context.route.path === '/'){
    return 'defaultPC'
  } else {
    return 'defaultPCpitch'
  }
}