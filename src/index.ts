import { handler as authorizerHandler } from './authorizer';
import { handler as getAllItemsHandler } from './databaseController/lambdas/getAllItems';
import { handler as getItemHandler } from './databaseController/lambdas/getItem';
import { handler as createItemHandler } from './databaseController/lambdas/createItem';
import { handler as updateItemHandler } from './databaseController/lambdas/updateItem';
import { handler as deleteItemHandler } from './databaseController/lambdas/deleteItem';

export {
  authorizerHandler,
  getAllItemsHandler,
  getItemHandler,
  createItemHandler,
  updateItemHandler,
  deleteItemHandler,
};
