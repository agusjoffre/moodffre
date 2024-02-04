'use client'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'
import { type Activity } from '@/types'
import { Input } from '@/components/ui/input'
import { Button } from './ui/button'

export default function ActivityForm ({ uniqueActivities }: { uniqueActivities: Activity[] }): JSX.Element {
  const [open, setOpen] = useState(false)
  return (
        <section>
      {/* select de actividades ya existentes y/o input para crear. */}
      <div>
        <h1 className='text-xl font-semibold text-white'>What are you doing?</h1>
        <h3>Select one of the following or add a new activity</h3>
      </div>
      <div className='flex gap-2'>
        {uniqueActivities?.map((activity): JSX.Element => {
          return (
           <Badge className='cursor-pointer' key={activity}>{activity}</Badge>
          )
        })}
      </div>
      <div>
        <Button onClick={() => { setOpen(!open) }}>+</Button>
        {open && (
          <div>
            <Input className='w-fit' type="text" placeholder='e.g working'/>
            <Button>Add</Button>
          </div>
        )}
      </div>
      <Button>Next</Button>
        </section>
  )
}
