import AuthLayout from "@/layouts/AuthLayout"
import AuthForm from "./components/AuthForm"
import { useCallback, useContext } from "react"
import AuthContext from "@/contexts/AuthContext"
import { AuthFormType } from "@/types/auth"

const Auth: React.FC = () => {
    const { setUser } = useContext(AuthContext)

    const handleAuth = useCallback((authData: AuthFormType) => {
        setUser(authData)
    }, [])
    
    return (
        <AuthLayout>
            <AuthForm handleAuth={handleAuth}/>
        </AuthLayout>
    )
}

export default Auth