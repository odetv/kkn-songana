import { Link } from "react-router-dom";
import LogoKKN from "../assets/images/header-footer-logo/logo-kknsongana.png";
import { useRef, useContext, useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { base_api_url } from "../App";

export default function Login() {
    const inputEmail = useRef<HTMLInputElement | null>(null);
    const inputPassword = useRef<HTMLInputElement | null>(null);

    const cookie = new Cookies();
    const navigate = useNavigate();

    const { authenticatedUser, setAuthenticatedUser } = useContext(UserContext);

    useEffect(() => {
        if (authenticatedUser) {
            navigate("/");
        }
    }, [authenticatedUser, navigate]);

    const handleLogin = async () => {
        const email = inputEmail.current?.value || "";
        const password = inputPassword.current?.value || "";

        await axios.get(base_api_url + "/sanctum/csrf-cookie");

        const loginPromise = axios
            .post(
                base_api_url + "/api/login",
                {
                    email: email,
                    password: password,
                },
                {
                    withCredentials: true,
                }
            )
            .then(async (response) => {
                cookie.set("Authorization", response.data.token);
                return await axios
                    .get(base_api_url + "/api/user", {
                        headers: {
                            Authorization: `Bearer ${response.data.token}`,
                        },
                    })
                    .then((response) => {
                        setAuthenticatedUser(response.data.user);
                        setTimeout(() => {
                            navigate("/");
                        }, 0);
                        return response;
                    });
            });

        toast.promise(loginPromise, {
            pending: {
                render() {
                    return "Data sedang di cek!";
                },
                icon: "⌛",
            },

            success: {
                render({ data }) {
                    if (data && data.data && data.data.user) {
                        return `Hai, ${data.data.user.firstname}`;
                    } else {
                        return "Data tidak valid";
                    }
                },
                icon: "👋",
            },
            error: "Data yang dimasukkan salah!",
        });
    };
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
                    Hai, selamat datang kembali!
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Email
                        </label>
                        <div className="mt-2">
                            <input
                                ref={inputEmail}
                                placeholder="Email Address"
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
                            <div className="text-sm">
                                <Link
                                    to="/forgot"
                                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                                >
                                    Lupa password?
                                </Link>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                ref={inputPassword}
                                placeholder="Password"
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
                            type="button"
                            onClick={handleLogin}
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Masuk
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Belum memiliki akun?{" "}
                    <Link
                        to="/register"
                        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                    >
                        Register
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
