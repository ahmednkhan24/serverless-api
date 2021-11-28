import { handler as getAllItemsHandler } from './lambdas/getAllItems';
import { handler as getItemHandler } from './lambdas/getItem';
import { handler as createItemHandler } from './lambdas/createItem';
import { handler as deleteItemHandler } from './lambdas/deleteItem';

export {
  getAllItemsHandler,
  getItemHandler,
  createItemHandler,
  deleteItemHandler,
};
