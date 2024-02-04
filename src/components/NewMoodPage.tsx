'use client'
import { useState } from 'react'
import { type MoodData } from '@/types'
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

export default function NewMoodPage (): JSX.Element {
  /* mood es un objeto de tipo Mood */
  const [mood, setMood] = useState<MoodData | null>(null)
  return (
        <main className='min-h-screen min-w-screen flex flex-col gap-10 items-center'>
      <Carousel className='w-1/2 gap-1'>
        <CarouselContent >
            <CarouselItem>
              <MoodForm setMood={setMood}/>
            </CarouselItem>
            <CarouselItem>
              <ActivityForm setMood={setMood}/>
          </CarouselItem>
            <CarouselItem>
              <DescriptionForm setMood={setMood}/>
          </CarouselItem>
          <CarouselItem>
              <MoodDetails moodData={mood}/>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious size='icon'/>
        <CarouselNext size='icon'/>
      </Carousel>
        </main>
  )
}
