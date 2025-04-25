import Button from "@/components/Button/Button"
import { Nav, NavItem } from "@/components/Nav"
import AuthContext from "@/contexts/AuthContext"
import { use } from "react"

const Header:React.FC = () => {
    const { signOut, isLoading } = use(AuthContext)

    return (
        <header className="flex items-center justify-between px-8 py-2 bg-background text-foreground">
            <span className="cursor-pointer">
                Logo
            </span>
            <Nav>
                <NavItem>
                    <p>
                        Cristiano Gotardi
                    </p>
                </NavItem>
                <NavItem>
                    <Button
                        className="text-foreground p-0 m-0"
                        variant="link"
                        isLoading={isLoading}
                        onClick={signOut}
                    >
                        Sign Out
                    </Button>
                </NavItem>
            </Nav>
        </header>
    )
}

export default Header