/* import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { useAuthStore } from '@/store/useAuthStore';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const login = useAuthStore(state => state.login);
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      await login(email, password);
      const from = location.state?.from || '/';
      navigate(from, { replace: true });
    } catch (error) {
      setError('로그인에 실패했습니다.');
    }
  };

  return (
    <div className='flex min-h-svh w-full items-center justify-center p-6 md:p-10'>
      <div className='w-full max-w-sm'>
        <form onSubmit={handleSubmit}>
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block text-sm font-medium'>
                이메일
              </label>
              <input
                type='email'
                name='email'
                id='email'
                className='mt-1 w-full rounded-md border p-2'
                required
              />
            </div>
            <div>
              <label htmlFor='password' className='block text-sm font-medium'>
                비밀번호
              </label>
              <input
                type='password'
                name='password'
                id='password'
                className='mt-1 w-full rounded-md border p-2'
                required
              />
            </div>
            {error && <div className='text-red-500 text-sm'>{error}</div>}
            <button
              type='submit'
              className='w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600'
            >
              로그인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
 */


import  LoginForm  from "@/components/LoginForm"

export default function Page() {
  return (
    <div className="min-h-[calc(100vh-80px)]  w-full grid place-items-center p-6 md:p-10">
      <div className="min-w-[320px]">
        <LoginForm />
      </div>
    </div>
  )
}

