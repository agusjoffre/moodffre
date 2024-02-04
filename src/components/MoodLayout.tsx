'use client'
import { useState } from 'react'
import NewMoodPage from './NewMoodPage'
import { type Activity, type MoodData } from '@/types'
import { Button } from './ui/button'
export default function MoodLayout ({ uniqueActivities }: { uniqueActivities: Activity[] }): JSX.Element {
  const [mood, setMood] = useState<MoodData>({
    mood: 'BALANCED',
    activity: '',
    description: ''
  })
  const [open, setOpen] = useState(false)
  return (
      <>
        <Button onClick={() => {
          setOpen(!open)
        }} className='w-fit '>{open ? 'Close' : 'New mood'}</Button>
      {open && <NewMoodPage setOpen={setOpen} setMood={setMood} mood={mood} uniqueActivities={uniqueActivities}/>}
        </>
  )
}
