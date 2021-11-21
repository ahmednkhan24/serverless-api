import { GeneratePolicy, BasePolicyParams } from '../types';

// Generate an IAM Formatted Policy response for the Authorizer
const generatePolicy: GeneratePolicy = ({
  principalId,
  effect,
  resource,
  context,
}) => {
  const policyDocument = {
    Version: '2012-10-17',
    Statement: [
      {
        Action: 'execute-api:Invoke',
        Effect: effect,
        Resource: resource,
      },
    ],
  };

  return {
    principalId,
    context,
    policyDocument,
  };
};

// Generate's an Allow IAM policy for the Authorizer
export const generateAllow = (params: BasePolicyParams) =>
  generatePolicy({ ...params, effect: 'Allow' });

// Generate's a Deny IAM policy for the Authorizer
export const generateDeny = (params: BasePolicyParams) =>
  generatePolicy({ ...params, effect: 'Deny' });

// Generate return parameters for the Authorizer
export const createReturnParams = (methodArn: string): BasePolicyParams => ({
  resource: methodArn,
  principalId: methodArn,
  context: {
    jsonPayload: JSON.stringify({ methodArn, hello: 'from authorizer' }),
  },
});
