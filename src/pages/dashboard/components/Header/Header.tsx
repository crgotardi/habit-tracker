import Avatar from "@/components/Avatar/Avatar"
import Button from "@/components/Button/Button"
import { Nav, NavItem } from "@/components/Nav"
import AuthContext from "@/contexts/AuthContext"
import { use } from "react"

const Header:React.FC = () => {
    const { signOut, isLoading, user } = use(AuthContext)

    return (
        <header className="flex items-center justify-between px-8 py-2 bg-background text-foreground">
            <span className="cursor-pointer">
                Logo
            </span>
            <Nav>
                {user && (
                    <NavItem>
                        <Avatar
                            src='https://avatar.iran.liara.run/public/50'
                            alt={user.name}
                        />
                        <span className="ml-4">{user.name}</span>
                    </NavItem>
                )}
                
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