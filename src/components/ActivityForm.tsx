'use client'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'
import { type MoodData, type Activity } from '@/types'
import { Input } from '@/components/ui/input'
import { Button } from './ui/button'

export default function ActivityForm ({ uniqueActivities, setMood }):
JSX.Element {
  const [open, setOpen] = useState(false)
  const [newActivity, setNewActivity] = useState('')
  const handleClick = (): void => {
    setMood((prev: MoodData) => ({
      ...prev,
      activity: newActivity
    }))
    setNewActivity('')
    setOpen(false)
  }
  return (
      <section>
        <div>
          <h1 className='text-xl font-semibold text-white'>What are you doing?</h1>
          <h3>Select one of the following or add a new activity</h3>
        </div>
        <div className='flex gap-2'>
          {uniqueActivities?.map((activity: Activity): JSX.Element => {
            return (
              <Badge onClick={() => {
                setMood((prev: MoodData) => ({
                  ...prev,
                  activity
                }))
              }} className='cursor-pointer' key={activity}>{activity}</Badge>
            )
          })}
        </div>
        <div>
          <Button type='button' onClick={() => { setOpen(!open) }}>+</Button>
          {open && (
            <div>
            <Input
              className='w-fit'
              type="text" placeholder='e.g working'
              value={newActivity}
              onChange={(e) => { setNewActivity(e.target.value) }} />
              <Button onClick={handleClick}>Select</Button>
            </div>
          )}
        </div>
      </section>
  )
}
