import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import ImageDownload from "../assets/images/tentang/download-image-file.svg";
import { UserCircleIcon, IdentificationIcon } from "@heroicons/react/20/solid";

const info = [
    {
        linkPhoto: "tentang/photo/1",
        linkCard: "tentang/card/1",
    },
];

export default function Example() {
    return (
        <div className="fixed w-full max-w-sm bg-white">
            <Popover className="relative">
                {({ open }) => (
                    <>
                        <Popover.Button
                            className={`
                ${open ? "" : "text-opacity-90"}
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                            <img
                                className={`${
                                    open ? "" : "text-opacity-70 w-6"
                                } w-6`}
                                aria-hidden="true"
                                src={ImageDownload}
                                onContextMenu={(e) => e.preventDefault()}
                                draggable="false"
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
                            <Popover.Panel className="absolute left-1/2 z-10 mt-2 w-screen max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm -translate-x-1/2 transform">
                                <div className="overflow-hidden rounded-lg shadow-xl ring-1 ring-slate-900 ring-opacity-5">
                                    <div className="bg-slate-200 p-4">
                                        <span className="flex items-center justify-center">
                                            <p className="text-sm font-bold text-gray-900">
                                                Download Berkas
                                            </p>
                                        </span>
                                    </div>
                                    <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                                        {info.map((value) => (
                                            <>
                                                <a
                                                    href={value.linkPhoto}
                                                    className="bg-indigo-100 -m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-indigo-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                                >
                                                    <div className="flex h-6 w-6 shrink-0 items-center justify-center text-gray-500 sm:h-8 sm:w-8">
                                                        <UserCircleIcon />
                                                    </div>
                                                    <div className="ml-4">
                                                        <p className="text-sm font-medium text-slate-900">
                                                            File Photo
                                                        </p>
                                                    </div>
                                                </a>
                                                <a
                                                    href={value.linkCard}
                                                    className="bg-indigo-100 -m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-indigo-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                                >
                                                    <div className="flex h-6 w-6 shrink-0 items-center justify-center text-gray-500 sm:h-8 sm:w-8">
                                                        <IdentificationIcon />
                                                    </div>
                                                    <div className="ml-4">
                                                        <p className="text-sm font-medium text-slate-900">
                                                            Kartu Anggota
                                                        </p>
                                                    </div>
                                                </a>
                                            </>
                                        ))}
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </div>
    );
}
