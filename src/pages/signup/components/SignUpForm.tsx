import { Button, Input } from '@/components/ui'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
    name: string
    email: string
    password: string
}

const SignUpForm = () => {
    const { register, formState, handleSubmit } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => { console.log(data) }

    return (
        <div className='w-1/5 p-8 bg-white rounded-lg shadow-md'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className='text-center mb-4'>Sign Up</h3>
                <Input 
                    type="text"
                    placeholder="Name"
                    { ...register('name') }
                />
                <Input
                    className="mt-2"
                    type="email"
                    placeholder="Email"
                    { ...register('email') }
                />
                <Input
                    className="mt-2"
                    type="password"
                    placeholder="Password"
                    { ...register('password', { required: true }) }
                />
                {formState.errors.password && <span>This field is required</span>}
                <Button
                    className="btn primary w-full mt-8"
                    type="submit"    
                >
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default SignUpForm