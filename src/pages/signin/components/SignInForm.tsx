import { memo, use } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router';
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui"
import Button from '@/components/Button/Button';
import AuthContext from '@/contexts/AuthContext';
import SignInFormSchema from '@/schemas/SignInFormSchema';
import { SignInFormType } from '@/types/auth'

const SignInForm: React.FC = () => {
    const { formState: { errors, isSubmitting }, handleSubmit, register } = useForm<SignInFormType>({
        resolver: zodResolver(SignInFormSchema),
        mode: 'onSubmit'
    })
    
    const { signIn } = use(AuthContext)
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<SignInFormType> = async (formData) => {
        await signIn({ email: formData.email, name: 'John Doe', id: 1 })
        navigate('/dashboard')
    }

    return (
        <div className='sm:w-1/5 md:w-[350px] p-8 bg-white rounded-lg shadow-md'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className='text-center mb-4'>Sign In</h3>
                <Input
                    className={errors.email ? 'border-red-500' : ''}
                    type="email" 
                    placeholder="Email"
                    { ...register('email') }
                />
                {errors.email && <span className="error-message">{errors.email.message}</span>}
                <Input 
                    className={errors.password ? 'mt2 border-red-500' : 'mt-2'}
                    type="password" 
                    placeholder="Password"
                    { ...register('password', { required: true }) }
                />
                {errors.password && <span className="error-message">{errors.password.message}</span>}
                <Button 
                    className="w-full mt-8"
                    type="submit"
                    variant="default"
                    isLoading={isSubmitting}
                >
                    {isSubmitting ? 'Signing in...' : 'Sign In'}
                </Button>
            </form>
        </div>
    )
}

export default memo(SignInForm)