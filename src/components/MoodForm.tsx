import { moods } from '@/lib/constants'
import { Button } from '@/components/ui/button'

export default function MoodForm (): JSX.Element {
  return (
    <section>
      <div>
        <h2 className='text-xl font-semibold text-white'>How are you feeling today?</h2>
        <h3>Select one of the following</h3>
      </div>
          <div>
          {moods.map((mood): JSX.Element => {
            return (
              <Button key={mood.mood}>{mood.emoji} {mood.mood}</Button>
            )
          })}
      </div>
      <Button>Next</Button>
        </section>
  )
}
