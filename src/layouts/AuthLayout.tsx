import { ReactNode } from "react"

const AuthLayout: React.FC<{children: ReactNode}> = ({ children }) => {
    return (
        <main className="w-dvw h-dvh flex justify-center items-center blue-gradient">
            { children }
        </main>
    )
}

export default AuthLayout