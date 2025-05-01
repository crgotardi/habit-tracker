import api from '../index'
import handleRequestError from '@/utils/handleRequestError';

export async function getHabits() {
    try {
        const response = await api.get(`/habits`)

        if (response?.status !== 200) {
            throw new Error('Error getting habits')
        }

        return response.data
    } catch (error) {
        handleRequestError(error)
    }
}

export async function getStrikes() {
    try {
        const response = await api.get(`/strikes`)

        if (response?.status !== 200) {
            throw new Error('Error getting strikes')
        }

        return response.data
    } catch (error) {
        handleRequestError(error)
    }
}