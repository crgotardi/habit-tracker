import Header from "@/pages/dashboard/components/Header/Header"
import clsx from "clsx"
import { ReactNode } from "react"

type DashboardLayoutProps = {
    children: ReactNode,
    className?: string
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, className }) => {
    const classList = clsx(
        'm-4 p-4',
        className
    )

    return (
        <>
            <Header />
            <main className={classList}>
                { children }
            </main>
        </>
    )
}

export default DashboardLayout