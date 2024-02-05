import { postMood } from '@/server-actions/queries'
import MoodForm from './MoodForm'
import ActivityForm from './ActivityForm'
import DescriptionForm from './DescriptionForm'
import MoodDetails from './MoodDetails'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import React from 'react'
import { type Activity, type MoodData } from '@/types'
import { Button } from './ui/button'

export default function NewMoodPage ({ setMood, mood, setOpen, uniqueActivities }:
{
  setMood: React.Dispatch<React.SetStateAction<MoodData>>
  mood: MoodData | null
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  uniqueActivities: Activity[]
}): JSX.Element {
  const onSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault()
    await postMood(mood)
    setMood(null)
    setOpen(false)
  }

  return (
    <main>
      <form onSubmit={onSubmit} className='w-full h-full flex flex-col items-center'>
      <Carousel className='w-1/2 gap-1'>
        <CarouselContent >
            <CarouselItem>
              <MoodForm setMood={setMood}/>
            </CarouselItem>
            <CarouselItem>
              <ActivityForm uniqueActivities={uniqueActivities} setMood={setMood}/>
          </CarouselItem>
            <CarouselItem>
              <DescriptionForm setMood={setMood}/>
          </CarouselItem>
          <CarouselItem>
              <MoodDetails moodData={mood}/>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious size='icon' type='button'/>
        <CarouselNext size='icon'type='button'/>
        </Carousel>
        <Button type='submit'>Done</Button>
        </form>
        </main>
  )
}
