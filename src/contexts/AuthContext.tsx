import { toast } from 'sonner';
import React, { createContext, use, useCallback, useEffect, useMemo, useState } from 'react'
import delay from '@/utils/delay';
import { SignInType, SignUpType, UserType } from '@/types/user';
import { createUser, getUserByEmail } from '@/api/services/userService';


type AuthContextProps = {
    user: UserType | undefined
    isLoading: boolean,
    signUp: (user: SignUpType) => Promise<UserType | undefined>
    signIn: (user: SignInType) => Promise<UserType | undefined>
    signOut: () => void
}

const AuthContext = createContext<AuthContextProps | null>(null)

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [user, setUser] = useState<UserType | undefined>(undefined)
    const [isLoading, setIsLoading] = useState(false)

    const signUp = useCallback(async (data: SignUpType): Promise<UserType | undefined> => {
        try {
            setIsLoading(true)
            const response = await createUser(data)
            return response
        } catch (error: unknown) {
            toast.error('An error occurred while registering')
            throw new Error(`unable to sign up: ${error}`)
        } finally {
            setIsLoading(false)
        }
    }, [])

    const signIn = useCallback(async (data: SignInType): Promise<UserType | undefined>  => {
        try {
            setIsLoading(true)
            const user = await getUserByEmail(data.email)

            if (user) {
                setIsLoading(false)
                setUser(user)
                sessionStorage.setItem('user', JSON.stringify(user))
                return user
            }

            throw new Error('user not found')
        } catch (error: unknown) {
            if (error instanceof Error) {
                toast.error(error.message)
            }
        } finally {
            setIsLoading(false)
        }
    }, [])

    const signOut = useCallback(async () => {
        try {
            setIsLoading(true)
            await delay(1000)
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
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = (): AuthContextProps => {
    const context = use(AuthContext)

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }

    return context
}

export default AuthContext