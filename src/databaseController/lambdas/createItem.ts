import { APIGatewayProxyHandler } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async (event) => {
  console.log('createItem event: ', JSON.stringify(event));

  return {
    statusCode: 201,
    body: JSON.stringify({ hello: 'world' }),
  };
};
