import Header from "@/pages/dashboard/components/Header/Header"
import React, { ComponentType, ReactNode } from "react"

type WithHeaderProps = {
    children?: ReactNode
}

const withHeader = <P extends WithHeaderProps>(WrappedComponent: ComponentType<P>) => {
    const componentWithHeader: React.FC<P> = (props) => {
        return (
            <WrappedComponent {...props}>
                <Header />
                {props.children}
            </WrappedComponent>
        )
    }

    return componentWithHeader
}

export default withHeader