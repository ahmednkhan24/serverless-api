import { config, DynamoDB } from 'aws-sdk';

config.update({
  region: 'us-east-2',
});

const dynamo = new DynamoDB.DocumentClient();

const TABLE_NAME = process.env.DB_TABLE_NAME || 'Sample_Database';

export const getAllItems = async () => {
  try {
    console.log(`starting scan on the ${TABLE_NAME} database table...`);

    let data = await dynamo.scan({ TableName: TABLE_NAME }).promise();
    let databaseItems = [...data.Items];

    // scan maxes out at 1MB of data. continue scanning if there is more data to read
    while (typeof data.LastEvaluatedKey !== 'undefined') {
      console.log('Scanning for more...');

      const params = {
        TableName: TABLE_NAME,
        ExclusiveStartKey: data.LastEvaluatedKey,
      };

      data = await dynamo.scan(params).promise();
      databaseItems = [...databaseItems, ...data.Items];
    }

    console.log(
      `Finished scanning all database items from the ${TABLE_NAME} table.`
    );
    console.log(`Scanned ${databaseItems.length} items.`);

    return databaseItems;
  } catch (err) {
    console.log('An error occurred: ', JSON.stringify(err));
    return [];
  }
};
