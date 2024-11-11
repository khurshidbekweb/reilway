import { useNavigate } from 'react-router-dom';
import Reilway from '../../public/logo.png'
import { useMutation } from '@tanstack/react-query';
import { authUtils } from '@/utils/auth';
import toast from 'react-hot-toast';

const Auth = () => {
    const navigate = useNavigate()

    const auth = useMutation({
        mutationFn: authUtils.auth,
        onSuccess: () => {
            toast.success('Success to login')
            setTimeout(() => {
                navigate('/dashboard')
            }, 1000)
        },
        onError: (err) => {
            console.log(err);
            toast.error('Error ')            
        }
    })

    const handleLogin = (e:  React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement; 
        try {
            auth.mutate({
                login: form.login.value,
                password: form.password.value,
            })
        } catch (err) {
            console.log(err);
        }

        console.log(auth.variables);
        
    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-28 h-32 mr-2" src={Reilway} alt="logo" />
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Login to admin panel
                        </h1>   
                        <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleLogin}>
                            <div>
                                <label htmlFor="login" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your login</label>
                                <input autoCapitalize='username' type="text" name="login" id="login" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Login" required/>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input autoComplete="current-password" type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 text-[18px]">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Auth;