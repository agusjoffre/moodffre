'use server'
import MoodLayout from '@/components/MoodLayout'
import { getUniqueActivities } from '@/server-actions/queries'

export default async function Home (): Promise<JSX.Element> {
  const uniqueActivities = await getUniqueActivities()
  return (
    <main className='min-h-screen min-w-screen flex flex-col gap-10 py-10 items-center'>
      <h1>Moodffre app</h1>
      <MoodLayout uniqueActivities={uniqueActivities}/>
    </main>
  )
}
