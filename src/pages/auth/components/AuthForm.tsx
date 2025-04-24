import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { memo } from 'react';
import { Button, Input } from "@/components/ui"
import authFormSchema from '@/schemas/AuthFormSchema';
import { AuthFormType } from '@/types/auth'

type AuthFormProps = {
    handleAuth: (authData: AuthFormType) => void
}

const AuthForm: React.FC<AuthFormProps> = ({ handleAuth }) => {
    const { formState, handleSubmit, register } = useForm<AuthFormType>({ resolver: zodResolver(authFormSchema) })

    const onSubmit: SubmitHandler<AuthFormType> = (formData) => {
        handleAuth(formData)
    }

    return (
        <div className='sm:w-1/5 md:w-[350px] p-8 bg-white rounded-lg shadow-md'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className='text-center mb-4'>Login</h3>
                <Input
                    className={formState.errors.email ? 'border-red-500' : ''}
                    type="email" 
                    placeholder="Email"
                    { ...register('email') }
                />
                {formState.errors.email && <span className="error-message">{formState.errors.email.message}</span>}
                <Input 
                    className={formState.errors.password ? 'mt2 border-red-500' : 'mt-2'}
                    type="password" 
                    placeholder="Password"
                    { ...register('password', { required: true }) }
                />
                {formState.errors.password && <span className="error-message">{formState.errors.password.message}</span>}
                <Button 
                    className="w-full mt-8"
                    type="submit"
                    variant="default"
                >
                    Login
                </Button>
            </form>
        </div>
    )
}

export default memo(AuthForm)