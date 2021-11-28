import { APIGatewayProxyHandler } from 'aws-lambda';
import { deleteItem } from '../services/dynamo';

export const handler: APIGatewayProxyHandler = async (event) => {
  try {
    console.log('event: ', JSON.stringify(event));
    const { id } = event.pathParameters;
    await deleteItem(id);

    return {
      statusCode: 200,
      body: `Item with id ${id} deleted successfully`,
    };
  } catch (err) {
    console.log('Error in handler: ', JSON.stringify(err));
    return {
      statusCode: 500,
      body: 'Internal Server Error',
    };
  }
};
