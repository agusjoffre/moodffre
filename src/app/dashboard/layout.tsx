import Sidebar from '@/components/dashboard/Sidebar'

export default function DashboardLayout ({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <main>
      <Sidebar/>
          {children}
    </main>
  )
}
