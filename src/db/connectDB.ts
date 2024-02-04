/* eslint-disable @typescript-eslint/no-non-null-assertion */
import mongoose from 'mongoose'

let isConnected: boolean

const connectDB = async (): Promise<void> => {
  if (isConnected) {
    return
  }
  try {
    await mongoose.connect('mongodb+srv://controldoblev:mcELAErKX7VgHkSj@cluster0.yididsf.mongodb.net/moodffre?retryWrites=true&w=majority')
    isConnected = true
    console.log('MongoDB connected')
  } catch (err) {
    const error = err as Error
    console.log(error.message)
  }
}

export default connectDB
