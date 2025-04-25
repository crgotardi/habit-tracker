import { ComponentPropsWithoutRef, ReactNode } from "react"
import { Button as UiButton } from "@/components/ui/button"
import Spinner from "../Spinner/Spinner"

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
    children: ReactNode,
    className?: string,
    isLoading?: boolean,
    disabled?: boolean,
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost",
    size?: "default" | "sm" | "lg" | "icon",
    onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick, isLoading=false, disabled=false, variant='default', size='default' }) => {
    return (
        <UiButton
            className={className}
            variant={variant}
            size={size}
            onClick={onClick}
            disabled={isLoading || disabled}
        >
            {children}
            {isLoading && ( <Spinner /> )}
        </UiButton>
    )
}

export default Button