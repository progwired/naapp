"use client"
import React from 'react'
import { Button } from '@nextui-org/button'
import { Card, CardBody, CardFooter, CardHeader, Input } from '@nextui-org/react'
import { GiPadlock } from 'react-icons/gi'
import { useForm } from 'react-hook-form';

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors, isValid } } = useForm()

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <Card className='w-2/5 mx-auto'>
            <CardHeader className='flex flex-col items-center justify-center'>
                <div className="flex gap-2 items-center flex-col text-secondary justify-center">
                    <div className="flex flex-row gap-3">
                        <GiPadlock size={30} />
                        <h1>
                            Login
                        </h1>
                    </div>
                    <p className='text-neutral-500'>Welcome back to Naapp!</p>
                </div>
            </CardHeader>
            <CardBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-4">
                        <Input
                            type="email"
                            label="Email"
                            variant='bordered'
                            radius='sm'
                            {...register("email", { required: "Email is required!" })}
                            isInvalid={!!errors.email}
                            errorMessage={errors.email?.message as string}
                        />
                        <Input
                            type='password'
                            label="Password"
                            variant='bordered'
                            radius='sm'
                            {...register("password", { required: "Password is required!" })}
                            isInvalid={!!errors.password}
                            errorMessage={errors.password?.message as string}
                        />
                        <Button isDisabled={!isValid} type="submit" color="secondary" radius='sm' className='w-full'>Login</Button>
                    </div>
                </form>
            </CardBody>
        </Card>
    )
}

export default LoginForm
