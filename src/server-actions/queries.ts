import type mongoose from 'mongoose'
import MoodSchema from '@/db/models/MoodSchema'
import connectDB from '@/db/connectDB'

export const getAllMoods = async (): Promise<mongoose.Document[]> => {
  try {
    await connectDB()
    const moods: mongoose.Document[] = await MoodSchema.find()
    return moods
  } catch (err) {
    const error = err as Error
    console.log(error.message)
    throw new Error(error.message)
  }
}

export const getOneMoodById = async (id: string): Promise<mongoose.Document[]> => {
  try {
    await connectDB()
    const mood = await MoodSchema.findById(id)
    return mood
  } catch (err) {
    const error = err as Error
    console.log(error.message)
    throw new Error(error.message)
  }
}

export const getAllActivities = async (): Promise<mongoose.Document[]> => {
  try {
    await connectDB()
    const activities: mongoose.Document[] = await MoodSchema.find({}, 'activity')
    return activities
  } catch (err) {
    const error = err as Error
    console.log(error.message)
    throw new Error(error.message)
  }
}

// activities without repetition
export const getUniqueActivities = async (): Promise<mongoose.Document[]> => {
  try {
    await connectDB()
    const activities: mongoose.Document[] = await MoodSchema.find({}, 'activity').distinct('activity')
    return activities
  } catch (err) {
    const error = err as Error
    console.log(error.message)
    throw new Error(error.message)
  }
}

export const getMoodsByActivity = async (activity: string): Promise<mongoose.Document[]> => {
  try {
    await connectDB()
    const moods: mongoose.Document[] = await MoodSchema.find({ activity })
    return moods
  } catch (err) {
    const error = err as Error
    console.log(error.message)
    throw new Error(error.message)
  }
}

export const getMoodsByDate = async (date: Date): Promise<mongoose.Document[]> => {
  try {
    await connectDB()
    const moods: mongoose.Document[] = await MoodSchema.find({ date })
    return moods
  } catch (err) {
    const error = err as Error
    console.log(error.message)
    throw new Error(error.message)
  }
}
