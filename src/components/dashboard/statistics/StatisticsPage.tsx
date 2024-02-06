import Chart from './RadarChart'

export default function StatisticsPage ({ uniqueActivities }): JSX.Element {
  return (
    <section>
          <Chart uniqueActivities={uniqueActivities}/>
    </section>
  )
}
