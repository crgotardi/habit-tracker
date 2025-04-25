import AuthLayout from "@/layouts/AuthLayout"
import SignInForm from "./components/SignInForm"

const Auth: React.FC = () => {
    return (
        <AuthLayout>
            <SignInForm />
        </AuthLayout>
    )
}

export default Auth