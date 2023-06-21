import { Link } from "react-router-dom";
import LogoKKN from "../assets/images/header-footer-logo/logo-kknsongana.png";

export default function Register() {
    return (
        <div className="flex flex-col justify-center items-center h-screen px-6 py-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto w-24"
                    src={LogoKKN}
                    alt="Logo KKN Songan A Undiksha 2023"
                    onContextMenu={(e) => e.preventDefault()}
                    draggable="false"
                />
                <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Hai, mari buat akun anda!
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label
                            htmlFor="nama"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Nama Lengkap
                        </label>
                        <div className="mt-2">
                            <input
                                id="nama"
                                name="nama"
                                type="nama"
                                autoComplete="nama"
                                required
                                className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Email
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Password
                            </label>
                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Buat akun
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Sudah memiliki akun?{" "}
                    <Link
                        to="/login"
                        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                    >
                        Login
                    </Link>
                    {" | "}
                    <Link
                        to="/"
                        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                    >
                        Dashboard{" ->"}
                    </Link>
                </p>
            </div>
        </div>
    );
}
