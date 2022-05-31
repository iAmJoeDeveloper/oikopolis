const propertiesRouter = require('./properties.router');

function routerApi(app) {
  app.use('/properties', propertiesRouter);
}

module.exports = routerApi;
