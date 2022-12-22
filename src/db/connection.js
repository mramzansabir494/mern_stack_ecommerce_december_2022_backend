import mongoose from 'mongoose'
import dotEnv from 'dotenv';
dotEnv.config();

export const connectDB = () => {
  mongoose.connect(process.env.MONGODB_URL
  ).then(
    (data)=>{
      console.log(`MONGODB CONNECTED WITH SERVER: ${data.connection.host}`);
    }).catch((err)=>{
      console.log(err)
    })

    
}

// import mongoose from 'mongoose'

// export const connectDB = (url) => {
//   return mongoose.connect(url)
// }