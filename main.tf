resource "aws_lambda_function" "rating_service" {
  function_name = "ms_rating_service"
  handler       = "index.handler"
  runtime       = "nodejs18.x"
  filename      = "${path.module}/../../deploy/ms_rating_service.zip"
  
  environment {
    variables = {
      LOG_LEVEL          = "info"
      DB_TABLE_NAME      = aws_dynamodb_table.ratings.name
      NODE_ENV           = "production"
    }
  }
}

resource "aws_dynamodb_table" "ratings" {
  name         = "product-ratings"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "productId"

  attribute {
    name = "productId"
    type = "S"
  }
}