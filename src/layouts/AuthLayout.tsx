import clsx from "clsx"
import { ReactNode } from "react"

type AuthLayoutProps = {
    children: ReactNode,
    className?: string
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, className }) => {
    const classList = clsx(
        'w-dvw h-dvh flex justify-center items-center',
        className
    )

    
    return (
        <main className={classList}>
            { children }
        </main>
    )
}

export default AuthLayout