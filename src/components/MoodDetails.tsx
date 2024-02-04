import { Button } from '@/components/ui/button'
import { type MoodData } from '@/types'

export default function MoodDetails ({ moodData, handleDone }: { moodData: MoodData | null, handleDone: () => void }): JSX.Element {
  return (
    <section>
      <div>
        <h2 className='text-xl font-semibold text-white'>Your mood</h2>
        <h3>Review</h3>
      </div>
          <div>
          <p>Mood: {moodData?.mood}</p>
              <p>Activity: {moodData?.activity}</p>
        {((moodData?.description) != null) && <p>Description: {moodData?.description}</p>}

      </div>
    </section>
  )
}
