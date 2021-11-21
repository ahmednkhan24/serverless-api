import { APIGatewayProxyHandler } from 'aws-lambda';
import has from 'lodash/fp/has';

const generateRandomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min) + min);

export const handler: APIGatewayProxyHandler = async (event) => {
  const min = 1;
  const max = 100;
  const randomNumber = generateRandomNumber(min, max);

  console.log('has headers?: ', has('headers', event));

  return {
    statusCode: 200,
    body: `Random number between ${min} and ${max}: ${randomNumber}`,
  };
};
