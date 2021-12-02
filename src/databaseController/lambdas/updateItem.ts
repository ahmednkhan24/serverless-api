import { APIGatewayProxyHandler } from 'aws-lambda';
import { updateItem } from '../services/dynamo';

export const handler: APIGatewayProxyHandler = async (event) => {
  try {
    console.log('event: ', JSON.stringify(event));
    const { id } = event.pathParameters;
    const body = JSON.parse(event.body);
    const updatedItem = await updateItem(id, body);

    return {
      statusCode: 200,
      body: JSON.stringify({ id, body }),
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
