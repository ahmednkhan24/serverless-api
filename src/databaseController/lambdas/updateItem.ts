import { APIGatewayProxyHandler } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (event) => {
  try {
    console.log('event: ', JSON.stringify(event));
    const { id } = event.pathParameters;
    const body = JSON.parse(event.body);

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
