import { SignInFormType } from '@/types/auth'
import { z, ZodType } from 'zod'

const SignInFormSchema: ZodType<SignInFormType> = z.object({
    email: z.string().email(),
    password: z.string().min(8),
})

export default SignInFormSchema