import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { useContext } from 'react'
import Button from 'src/components/Button'
import Input from 'src/components/Input'
import { Schema, schema } from 'src/utils/rules'
import authApi from 'src/apis/auth.api'
import { AppContext } from 'src/contexts/app.context'
import { Link, useNavigate } from 'react-router-dom'
import { isAxiosUnprocessableEntityError } from 'src/utils/utils'
import { ErrorResponse } from 'src/types/utils.type'
import { toast } from 'react-toastify'

const loginSchema = schema.pick(['email', 'password'])
type FormData = Pick<Schema, 'email' | 'password'>

function Login() {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema)
  })

  const { setIsAuthenticated, setProfile } = useContext(AppContext)

  const loginMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => authApi.login(body)
  })

  const navigate = useNavigate()

  const onSubmit = handleSubmit((data) => {
    loginMutation.mutate(data, {
      onSuccess: (data) => {
        // setIsAuthenticated(true)
        // setProfile(data.data.data.user)
        // navigate('/')
        console.log(data)
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ErrorResponse<FormData>>(error)) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof FormData, {
                message: formError[key as keyof FormData],
                type: 'Server'
              })
            })
          }
        }
      }
    })
  })
  return (
    <div>
      Login
      <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate>
        <div className='text-2xl'>Đăng nhập</div>
        <Input
          name='email'
          register={register}
          type='email'
          className='mt-8'
          errorMessage={errors.email?.message}
          placeholder='Email'
        />
        <Input
          name='password'
          register={register}
          type='password'
          className='mt-2'
          errorMessage={errors.password?.message}
          placeholder='Password'
          autoComplete='on'
        />
        <div className='mt-3'>
          <Button
            type='submit'
            className='flex  w-full items-center justify-center bg-red-500 py-4 px-2 text-sm uppercase text-white hover:bg-red-600'
            isLoading={loginMutation.isLoading}
            disabled={loginMutation.isLoading}
          >
            Đăng nhập
          </Button>
        </div>
        <div className='mt-8 flex items-center justify-center'>
          <span className='text-gray-400'>Bạn chưa có tài khoản?</span>
          <Link className='ml-1 text-red-400' to='/register'>
            Đăng ký
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Login
