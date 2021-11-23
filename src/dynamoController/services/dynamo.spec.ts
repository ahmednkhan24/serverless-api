import { getAllItems } from './dynamo';

jest.mock('aws-sdk', () => ({
  config: {
    update: jest.fn(),
  },
  DynamoDB: {
    DocumentClient: jest.fn(() => ({
      scan: jest.fn(() => ({
        promise: jest.fn(() =>
          Promise.resolve({
            Items: [
              {
                id: '1',
                hello: 'world',
              },
            ],
            Count: 1,
            ScannedCount: 1,
          })
        ),
      })),
      put: jest.fn(),
    })),
  },
}));

describe('dynamo', () => {
  it('returns all items from the database', async () => {
    const [actual] = await getAllItems();
    expect(actual.id).toEqual('1');
    expect(actual.hello).toEqual('world');
  });
});
