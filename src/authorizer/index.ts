import has from 'lodash/fp/has';
import { generateAllow, generateDeny, createReturnParams } from './utils';
import { LambdaAuthorizerHandler } from './types';

export const handler: LambdaAuthorizerHandler = async (event) => {
  console.log('authorizer event: ', JSON.stringify(event));
  const { routeArn, headers } = event;
  console.log('has headers?: ', has('headers', event));

  try {
    const params = createReturnParams(routeArn);

    return headers.authorization === 'hello'
      ? generateAllow(params)
      : generateDeny(params);
  } catch (err) {
    console.error('Authorization error: ', err);
    return generateDeny({ principalId: null, resource: routeArn });
  }
};
