import {
  APIGatewayRequestAuthorizerEvent,
  APIGatewayAuthorizerResultContext,
  APIGatewayAuthorizerResult,
} from 'aws-lambda';

export type BasePolicyParams = {
  principalId: string;
  resource: string;
  context?: APIGatewayAuthorizerResultContext;
};

export type PolicyParams = BasePolicyParams & {
  effect: 'Allow' | 'Deny';
};

export type GeneratePolicy = (
  params: PolicyParams
) => APIGatewayAuthorizerResult;

export type LambdaAuthorizerHandler = (
  event: APIGatewayRequestAuthorizerEvent & { routeArn: string },
  context: APIGatewayAuthorizerResultContext
) => Promise<APIGatewayAuthorizerResult>;
