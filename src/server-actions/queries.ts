'use server'
import type mongoose from 'mongoose'
import MoodSchema from '@/db/models/MoodSchema'
import connectDB from '@/db/connectDB'
import { type Activity, type MoodData } from '@/types'
import { auth } from '@clerk/nextjs'
import { revalidatePath } from 'next/cache'

const { userId } = auth()
export const getAllMoods = async (): Promise<mongoose.Document[]> => {
  try {
    await connectDB()
    const moods: mongoose.Document[] = await MoodSchema.find({ userID: userId })
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
    const activities: mongoose.Document[] = await MoodSchema.find({ userID: userId }, 'activity')
    return activities
  } catch (err) {
    const error = err as Error
    console.log(error.message)
    throw new Error(error.message)
  }
}

// activities without repetition
export const getUniqueActivities = async (): Promise<Activity[]> => {
  try {
    await connectDB()
    const activities: Activity[] = await MoodSchema.find({ userID: userId }, 'activity').distinct('activity')
    return activities
  } catch (err) {
    const error = err as Error
    console.log(error.message)
    throw new Error(error.message)
  }
}

export const getMoodsByActivity = async (activity: Activity): Promise<MoodData[]> => {
  try {
    await connectDB()
    const moods: MoodData[] = await MoodSchema.find({ activity, userID: userId })
    return await Promise.all(moods)
  } catch (err) {
    const error = err as Error
    console.log(error.message)
    throw new Error(error.message)
  }
}

export const getMoodsByDate = async (date: Date): Promise<MoodData[]> => {
  try {
    await connectDB()
    const moods: MoodData[] = await MoodSchema.find({ date, userID: userId })
    return moods
  } catch (err) {
    const error = err as Error
    console.log(error.message)
    throw new Error(error.message)
  }
}

export const postMood = async (moodData: MoodData): Promise<void> => {
  try {
    await connectDB()
    const data: MoodData = {
      mood: moodData.mood,
      activity: moodData.activity,
      description: moodData.description,
      date: new Date(),
      userID: userId!
    }
    const newMood = new MoodSchema(data)
    await newMood.save()
    revalidatePath('/')
    console.log('Mood succesfully sent')
  } catch (err) {
    const error = err as Error
    console.log(error.message)
    throw new Error(error.message)
  }
}
