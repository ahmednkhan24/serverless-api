import { APIGatewayProxyHandler } from 'aws-lambda';

const generateRandomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min) + min);

export const handler: APIGatewayProxyHandler = async () => {
  const min = 1;
  const max = 100;
  const randomNumber = generateRandomNumber(min, max);

  return {
    statusCode: 200,
    body: `Random number between ${min} and ${max}: ${randomNumber}`,
  };
};
