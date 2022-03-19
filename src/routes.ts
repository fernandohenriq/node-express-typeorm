import { GetAllVideosController } from './Controllers/GetAllVideosController';
import { CreateVideoController } from './Controllers/CreateVideoController';
import { UpdateCategoriesController } from './Controllers/UpdateCategoryController';
import { DeleteCategoriesController } from './Controllers/DeleteCategoryController';
import { GetAllCategoriesController } from './Controllers/GetAllCategoriesController';
import { CreateCategoryController } from './Controllers/CreateCategoryController';
import { Router } from "express";

const routes = Router();

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.delete("/categories/:id", new DeleteCategoriesController().handle);
routes.put("/categories/:id", new UpdateCategoriesController().handle);

routes.post("/videos", new CreateVideoController().handle);
routes.get("/videos", new GetAllVideosController().handle);

export { routes };
