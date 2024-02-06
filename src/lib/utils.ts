import { getEmotionByActivity, getUniqueActivities } from '@/server-actions/queries'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn (...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getEmotionByActivityCount = async (emotionSelected) => {
  const uniqueActivities = await getUniqueActivities()
  const emotionCountsByActivity: number[] = []
  for (const activity of uniqueActivities) {
    const emotions = await getEmotionByActivity(activity)
    const emotionCount = emotions?.filter(emot => emot.mood === emotionSelected).length
    emotionCountsByActivity.push(emotionCount)
  }
  return emotionCountsByActivity
}
