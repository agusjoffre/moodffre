'use server'
import StatisticsPage from '@/components/dashboard/statistics/StatisticsPage'
import MoodLayout from '@/components/MoodLayout'
import { getUniqueActivities } from '@/server-actions/queries'

export default async function DashboardPage (): Promise<JSX.Element> {
  const uniqueActivities = await getUniqueActivities()

  return (
        <section>
            <MoodLayout uniqueActivities={uniqueActivities}/>
            <StatisticsPage uniqueActivities={uniqueActivities}/>
        </section>
  )
}
