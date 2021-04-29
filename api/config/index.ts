import { createConnection } from 'typeorm'
import 'reflect-metadata'
import path from 'path'

createConnection({
  type: 'postgres',
  host: 'serverless-challenge.cbjolq25baj9.us-east-2.rds.amazonaws.com',
  port: 5432,
  username: 'postgres',
  password: 'admin123',
  database: 'serverless-challenge',
  entities: [path.resolve(__dirname, '..', 'api/models/*.js')],
  synchronize: true,
  logging: false
}).then(async () => {
  console.log('Database successfully connected')
}).catch(async () => {
  console.log('Failed to try to connect to database')
})