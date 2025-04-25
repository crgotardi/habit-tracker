import { ReactNode } from "react"

type NavItemProps = {
    children: ReactNode
}

const NavItem: React.FC<NavItemProps> = ({ children }) => {
    return (
        <li className="py-2 flex items-center">
            {children}
        </li>
    )
}

export default NavItem