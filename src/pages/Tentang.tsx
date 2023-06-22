import ImageDownload from "../assets/images/tentang/download-image-file.svg";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { UserCircleIcon, IdentificationIcon } from "@heroicons/react/20/solid";

const people = [
    {
        name: "Andra Fahreza",
        role: "Koordinator Desa",
        imageUrl:
            "http://static1.undiksha.ac.id/siakng/2023/fotomahasiswa/1606164886-1673048476.png",
        linkPhoto:
            "http://static1.undiksha.ac.id/siakng/2023/fotomahasiswa/1606164886-1673048476.png",
        linkCard: "/assets/images/tentang/id-card/AndraFahreza.png",
    },
    {
        name: "Komang Ayu Laras Swati",
        role: "Wakil Koordinator Desa",
        imageUrl:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/7977361281685075648.SAVE_20220601_191508.jpg",
        linkPhoto:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/7977361281685075648.SAVE_20220601_191508.jpg",
        linkCard: "/assets/images/tentang/id-card/KomangAyuLarasSwati.png",
    },
    {
        name: "Ni Putu Ashya Siva Marshanda",
        role: "Sekretaris 1",
        imageUrl:
            "http://static1.undiksha.ac.id/siakng/2023/fotomahasiswa/494792644-1676541672.png",
        linkPhoto:
            "http://static1.undiksha.ac.id/siakng/2023/fotomahasiswa/494792644-1676541672.png",
        linkCard: "/assets/images/tentang/id-card/NiPutuAshyaSivaMarshanda.png",
    },
    {
        name: "Kadek Yesi Citrayani",
        role: "Sekretaris 2",
        imageUrl:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/17024534901686742346._MG_0822%20(Master).jpg",
        linkPhoto:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/17024534901686742346._MG_0822%20(Master).jpg",
        linkCard: "/assets/images/tentang/id-card/KadekYesiCitrayani.png",
    },
    {
        name: "Putu Ayodhia Darsinita",
        role: "Bendahara 1",
        imageUrl:
            "http://static1.undiksha.ac.id/daftarkembali/2022/photoUploads/0801c61d8fb7d10db0e1418870878e9c20210617030646.jpg",
        linkPhoto:
            "http://static1.undiksha.ac.id/daftarkembali/2022/photoUploads/0801c61d8fb7d10db0e1418870878e9c20210617030646.jpg",
        linkCard: "/assets/images/tentang/id-card/PutuAyodhiaDarsinita.png",
    },
    {
        name: "Made Putrayasa",
        role: "Bendahara 2",
        imageUrl:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/21305203471685343532.Md%20Putrayasa%20xngt%20(1).JPG",
        linkPhoto:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/21305203471685343532.Md%20Putrayasa%20xngt%20(1).JPG",
        linkCard: "/assets/images/tentang/id-card/MadePutrayasa.png",
    },
    {
        name: "Ida Ayu Putu Krisnayani Putri",
        role: "Sie Acara & Humas",
        imageUrl:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/1627714691685350600.IMG_20201227_153855-removebg-preview.png",
        linkPhoto:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/1627714691685350600.IMG_20201227_153855-removebg-preview.png",
        linkCard:
            "/assets/images/tentang/id-card/IdaAyuPutuKrisnayaniPutri.png",
    },
    {
        name: "Ni Kadek Tia Pratiwi",
        role: "Sie Acara & Humas",
        imageUrl:
            "http://static1.undiksha.ac.id/siakng/2022/fotomahasiswa/1485454036-1643432426.jpeg",
        linkPhoto:
            "http://static1.undiksha.ac.id/siakng/2022/fotomahasiswa/1485454036-1643432426.jpeg",
        linkCard: "/assets/images/tentang/id-card/NiKadekTiaPratiwi.png",
    },
    {
        name: "St. Nur Septiani Chandra",
        role: "Sie Acara & Humas",
        imageUrl:
            "http://static1.undiksha.ac.id/siakng/2021/fotomahasiswa/1399186221-1630394685.png",
        linkPhoto:
            "http://static1.undiksha.ac.id/siakng/2021/fotomahasiswa/1399186221-1630394685.png",
        linkCard: "/assets/images/tentang/id-card/StNurSeptianiChandra.png",
    },
    {
        name: "Dewa Gede Andika Andara Putra",
        role: "Sie Perlengkapan",
        imageUrl:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/21200058061685349105.DSC_8239-removebg-preview.png",
        linkPhoto:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/21200058061685349105.DSC_8239-removebg-preview.png",
        linkCard:
            "/assets/images/tentang/id-card/DewaGedeAndikaAndaraPutra.png",
    },
    {
        name: "Kadek Rio Teguh Adnyana",
        role: "Sie Perlengkapan",
        imageUrl:
            "http://static1.undiksha.ac.id/daftarkembali/2022/photoUploads/b9b081d42c77de27f03d017d19ac142b20210504060541.jpg",
        linkPhoto:
            "http://static1.undiksha.ac.id/daftarkembali/2022/photoUploads/b9b081d42c77de27f03d017d19ac142b20210504060541.jpg",
        linkCard: "/assets/images/tentang/id-card/KadekRioTeguhAdnyana.png",
    },
    {
        name: "Putu Surya Ardi Bhuana",
        role: "Sie Perlengkapan",
        imageUrl:
            "http://static1.undiksha.ac.id/siakng/2021/fotomahasiswa/158406574-1630624756.jpeg",
        linkPhoto:
            "http://static1.undiksha.ac.id/siakng/2021/fotomahasiswa/158406574-1630624756.jpeg",
        linkCard: "/assets/images/tentang/id-card/PutuSuryaArdiBhuana.png",
    },
    {
        name: "I Gede Gelgel Abdiutama",
        role: "Sie Perlengkapan",
        imageUrl:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/14298581461685158842.FOTO%20JAS%20UNDIKSHA.png",
        linkPhoto:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/14298581461685158842.FOTO%20JAS%20UNDIKSHA.png",
        linkCard: "/assets/images/tentang/id-card/IGedeGelgelAbdiutama.png",
    },
    {
        name: "Made Adith Mahendra",
        role: "Sie Perlengkapan",
        imageUrl:
            "http://static1.undiksha.ac.id/siakng/2023/fotomahasiswa/1227541198-1677907503.png",
        linkPhoto:
            "http://static1.undiksha.ac.id/siakng/2023/fotomahasiswa/1227541198-1677907503.png",
        linkCard: "/assets/images/tentang/id-card/MadeAdithMahendra.png",
    },
    {
        name: "Kadek Ariana",
        role: "Sie Pubdekdok",
        imageUrl:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/21300049351685321862.foto%20kkn%20undiksha%202023.png",
        linkPhoto:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/21300049351685321862.foto%20kkn%20undiksha%202023.png",
        linkCard: "/assets/images/tentang/id-card/KadekAriana.png",
    },
    {
        name: "I Komang Ngurah Yasana",
        role: "Sie Pubdekdok",
        imageUrl:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/15442142121687058418.IMG_20230526_230938-removebg-preview.png",
        linkPhoto:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/15442142121687058418.IMG_20230526_230938-removebg-preview.png",
        linkCard: "/assets/images/tentang/id-card/IKomangNgurahYasana.png",
    },
    {
        name: "Dewa Putu Dharma Sudana",
        role: "Sie Pubdekdok",
        imageUrl:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/16991335661685254487.IMG_3160.png",
        linkPhoto:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/16991335661685254487.IMG_3160.png",
        linkCard: "/assets/images/tentang/id-card/DewaPutuDharmaSudana.png",
    },
    {
        name: "Zivi S Sitanggang",
        role: "Sie Konsumsi",
        imageUrl:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/9049465431685344337.IMG_7491%20copy.jpg",
        linkPhoto:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/9049465431685344337.IMG_7491%20copy.jpg",
        linkCard: "/assets/images/tentang/id-card/ZiviSSitanggang.png",
    },
    {
        name: "Indra Dwisaputra",
        role: "Sie Konsumsi",
        imageUrl:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/3406693481685151635.Foto_Profil_2-removebg-preview.png",
        linkPhoto:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/3406693481685151635.Foto_Profil_2-removebg-preview.png",
        linkCard: "/assets/images/tentang/id-card/IndraDwisaputra.png",
    },
    {
        name: "Varelly Arletta Tyora Putri Herlambang",
        role: "Sie Konsumsi",
        imageUrl:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/19463217111686819503.Ber_jas_latar_merah.png",
        linkPhoto:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/19463217111686819503.Ber_jas_latar_merah.png",
        linkCard:
            "/assets/images/tentang/id-card/VarellyArlettaTyoraPutriHerlambang.png",
    },
    {
        name: "Ketut Gita Ariani",
        role: "Sie Konsumsi",
        imageUrl:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/20652141041685273200.WhatsApp%20Image%202023-05-28%20at%2019.20.19.jpeg",
        linkPhoto:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/20652141041685273200.WhatsApp%20Image%202023-05-28%20at%2019.20.19.jpeg",
        linkCard: "/assets/images/tentang/id-card/KetutGitaAriani.png",
    },
    {
        name: "Luluk Mukarromah",
        role: "Sie Konsumsi",
        imageUrl:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/2547369561684966226.0FFF47AA-1A7E-4CB0-A505-E5D86176282C.jpeg",
        linkPhoto:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/2547369561684966226.0FFF47AA-1A7E-4CB0-A505-E5D86176282C.jpeg",
        linkCard: "/assets/images/tentang/id-card/LulukMukarromah.png",
    },
    {
        name: "Ida Polanda Nenepat",
        role: "Sie Kerohanian",
        imageUrl:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/17814276801683025478.Picsart_23-05-02_19-03-13-454.png",
        linkPhoto:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/17814276801683025478.Picsart_23-05-02_19-03-13-454.png",
        linkCard: "/assets/images/tentang/id-card/IdaPolandaNenepat.png",
    },
    {
        name: "Ni Kadek Marini Arianti",
        role: "Sie Kerohanian",
        imageUrl:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/856534681685273179.IMG_8991%20(1).jpg",
        linkPhoto:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/856534681685273179.IMG_8991%20(1).jpg",
        linkCard: "/assets/images/tentang/id-card/NiKadekMariniArianti.png",
    },
    {
        name: "I Gede Teguh Brahmastra Wiradharma",
        role: "Sie Kerohanian",
        imageUrl:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/3913884821685331243.1.jpg",
        linkPhoto:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/3913884821685331243.1.jpg",
        linkCard:
            "/assets/images/tentang/id-card/IGedeTeguhBrahmastraWiradharma.png",
    },
];

export default function Tentang() {
    return (
        <div className="bg-white">
            <div className="mt-10 pb-16 px-6 mx-auto">
                <div className="mx-auto max-w-screen-xl mb-14">
                    <h1 className="mb-2 text-center text-xl lg:text-2xl font-bold text-slate-900">
                        Tentang Kami
                    </h1>
                    <h1 className="text-center lg:text-lg font-bold text-slate-600">
                        Kenali lebih dekat dan kami siap membantu
                    </h1>
                </div>
                <div className="flex flex-row max-w-screen-md mx-auto mb-14">
                    <div className="flex flex-col justify-center items-center max-w-screen-md mx-auto">
                        <h1 className="text-center lg:text-lg font-bold text-slate-900 mb-2 underline underline-offset-8 decoration-dotted">
                            Kepala Desa
                        </h1>
                        <img
                            className="h-16 w-16 rounded-full object-cover mb-2"
                            src="https://songana.desa.id/assets/images/pengguna/kuser.png"
                            onContextMenu={(e) => e.preventDefault()}
                            draggable="false"
                        />
                        <h1 className="text-center text-xs lg:text-base md:text-base xl:text-base font-bold text-slate-600">
                            I Ketut Artawan, SE., M.Pd.H
                        </h1>
                    </div>
                    <div className="flex flex-col justify-center items-center max-w-screen-md mx-auto">
                        <h1 className="text-center lg:text-lg font-bold text-slate-900 mb-2 underline underline-offset-8 decoration-dotted">
                            Dosen Pembimbing
                        </h1>
                        <img
                            className="h-16 w-16 rounded-full object-cover mb-2"
                            src="http://dosen.undiksha.ac.id/admin/media/ujm/dosen/0012088606/0012088606_photo_i_made_edy_listartha.jpg"
                            onContextMenu={(e) => e.preventDefault()}
                            draggable="false"
                        />
                        <h1 className="text-center text-xs lg:text-base md:text-base xl:text-base font-bold text-slate-600">
                            I Made Edy Listartha, S.Kom., M.Kom.
                        </h1>
                    </div>
                </div>
                <div className="mx-auto max-w-screen-xl mb-6 sm:mb-10 md:mb-10 lg:mb-10 xl:mb-10">
                    <h1 className="text-center lg:text-lg font-bold text-slate-900 underline underline-offset-8 decoration-dotted">
                        Anggota
                    </h1>
                </div>
                <ul
                    className="mx-auto max-w-screen-xl grid gap-4 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2"
                    role="list"
                >
                    {people.map((value) => (
                        <li key={value.name}>
                            <div className="flex items-center gap-x-6 lg:flex-col xl:flex-col md:flex-col lg:text-center md:text-center xl:text-center md:mb-4 xl:mb-4 lg:mb-4">
                                <img
                                    className="h-16 w-16 rounded-full object-cover"
                                    src={value.imageUrl}
                                    onContextMenu={(e) => e.preventDefault()}
                                    draggable="false"
                                />
                                <div>
                                    <h3 className="pt-0 lg:pt-2 md:pt-2 xl:pt-2 text-xs lg:text-base md:text-base xl:text-base font-semibold leading-7 tracking-tight text-slate-600">
                                        {value.name}
                                    </h3>
                                    <p className="text-xs lg:text-sm md:text-sm xl:text-sm font-semibold leading-6 text-indigo-600">
                                        {value.role}
                                    </p>
                                    <div className="flex lg:justify-center md:justify-center xl:justify-center">
                                        <div className="w-full max-w-sm bg-white">
                                            <Popover className="sm:relative md:relative lg:relative xl:relative">
                                                {({ open }) => (
                                                    <>
                                                        <Popover.Button
                                                            className={`
                ${open ? "" : "text-opacity-90"}
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                                                        >
                                                            <img
                                                                className={`${
                                                                    open
                                                                        ? ""
                                                                        : "text-opacity-70 w-6"
                                                                } w-6`}
                                                                aria-hidden="true"
                                                                src={
                                                                    ImageDownload
                                                                }
                                                                onContextMenu={(
                                                                    e
                                                                ) =>
                                                                    e.preventDefault()
                                                                }
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
                                                            <Popover.Panel className="absolute left-1/2 z-10 mt-2 w-52 sm:w-72 md:w-72 lg:w-72 xl:w-72 max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm -translate-x-1/2 transform">
                                                                <div className="overflow-hidden rounded-lg shadow-xl ring-1 ring-slate-900 ring-opacity-5">
                                                                    <div className="bg-slate-200 p-4">
                                                                        <span className="flex items-center justify-center">
                                                                            <p className="text-sm font-bold text-gray-900">
                                                                                Download
                                                                                Berkas
                                                                            </p>
                                                                        </span>
                                                                    </div>
                                                                    <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                                                                        <a
                                                                            href={
                                                                                value.linkPhoto
                                                                            }
                                                                            className="bg-indigo-100 -m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-indigo-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                                                        >
                                                                            <div className="flex h-6 w-6 shrink-0 items-center justify-center text-gray-500 sm:h-8 sm:w-8">
                                                                                <UserCircleIcon />
                                                                            </div>
                                                                            <div className="ml-4 sm:ml-2 md:ml-2 lg:ml-2 xl:ml-2">
                                                                                <p className="text-sm font-medium text-slate-900">
                                                                                    File
                                                                                    Photo
                                                                                </p>
                                                                            </div>
                                                                        </a>
                                                                        <a
                                                                            href={
                                                                                value.linkCard
                                                                            }
                                                                            className="bg-indigo-100 -m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-indigo-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                                                                        >
                                                                            <div className="flex h-6 w-6 shrink-0 items-center justify-center text-gray-500 sm:h-8 sm:w-8">
                                                                                <IdentificationIcon />
                                                                            </div>
                                                                            <div className="ml-4 sm:ml-2 md:ml-2 lg:ml-2 xl:ml-2">
                                                                                <p className="text-left text-sm font-medium text-slate-900">
                                                                                    Kartu
                                                                                    Anggota
                                                                                </p>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </Popover.Panel>
                                                        </Transition>
                                                    </>
                                                )}
                                            </Popover>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
