import { toast } from 'sonner'

export default function handleRequestError(error: unknown) {
    if (error instanceof Error) {
        toast.error(error.message)
    } else {
        toast.error('An unexpected error occurred')
    }

    console.error(error)
    return error
}