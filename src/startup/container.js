import { createContainer, asClass, asValue, asFunction } from 'awilix';

//services
import { HomeService } from '../services';

//Controllers
import { HomeController } from '../controllers';

//Routes
import { HomeRoutes } from '../routes/index.routes';

const container = createContainer();
container.register({
  HomeService: asClass(HomeService).singleton()
}).register({
  HomeController: asClass(HomeController.bind(HomeController)).singleton()
}).register({
  HomeRoutes: asFunction(HomeRoutes).singleton()
});

module.exports = container;