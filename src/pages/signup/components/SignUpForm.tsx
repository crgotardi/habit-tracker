import { zodResolver } from '@hookform/resolvers/zod'
import { use } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router'
import Button from '@/components/Button/Button'
import { Input } from '@/components/ui'
import AuthContext from '@/contexts/AuthContext'
import SignUpFormSchema from '../schemas/SignUpFormSchema'

export type SignUpFormType = {
    name: string
    email: string
    password: string
}

const SignUpForm = () => {
    const navigate = useNavigate()
    const { signUp } = use(AuthContext)

    const { register, formState: { errors, isSubmitting }, handleSubmit } = useForm<SignUpFormType>({
        resolver: zodResolver(SignUpFormSchema),
        mode: 'onSubmit'
    })
    const onSubmit: SubmitHandler<SignUpFormType> = async (data: SignUpFormType) => {
        await signUp({
            name: data.name,
            email: data.email,
            id: 2
        })

        navigate('/signin')
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