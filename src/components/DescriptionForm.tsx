import { Textarea } from '@/components/ui/textarea'
import { Button } from './ui/button'

export default function DescriptionForm (): JSX.Element {
  return (
        <section>
      <div>
        <h2 className='text-xl font-semibold text-white'>Tell us more</h2>
      </div>
      <div>
        <Textarea maxLength={200} placeholder='e.g. My computer freeze & I didn’t sleep well' />
      </div>
      <Button>Skip</Button>
      <Button>Next</Button>
        </section>
  )
}
