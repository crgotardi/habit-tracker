import clsx from "clsx"
import { ReactNode } from "react"

type NavProps = {
    children: ReactNode
    className?: string
}

const Nav: React.FC<NavProps> = ({ children, className }) => {
    const classList = clsx(
        'flex align-center justify-center gap-6 cursor-pointer',
        className
    )

    return (
        <nav>
            <ul className={classList}>
                {children}
            </ul>
        </nav>
    )
}

export default Nav