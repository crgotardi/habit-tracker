import { SignUpType } from '@/types/user'
import api from '../index'
import { toast } from 'sonner'
import handleRequestError from '@/utils/handleRequestError'

export async function getUserByEmail(email: string) {
    try {
        const response = await api.get(`/users`, {
            params: {
                email,
            }}
        )

        if (response?.status !== 200) {
            throw new Error('Error retrieving user by email')
        }

        if (!response.data) {
            throw new Error('User not found')
        }

        return response.data[0]
    } catch (error) {
        handleRequestError(error)
    }
}

export async function createUser(data: SignUpType) {
    try {
        const isNewUser = await checkIsNewUser(data.email)

        if (!isNewUser) {
            throw new Error('User already registered')
        }

        const response = await api.post('/users', {
            ...data,
        })

        if (response?.status !== 200) {
            throw new Error('An error occurred while registering the user')
        }
        
        toast.success('User registered successfully')
        return response.data
    } catch (error) {
        handleRequestError(error)
    }
}

export async function deleteUser(id: string) {
    try { 
        const response = await api.delete(`/users/${id}`)
        
        if (response.status !== 200) {
            throw new Error('An error occurred while deleting the user')
        }

        toast.success('User deleted successfully')
        return response.data
    } catch (error) {
        handleRequestError(error)
    }
}

async function checkIsNewUser(email: string) {
    const users = await getUserByEmail(email)

    if (users?.length) {
        return false
    }

    return true
}

