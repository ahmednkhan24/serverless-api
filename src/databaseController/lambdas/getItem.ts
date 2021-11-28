import { APIGatewayProxyHandler } from 'aws-lambda';
import { getItem } from '../services/dynamo';

export const handler: APIGatewayProxyHandler = async (event) => {
  try {
    console.log('event: ', JSON.stringify(event));
    const { id } = event.pathParameters;
    const item = await getItem(id);

    return {
      statusCode: 200,
      body: JSON.stringify(item),
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
