import GenIdRoute from './apiRoutes/genIdRouter'
import TodoRoute from './apiRoutes/todosRouter';

const apiRouter = {
    GenerateId: {
        route: 'genid',
        dir: GenIdRoute
    },
    Todo: {
        route: 'todo',
        dir: TodoRoute
    }
}

export default apiRouter;
