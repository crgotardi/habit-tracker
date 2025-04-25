import { use } from "react"
import Progress from "./components/Progress/Progress"
import Tasks from "./components/Tasks/Tasks"
import Tracker from "./components/Tracker/Tracker"
import withAuth from "@/hocs/withAuth"
import withHeader from "@/hocs/withHeader"
import DashboardLayout from "@/layouts/DashboardLayout"
import AuthContext from "@/contexts/AuthContext"
import clsx from "clsx"

const Dashboard = () => {
    const { user } = use(AuthContext)

    const gridClass = {
        container: clsx('grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 grid-rows-2 gap-4'),
        progress: clsx(''),
        tracker: clsx('lg:col-span-3 md:col-span-2 row-span-2'),
        tasks: clsx('lg:col-start-1 md:col-start-2 col-start-1 lg:row-start-2 md:row-start-1')
    }

    return (
        <DashboardLayout>
            <h3>Hello, { user?.name ?? 'Guest' }</h3>
            
            <div className={gridClass.container}>
                <Progress className={gridClass.progress} />
                <Tracker className={gridClass.tracker} />
                <Tasks className={gridClass.tasks} />
            </div>
        </DashboardLayout>
    )
}

const protectedDashboard = withAuth(Dashboard)
const DashboardWithHeader = withHeader(protectedDashboard)

export default DashboardWithHeader