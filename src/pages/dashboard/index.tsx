import { use } from "react"
import Button from "@/components/Button/Button"
import AuthContext from "@/contexts/AuthContext"
import withAuth from "@/hocs/withAuth"

const Dashboard: React.FC = () => {
    const { signOut, isLoading } = use(AuthContext)

    return (
        <div>
            <h1>Dashboard</h1>
            <Button
                className="mt-4"
                variant="destructive"
                isLoading={isLoading}
                onClick={signOut}
            >
                Sign Out
            </Button>
        </div>
    )
}

const protectedDashboard = withAuth(Dashboard)

export default protectedDashboard