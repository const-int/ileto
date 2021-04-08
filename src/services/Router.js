const Router = {
  getRoute(routeName, extraPath = "") {
    return Router.routes[routeName] + (extraPath && `/${extraPath}`);
  },

  routes: {
    flags: `${process.env.PUBLIC_URL}/images/flags/4x3`
  }
}


export default Router;