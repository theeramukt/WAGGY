import Link from 'next/link';
import { useRouter } from 'next/router';


export default function Signin() {
    const router = useRouter();
    async function onLogin(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const response = await fetch("http://127.0.0.1:3342/api/token/", {
            method: "POST",
            body: formData,
        });
        try {
            const data = await response.json();
            console.log(data.access);
            localStorage.setItem('jwt_access', data.access);
            alert("Login success!")
            if (formData.get("username") == "cn334@gmail.com") {
                router.push("/dashboard");
            }else{
                router.push("/");
            }
        } catch (error) {
            alert("Your username/password are incorrect!");
        }
    }

    return (
        <section className="bg-sig">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a
                    href="#"
                    className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
                >
                    <img
                        className="w-48 h-48 mr-2 mt-2"
                        src="cat_banner.png"
                        alt="logo"
                        
                    />
                
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold text-gray-900 md:text-2xl mx-auto">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#" onSubmit={onLogin}>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="username"
                                    id="username"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="waggy@company.com"
                                    required=""
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                />
                            </div>
                            <div>
                            <button
                                type="submit"
                                className="bg-home rounded_home hover:bg-row  transition-colors w-full">
                                Sign in
                            </button>
                            </div>
                  
                  
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet?{" "}
                                <Link href="/signup">
                                <a
                                    href="#"
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Sign up
                                </a>
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}