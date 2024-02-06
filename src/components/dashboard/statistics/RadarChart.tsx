'use client'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js'
import { Radar } from 'react-chartjs-2'
import { useState, useEffect } from 'react'
import { moods as emotions } from '@/lib/constants'
import { type Activity } from '@/types'
import { getEmotionByActivityCount } from '@/lib/utils'
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

export default function Chart ({ uniqueActivities }: { uniqueActivities: Activity[] }): JSX.Element {
  const [emotionSelected, setEmotionSelected] = useState(emotions[0].mood)
  const [count, setCount] = useState<number[]>([])

  useEffect(() => {
    const a = async (): Promise<void> => {
      const c: number[] = await getEmotionByActivityCount(emotionSelected)
      setCount(c)
    }
    a().catch(console.error)
  }, [emotionSelected])

  const data = {
    labels: uniqueActivities,
    datasets: [
      {
        label: emotionSelected,
        data: count,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderColor: 'rgb(140, 50, 360)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)',
        fill: true
      }
    ]
  }

  return (
    <div className='w-1/6 h-1/12 bg-transparent shadow-md rounded-lg '>
      <select name="emotions" id="emotions" onChange={(e) => { setEmotionSelected(e.target.value) }}>
        {emotions.map((emotion): JSX.Element => {
          return (
            <option key={emotion.mood} value={emotion.mood}>{emotion.emoji}</option>
          )
        })}
      </select>
      <Radar data={data}/>

    </div>
  )
}
