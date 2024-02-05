/* eslint-disable @typescript-eslint/no-non-null-assertion */
import mongoose from 'mongoose'

let isConnected: boolean
const { MONGO_URI } = process.env

const connectDB = async (): Promise<void> => {
  if (isConnected) {
    return
  }
  try {
    await mongoose.connect(MONGO_URI!)
    isConnected = true
    console.log('MongoDB connected')
  } catch (err) {
    const error = err as Error
    console.log(error.message)
  }
}

export default connectDB
