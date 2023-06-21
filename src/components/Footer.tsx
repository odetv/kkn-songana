import LogoKKN from "../assets/images/header-footer-logo/logo-kknsongana.png";
import LogoInstagram from "../assets/images/header-footer-logo/instagram.svg";
import { useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    if (location.pathname === "/login" || location.pathname === "/register") {
        return null;
    }
    return (
        <div className="bg-slate-100 pt-4 pb-12 text-slate-700">
            <div className="max-w-screen-xl items-center w-full mx-auto px-6 sm:px-8 lg:px-16 lg:grid xl:grid sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4 mb-4">
                <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
                    <img
                        className="w-24"
                        src={LogoKKN}
                        alt="Logo KKN Songan A Undiksha 2023"
                        onContextMenu={(e) => e.preventDefault()}
                        draggable="false"
                    />
                    <p className="mb-2">
                        <strong className="font-bold text-lg">
                            KKNT Desa Songan A Bangli
                        </strong>
                        <dd className="text-sm leading-6">
                            Website informasi resmi untuk program Kuliah Kerja
                            Nyata Universitas Pendidikan Ganesha di Desa Songan
                            A Kec. Kintamani, Kab. Bangli
                        </dd>
                    </p>
                    <div className="flex items-center w-full mt-2 mb-4 -mx-2">
                        <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                            <a
                                href="https://instagram.com/kknt.desasongana2023"
                                target="blank"
                            >
                                <img
                                    className="h-6 w-6"
                                    src={LogoInstagram}
                                    alt="Instagram Logo"
                                    onContextMenu={(e) => e.preventDefault()}
                                    draggable="false"
                                />
                            </a>
                        </div>
                        <a
                            href="https://instagram.com/kknt.desasongana2023"
                            target="blank"
                        >
                            <p className="font-bold text-sm">Instagram</p>
                        </a>
                    </div>
                </div>
                <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
                    <p className="mt-4 lg:mt-0 xl:mt-0 lg:mb-4 xl:mb-4 font-bold text-base">
                        Profil Desa
                    </p>
                    <ul className="">
                        <li className="text-sm my-1 hover:text-orange-500 cursor-pointer transition-all">
                            Sejarah Desa
                        </li>
                        <li className="text-sm my-1 hover:text-orange-500 cursor-pointer transition-all">
                            Profil Wilayah Desa
                        </li>
                        <li className="text-sm my-1 hover:text-orange-500 cursor-pointer transition-all">
                            Profil Potensi Desa
                        </li>
                    </ul>
                </div>
                <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
                    <p className="mt-4 lg:mt-0 xl:mt-0 lg:mb-4 xl:mb-4 font-bold text-base">
                        Program KKN
                    </p>
                    <ul className="text-black-500">
                        <li className="text-sm my-1 hover:text-orange-500 cursor-pointer transition-all">
                            Proker Wajib
                        </li>
                        <li className="text-sm my-1 hover:text-orange-500 cursor-pointer transition-all">
                            Proker Pilihan
                        </li>
                        <li className="text-sm my-1 hover:text-orange-500 cursor-pointer transition-all">
                            Proker Khusus
                        </li>
                    </ul>
                </div>
                <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
                    <p className="mt-4 lg:mt-0 xl:mt-0 lg:mb-4 xl:mb-4 font-bold text-base">
                        Blog & Galery
                    </p>
                    <ul className="text-black-500">
                        <li className="text-sm my-1 hover:text-orange-500 cursor-pointer transition-all">
                            Berita
                        </li>
                        <li className="text-sm my-1 hover:text-orange-500 cursor-pointer transition-all">
                            Galery Dokumentasi Kegiatan
                        </li>
                    </ul>
                </div>
            </div>
            <a href="https://momentkitabali.my.id/" target="blank">
                <p className="pt-12 lg:pt-6 text-center text-xs text-gray-400">
                    ©{new Date().getFullYear()} - MOMENTKITA BALI
                </p>
            </a>
            <a href="#">
                <p className="text-center text-xs text-gray-400">
                    Mahasiswa KKNT Desa Songan A Kintamani-Bangli
                </p>
                <p className="text-center text-xs text-gray-400">
                    Universitas Pendidikan Ganesha
                </p>
            </a>
        </div>
    );
};

export default Footer;
