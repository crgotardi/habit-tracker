import { ComponentType, ReactNode, use } from "react"
import { Navigate } from "react-router-dom"
import AuthContext from "@/contexts/AuthContext"

type WithAuthProps = {
    children?: ReactNode
}

const withAuth = <P extends WithAuthProps>(WrappedComponent: ComponentType<P>) => {
    const ComponentWithAuth: React.FC<P> = (props) => {
        const { user } = use(AuthContext)

        if (!user) {
            return (
                <Navigate to="/signin" replace />
            )
        }
    
        return (
            <WrappedComponent {...props} />
        )
    }

    return ComponentWithAuth
}

export default withAuth