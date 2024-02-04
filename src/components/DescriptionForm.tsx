'use client'
import { Textarea } from '@/components/ui/textarea'
import { Button } from './ui/button'
import { useState } from 'react'
import { type MoodData } from '@/types'

export default function DescriptionForm ({ setMood }): JSX.Element {
  const [description, setDescription] = useState('')
  const handleNextClick = (): void => {
    setMood((prev: MoodData) => ({
      ...prev,
      description
    }))
    setDescription('')
  }
  return (
      <section>
        <div>
          <h2 className='text-xl font-semibold text-white'>Tell us more</h2>
          <h3>Optional</h3>
        </div>
        <div>
          <Textarea value={description} onChange={(e) => { setDescription(e.target.value) }}
            maxLength={200} placeholder='e.g. My computer freeze & I didn’t sleep well' />
        </div>
        <Button type='button' onClick={handleNextClick}>Next</Button>
      </section>
  )
}
