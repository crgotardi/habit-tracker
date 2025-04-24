import AuthLayout from "@/layouts/AuthLayout"
import SignUpForm from "./components/SignUpForm"

const SignUp: React.FC = () => {
    return (
        <AuthLayout>
            <SignUpForm />
        </AuthLayout>
    )
}

export default SignUp