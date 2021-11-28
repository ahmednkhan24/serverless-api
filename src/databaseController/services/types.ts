import { DynamoDB } from 'aws-sdk';

export type DynamoGetAllItemsParams = DynamoDB.DocumentClient.ScanInput;

export type DynamoGetItemParams = DynamoDB.DocumentClient.GetItemInput;

export type DynamoPutItemParams = DynamoDB.DocumentClient.PutItemInput;
