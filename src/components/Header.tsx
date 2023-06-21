import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
    Bars3Icon,
    SquaresPlusIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import LogoKKN from "../assets/images/header-footer-logo/logo-kknsongana.png";
import { useLocation } from "react-router-dom";

const module = [
    {
        name: "Proker Wajib",
        description: "Tanggap Bencana/Pengurangan Resiko Bencana (PRB)",
        href: "#",
        icon: SquaresPlusIcon,
    },
    {
        name: "Proker Pilihan",
        description:
            "Sanitasi Lingkungan dan Kesehatan, Pengelolaan Sampah berbasis Sumber, Penguatan, Kelembagaan Desa/SDM, Pengembangan Pariwisata, Ekonomi dan Kewirausahaan, Konversi/Penguatan Sosial-Budaya",
        href: "#",
        icon: SquaresPlusIcon,
    },
    {
        name: "Proker Khusus",
        description: "Program Keluarga Asuh",
        href: "#",
        icon: SquaresPlusIcon,
    },
];

const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(" ");
};

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const handleMenuClick = () => {
        setMobileMenuOpen(false);
    };
    const location = useLocation();
    if (location.pathname === "/login" || location.pathname === "/register") {
        return null;
    }
    return (
        <header className="bg-white shadow-lg">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <Link to="/" className="flex flex-row items-center">
                        <img
                            className="h-12 w-12"
                            src={LogoKKN}
                            alt="Logo KKN Songan A Undiksha 2023"
                            onContextMenu={(e) => e.preventDefault()}
                            draggable="false"
                        />
                        <span className="ml-2 text-slate-700 font-bold">
                            Songan A Undiksha
                        </span>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Link
                        to="/"
                        className="text-sm font-semibold leading-6 text-slate-700"
                    >
                        Dashboard
                    </Link>

                    <Link
                        to="/desaku"
                        className="text-sm font-semibold leading-6 text-slate-700"
                    >
                        Desaku
                    </Link>

                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-slate-700">
                            Program
                            <ChevronDownIcon
                                className="h-5 w-5 flex-none text-slate-700"
                                aria-hidden="true"
                            />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {module.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                        >
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <item.icon
                                                    className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            <div className="flex-auto">
                                                <Link
                                                    to={item.href}
                                                    className="block font-semibold text-gray-900"
                                                >
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </Link>
                                                <p className="mt-1 text-gray-600">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    <Link
                        to="/blog"
                        className="text-sm font-semibold leading-6 text-slate-700"
                    >
                        Blog
                    </Link>
                    <Link
                        to="/tentang"
                        className="text-sm font-semibold leading-6 text-slate-700"
                    >
                        Tentang
                    </Link>
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <button className="text-indigo-600 border-indigo-300 border hover:bg-indigo-300 hover:text-white font-bold py-2 px-4 rounded-xl mr-2 transition duration-300 ease-in-out">
                        <Link
                            to="/register"
                            className="text-sm font-semibold leading-6"
                        >
                            Register
                        </Link>
                    </button>
                    <button className="bg-indigo-600 hover:opacity-50 text-white font-bold py-2 px-4 rounded-xl transition duration-300 ease-in-out">
                        <Link
                            to="/login"
                            className="text-sm font-semibold leading-6 text-white"
                        >
                            Login
                        </Link>
                    </button>
                </div>
            </nav>
            <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="flex flex-row items-center">
                            <img
                                className="h-12 w-12"
                                src={LogoKKN}
                                alt="Logo KKN Songan A Undiksha 2023"
                                onContextMenu={(e) => e.preventDefault()}
                                draggable="false"
                            />
                            <span className="ml-2 text-slate-700 font-bold">
                                Songan A Undiksha
                            </span>
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md pr-3 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-1 flow-root">
                        <div className="-my-3 divide-y">
                            <div className="space-y-2 py-6">
                                <Link
                                    to="/"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-700 hover:bg-slate-500 hover:text-white"
                                    onClick={handleMenuClick}
                                >
                                    Dashboard
                                </Link>
                                <Link
                                    to="/desaku"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-700 hover:bg-slate-500 hover:text-white"
                                    onClick={handleMenuClick}
                                >
                                    Desaku
                                </Link>
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-slate-700 hover:bg-slate-500 hover:text-white">
                                                Program
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open
                                                            ? "rotate-180"
                                                            : "",
                                                        "h-5 w-5 flex-none"
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {[...module].map((item) => (
                                                    <Disclosure.Button
                                                        onClick={
                                                            handleMenuClick
                                                        }
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-slate-700 hover:bg-slate-500 hover:text-white"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>

                                <Link
                                    to="/blog"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-700 hover:bg-slate-500 hover:text-white"
                                    onClick={handleMenuClick}
                                >
                                    Blog
                                </Link>
                                <Link
                                    to="/tentang"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-700 hover:bg-slate-500 hover:text-white"
                                    onClick={handleMenuClick}
                                >
                                    Tentang
                                </Link>
                            </div>
                            <div className="py-6 text-right">
                                <button
                                    onClick={handleMenuClick}
                                    className="text-indigo-600 border-indigo-300 border hover:bg-indigo-300 hover:text-white font-bold py-2 px-3 rounded-xl mr-2 transition duration-300 ease-in-out"
                                >
                                    <Link
                                        to="/register"
                                        className="block rounded-lg text-sm leading-7"
                                    >
                                        Register
                                    </Link>
                                </button>
                                <button
                                    onClick={handleMenuClick}
                                    className="bg-indigo-600 hover:opacity-50 text-white font-bold py-2 px-3 rounded-xl transition duration-300 ease-in-out"
                                >
                                    <Link
                                        to="/login"
                                        className="block rounded-lg text-sm leading-7"
                                    >
                                        Login
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
};

export default Header;
