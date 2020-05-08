const CONFIGS = {
  framework: 'nestjs',
  frameworkFullname: 'NestJs',
  handler: 'sl_handler.handler',
  runtime: 'Nodejs10.15',
  exclude: ['.git/**', '.gitignore', '.DS_Store'],
  timeout: 3,
  memorySize: 128,
  namespace: 'default',
  description: 'This is a function created by serverless component'
}

module.exports = CONFIGS
