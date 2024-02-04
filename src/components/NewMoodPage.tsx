'use client'
import { useState } from 'react'
import { type Mood } from '@/types'
import MoodForm from './MoodForm'
import ActivityForm from './ActivityForm'
import DescriptionForm from './DescriptionForm'
import MoodDetails from './MoodDetails'

export default function NewMoodPage (): JSX.Element {
  /* mood es un objeto de tipo Mood */
  const [mood, setMood] = useState<Mood | null>(null)
  return (
        <main>
            { /*
            primero mood y despues activity, despues description,
            despues detalles del mood completo y despues submit
            */}
      <MoodForm />
      <ActivityForm />
      <DescriptionForm />
      <MoodDetails/>
        </main>
  )
}
