import { Button } from '@/components/ui/button'
import { type MoodData } from '@/types'

export default function MoodDetails ({ moodData }: { moodData: MoodData }): JSX.Element {
  return (
    <section>
      <div>
        <h2 className='text-xl font-semibold text-white'>Your mood</h2>
        <h3>Review</h3>
      </div>
          <div>
          <p>You are feeling: {moodData?.mood}</p>
              <p>You are: {moodData?.activity}</p>
        {((moodData?.description) != null) && <p>{moodData?.description}</p>}

      </div>
      <Button>Done</Button>
    </section>
  )
}
