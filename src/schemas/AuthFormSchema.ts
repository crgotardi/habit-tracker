import { AuthFormType } from '@/types/auth'
import { z, ZodType } from 'zod'

const AuthFormSchema: ZodType<AuthFormType> = z.object({
    email: z.string().email(),
    password: z.string().min(8),
})

export default AuthFormSchema