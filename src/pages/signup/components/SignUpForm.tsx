import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router'
import { useForm, SubmitHandler } from 'react-hook-form'
import SignUpFormSchema from '../schemas/SignUpFormSchema'
import Button from '@/components/Button/Button'
import { Input } from '@/components/ui'
import { useAuth } from '@/contexts/AuthContext'
import { SignUpType } from '@/types/user'

const SignUpForm = () => {
    const { signUp } = useAuth()
    const navigate = useNavigate()

    const { register, formState: { errors, isSubmitting }, handleSubmit } = useForm<SignUpType>({
        resolver: zodResolver(SignUpFormSchema),
        mode: 'onSubmit'
    })

    const onSubmit: SubmitHandler<SignUpType> = async (data: SignUpType) => {
        try {
            await signUp(data)
            navigate('/signin')
        } catch (error: unknown) {
            console.error('An error occurred while signing up:', error)
        }
    }

    return (
        <div className='w-1/5 p-8 bg-white rounded-lg shadow-md'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className='text-center mb-4'>Sign Up</h3>
                <Input 
                    type="text"
                    placeholder="Name"
                    { ...register('name') }
                />
                {errors.name && <span className="error-message">{ errors.name.message}</span>}
                <Input
                    className="mt-2"
                    type="email"
                    placeholder="Email"
                    { ...register('email') }
                />
                {errors.email && <span className="error-message">{ errors.email.message}</span>}
                <Input
                    className="mt-2"
                    type="password"
                    placeholder="Password"
                    { ...register('password', { required: true }) }
                />
                {errors.password && <span className="error-message">{ errors.password.message}</span>}
                <Button
                    className="btn primary w-full mt-8"
                    type="submit"
                    isLoading={isSubmitting}
                >
                    {isSubmitting ? 'Signing up...' : 'Sign Up'}
                </Button>
            </form>
        </div>
    )
}

export default SignUpForm