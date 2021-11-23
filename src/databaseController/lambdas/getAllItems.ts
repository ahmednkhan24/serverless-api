import { APIGatewayProxyHandler } from 'aws-lambda';
import has from 'lodash/fp/has';
import { getAllItems } from '../services/dynamo';

export const handler: APIGatewayProxyHandler = async (event) => {
  console.log('getAllData event: ', JSON.stringify(event));

  console.log('has headers?: ', has('headers', event));

  const allItems = await getAllItems();
  console.log('allItems: ', JSON.stringify(allItems));

  return {
    statusCode: 200,
    body: `hello`,
  };
};
