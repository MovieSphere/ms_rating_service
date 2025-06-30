// Conexión a DynamoDB (o tu base de datos)
const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = process.env.DB_TABLE_NAME || 'product-ratings';

exports.getRatingFromDB = async (productId) => {
  const params = {
    TableName: TABLE_NAME,
    Key: { productId }
  };

  try {
    const data = await dynamodb.get(params).promise();
    return data.Item ? data.Item.rating : null;
  } catch (error) {
    console.error('Error en DB:', error);
    throw error;
  }
};

// Mock para desarrollo local
if (process.env.NODE_ENV === 'test') {
  exports.getRatingFromDB = jest.fn();
}
