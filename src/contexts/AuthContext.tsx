import { UserType } from '@/types/user'
import React, { createContext, useState } from 'react'

type AuthContextProps = {
    user: UserType | undefined
    setUser: (user: UserType) => void
}

const AuthContext = createContext<AuthContextProps>({
    user: undefined,
    setUser: () => {}
})

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [user, setUser] = useState<UserType | undefined>(undefined)

    const contextValue = { user, setUser }

    return (
        <AuthContext.Provider value={{ ...contextValue }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext

