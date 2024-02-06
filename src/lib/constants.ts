import { type Moods, type Mood, type DateFilter } from '@/types'

export const moods: Array<Moods[Mood]> = [
  { mood: 'OVERWHELMED', emoji: '😱' },
  { mood: 'DISCOURAGED', emoji: '😔' },
  { mood: 'WORRIED', emoji: '😟' },
  { mood: 'ANGRY', emoji: '😡' },
  { mood: 'ANXIOUS', emoji: '😨' },
  { mood: 'BALANCED', emoji: '😐' },
  { mood: 'HAPPY', emoji: '😊' },
  { mood: 'VERY_HAPPY', emoji: '😁' }
]

export const dateFilters: DateFilter[] = ['ALL', 'TODAY', 'WEEK', 'MONTH', 'YEAR']
