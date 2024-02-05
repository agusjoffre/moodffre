export interface Moods {
  OVERWHELMED: { mood: 'OVERWHELMED', emoji: '😱' }
  DISCOURAGED: { mood: 'DISCOURAGED', emoji: '😔' }
  WORRIED: { mood: 'WORRIED', emoji: '😟' }
  ANGRY: { mood: 'ANGRY', emoji: '😡' }
  ANXIOUS: { mood: 'ANXIOUS', emoji: '😨' }
  BALANCED: { mood: 'BALANCED', emoji: '😐' }
  HAPPY: { mood: 'HAPPY', emoji: '😊' }
  VERY_HAPPY: { mood: 'VERY_HAPPY', emoji: '😁' }
}

export type Mood = keyof Moods

export interface MoodData {
  mood: Mood.mood
  activity: string
  description?: string
  date?: Date
  userID?: string
}

export type Activity = string

export type DateFilter = 'TODAY' | 'WEEK' | 'MONTH' | 'YEAR' | 'ALL'
