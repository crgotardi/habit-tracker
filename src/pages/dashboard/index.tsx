import withAuth from "@/hocs/withAuth"
import Header from "@/pages/dashboard/components/Header/Header"
import Progress from "./components/Progress/Progress"
import Tracker from "./components/Tracker/Tracker"
import Tasks from "./components/Tasks/Tasks"

const Dashboard: React.FC = () => {
    return (
        <>
            <Header />
            <div className="m-4 p-4">
                <h3>Hello, Cristiano</h3>
                <div className="grid grid-cols-4 grid-rows-2 gap-4">
                    <Progress />
                    <Tracker className="col-span-2 row-span-2" />
                    <Tasks />
                </div>
            </div>
        </>
    )
}

const protectedDashboard = withAuth(Dashboard)
export default protectedDashboard