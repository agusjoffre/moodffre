'use client'
import { moods } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import { type Moods, type MoodData, type Mood } from '@/types'

export default function MoodForm ({ setMood }): JSX.Element {
  return (
    <section>
      <div>
        <h2 className='text-xl font-semibold text-white'>How are you feeling today?</h2>
        <h3>Select one of the following</h3>
      </div>
          <div>
          {moods.map((moo): JSX.Element => {
            return (
              <Button onClick={
                () => {
                  setMood((prev: MoodData) => ({
                    ...prev,
                    mood: moo.mood
                  }))
                }
              } key={moo.mood}>{moo.emoji} {moo.mood}</Button>
            )
          })}
      </div>
        </section>
  )
}
