import dotenv from 'dotenv'
import path from 'path'

/* This code is using the `dotenv` package to load environment variables from a `.env` file located in
the root directory of the project. process.cwd() means the root directory*/
dotenv.config({
  path: path.join(process.cwd(), '.env'),
})



export default {
                port: process.env.PORT || 5000,
  database_string: process.env.DATABASE_STRING,
}



