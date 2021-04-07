import {Router} from 'express';

module.exports = function({HomeController}){
  const router = Router();

  router.get('/', HomeController.index);

  return router;
}