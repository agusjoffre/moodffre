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
  mood: Moods
  activity: string
  description?: string
  date?: Date
}

export type Activity = string
