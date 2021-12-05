import { handler } from './';
import * as utils from './utils';

const allowPolicySpy = jest.spyOn(utils, 'generateAllow');
const denyPolicySpy = jest.spyOn(utils, 'generateDeny');

const mockEvent = {
  type: 'REQUEST',
  routeArn: 'arn:aws:execute-api:us-east-2:123:abc/$default/GET/',
  headers: {
    authorization: 'hello',
  },
};

describe('Authorizer', () => {
  it('Passes authentication', async () => {
    await handler(mockEvent as any, null);
    expect(allowPolicySpy).toHaveBeenCalled();
  });

  it('Fails authentication', async () => {
    await handler({ ...mockEvent, headers: {} } as any, null);
    expect(denyPolicySpy).toHaveBeenCalled();
  });

  // TODO: add unit test
  it('Handles any runtime errors', () => {
    expect(1).toEqual(1);
  });
});
