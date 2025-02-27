import { Router } from 'express';

// import all the controllers
import {
    getAllBooks,
    getOneBook,
    createBook,
    updateBook,
    deleteOneBook,
} from '../controllers/bookControllers.js';

// create a new instance or express router
const bookRouter = Router();

// decide which controllers to execute on the specific actions
bookRouter.route('/').get(getAllBooks).post(createBook);

bookRouter.route('/:id').get(getOneBook).put(updateBook).delete(deleteOneBook);

export default bookRouter;
