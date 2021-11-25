import { APIGatewayProxyHandler } from 'aws-lambda';
import { createNewItem } from '../services/dynamo';

export const handler: APIGatewayProxyHandler = async (event) => {
  try {
    console.log('createItem event: ', JSON.stringify(event));
    const body = JSON.parse(event.body);
    const createdItem = await createNewItem(body);

    return {
      statusCode: 201,
      body: JSON.stringify({ createdItem }),
      headers: {
        'content-type': 'application/json',
      },
    };
  } catch (err) {
    console.log('Error in handler: ', JSON.stringify(err));
    return {
      statusCode: 500,
      body: 'Internal Server Error',
    };
  }
};
