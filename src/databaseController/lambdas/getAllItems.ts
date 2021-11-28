import { APIGatewayProxyHandler } from 'aws-lambda';
import { getAllItems } from '../services/dynamo';

export const handler: APIGatewayProxyHandler = async (event) => {
  try {
    console.log('event: ', JSON.stringify(event));
    const allItems = await getAllItems();

    return {
      statusCode: 200,
      body: JSON.stringify(allItems),
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
