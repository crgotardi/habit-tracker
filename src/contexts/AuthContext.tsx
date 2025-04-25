import { toast } from 'sonner';
import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react'
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

    const signUp = useCallback(async (user: UserType) => {
        try {
            setIsLoading(true)
            await delay(3000)
            setUser(user)
            toast.success('Successfully registered')
        } catch (error: unknown) {
            toast.error('An error occurred while registering')
            throw new Error(`unable to sign up: ${error}`)
        } finally {
            setIsLoading(false)
        }
    }, [])

    const signIn = useCallback(async (user: UserType) => {
        try {
            setIsLoading(true)
            await delay(3000)
            setUser(user)
            sessionStorage.setItem('user', JSON.stringify(user))
        } catch (error: unknown) {
            toast.error('An error occurred while sign in')
            throw new Error(`unable to sign in: ${error}`)
        } finally {
            setIsLoading(false)
        }
    }, [])

    const signOut = useCallback(async () => {
        try {
            setIsLoading(true)
            await delay(3000)
            setUser(undefined)
            toast.success('Successfully signed out')
            sessionStorage.removeItem('user')
        } catch (error: unknown) {
            toast.error('An error occurred while sign out')
            throw new Error(`unable to sign out: ${error}`)
        } finally {
            setIsLoading(false)
        }
    }, [])

    const contextValue = useMemo(() => ({
        isLoading,
        signIn,
        signOut,
        signUp,
        user,
    }), [isLoading, signIn, signOut, signUp, user])

    useEffect(() => {
        try {
            const user = sessionStorage.getItem('user')
    
            if (user) {
                setUser(JSON.parse(user))
            }
        } catch (error: unknown) {
            console.error("Failed to parse user from sessionStorage:", error);
            sessionStorage.removeItem('user');
        }
    }, [])

    return (
        <AuthContext.Provider value={{ ...contextValue }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext