/* eslint-disable @typescript-eslint/no-non-null-assertion */
import mongoose from 'mongoose'

let isConnected: boolean

const connectDB = async (): Promise<void> => {
  if (isConnected) {
    return
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI!)
    isConnected = true
    console.log('MongoDB connected')
  } catch (err) {
    const error = err as Error
    console.log(error.message)
    process.exit(1)
  }
}

export default connectDB
