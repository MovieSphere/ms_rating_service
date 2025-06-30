const { log } = require('./logger');
const { getRatingFromDB } = require('./db'); // O mock para pruebas

exports.getProductRating = async (productId) => {
  try {
    log(`Consultando rating para producto ${productId}`);
    
    const rating = await getRatingFromDB(productId);
    return rating || { average: 0, count: 0 };
    
  } catch (error) {
    log(`Error obteniendo rating: ${error.message}`, 'error');
    throw error;
  }
};

// Handler para AWS Lambda
exports.handler = async (event) => {
  const productId = event.pathParameters?.productId;
  
  try {
    const rating = await exports.getProductRating(productId);
    return {
      statusCode: 200,
      body: JSON.stringify(rating)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};