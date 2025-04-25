import { z, ZodType } from 'zod'
import { SignUpFormType } from '../components/SignUpForm'

const SignUpFormSchema: ZodType<SignUpFormType> = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
})

export default SignUpFormSchema