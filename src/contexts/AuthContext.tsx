import React, { createContext, useState } from 'react'
import delay from '@/utils/delay';
import { UserType } from '@/types/user';

type AuthContextProps = {
    user: UserType | undefined
    isLoading: boolean,
    signUp: (user: UserType) => void
    signIn: (user: UserType) => void
    signOut: () => void
}

const AuthContext = createContext<AuthContextProps>({
    user: undefined,
    isLoading: false,
    signUp: () => {},
    signIn: () => {},
    signOut: () => {},
})

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [user, setUser] = useState<UserType | undefined>(undefined)
    const [isLoading, setIsLoading] = useState(false)

    async function signUp(user: UserType) {
        try {
            setIsLoading(true)
            await delay(3000)
            setUser(user)
        } catch (error: unknown) {
            throw new Error(`unable to sign up: ${error}`)
        } finally {
            setIsLoading(false)
        }
    }

    async function signIn(user: UserType) {
        try {
            setIsLoading(true)
            await delay(3000)
            setUser(user)
        } catch (error: unknown) {
            throw new Error(`unable to sign in: ${error}`)
        } finally {
            setIsLoading(false)
        }
    }

    async function signOut() {
        try {
            setIsLoading(true)
            await delay(3000)
            setUser(undefined)
        } catch (error: unknown) {
            throw new Error(`unable to sign out: ${error}`)
        } finally {
            setIsLoading(false)
        }
    }

    const contextValue = { user, isLoading, signIn, signOut, signUp }

    return (
        <AuthContext.Provider value={{ ...contextValue }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext

