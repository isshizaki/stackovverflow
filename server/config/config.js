import dotenv from 'dotenv';
dotenv.config();
const config ={
    jwtSecret: process.env.JWT_SECRET || "test"
  }

  export default config;