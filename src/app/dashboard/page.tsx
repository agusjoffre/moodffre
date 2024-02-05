'use server'
import StatisticsPage from '@/components/dashboard/statistics/StatisticsPage'
import MoodLayout from '@/components/MoodLayout'
import { getAllActivities, getAllMoods, getMoodsByActivity, getUniqueActivities } from '@/server-actions/queries'
import { type Activity, type MoodData } from '@/types'

export default async function DashboardPage (): Promise<JSX.Element> {
  const uniqueActivities = await getUniqueActivities()
  console.log(uniqueActivities)
  const allMoods = await getAllMoods()
  const allActivities = await getAllActivities()
  const moodsGroupedByActivy = uniqueActivities.map(async (activity: Activity): Promise<MoodData[]> => {
    const moods = await getMoodsByActivity(activity)
    return moods
  })
  return (
        <section>
            <MoodLayout uniqueActivities={uniqueActivities}/>
            <StatisticsPage/>
        </section>
  )
}
