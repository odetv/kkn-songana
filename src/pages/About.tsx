import ImageDownload from "../assets/images/tentang/download-image-file.svg";

const people = [
    {
        name: "Andra Fahreza",
        role: "Koordinator Desa",
        imageUrl:
            "http://static1.undiksha.ac.id/siakng/2023/fotomahasiswa/1606164886-1673048476.png",
        link: "-",
    },
    {
        name: "Komang Ayu Laras Swati",
        role: "Wakil Koordinator Desa",
        imageUrl:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/7977361281685075648.SAVE_20220601_191508.jpg",
        link: "-",
    },
    {
        name: "Ni Putu Ashya Siva Marshanda",
        role: "Sekretaris 1",
        imageUrl:
            "http://static1.undiksha.ac.id/siakng/2023/fotomahasiswa/494792644-1676541672.png",
        link: "-",
    },
    {
        name: "Kadek Yesi Citrayani",
        role: "Sekretaris 2",
        imageUrl:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/17024534901686742346._MG_0822%20(Master).jpg",
        link: "-",
    },
    {
        name: "Putu Ayodhia Darsinita",
        role: "Bendahara 1",
        imageUrl:
            "http://static1.undiksha.ac.id/daftarkembali/2022/photoUploads/0801c61d8fb7d10db0e1418870878e9c20210617030646.jpg",
        link: "-",
    },
    {
        name: "Made Putrayasa",
        role: "Bendahara 2",
        imageUrl:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/21305203471685343532.Md%20Putrayasa%20xngt%20(1).JPG",
        link: "-",
    },
    {
        name: "Ida Ayu Putu Krisnayani Putri",
        role: "Sie Acara & Humas",
        imageUrl:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/1627714691685350600.IMG_20201227_153855-removebg-preview.png",
        link: "-",
    },
    {
        name: "Ni Kadek Tia Pratiwi",
        role: "Sie Acara & Humas",
        imageUrl:
            "http://static1.undiksha.ac.id/siakng/2022/fotomahasiswa/1485454036-1643432426.jpeg",
        link: "-",
    },
    {
        name: "St. Nur Septiani Chandra",
        role: "Sie Acara & Humas",
        imageUrl:
            "http://static1.undiksha.ac.id/siakng/2021/fotomahasiswa/1399186221-1630394685.png",
        link: "-",
    },
    {
        name: "Dewa Gede Andika Andara Putra",
        role: "Sie Perlengkapan",
        imageUrl:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/21200058061685349105.DSC_8239-removebg-preview.png",
        link: "-",
    },
    {
        name: "Kadek Rio Teguh Adnyana",
        role: "Sie Perlengkapan",
        imageUrl:
            "http://static1.undiksha.ac.id/daftarkembali/2022/photoUploads/b9b081d42c77de27f03d017d19ac142b20210504060541.jpg",
        link: "-",
    },
    {
        name: "Putu Surya Ardi Bhuana",
        role: "Sie Perlengkapan",
        imageUrl:
            "http://static1.undiksha.ac.id/siakng/2021/fotomahasiswa/158406574-1630624756.jpeg",
        link: "-",
    },
    {
        name: "I Gede Gelgel Abdiutama",
        role: "Sie Perlengkapan",
        imageUrl:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/14298581461685158842.FOTO%20JAS%20UNDIKSHA.png",
        link: "-",
    },
    {
        name: "Made Adith Mahendra",
        role: "Sie Perlengkapan",
        imageUrl:
            "http://static1.undiksha.ac.id/siakng/2023/fotomahasiswa/1227541198-1677907503.png",
        link: "-",
    },
    {
        name: "Kadek Ariana",
        role: "Sie Pubdekdok",
        imageUrl:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/21300049351685321862.foto%20kkn%20undiksha%202023.png",
        link: "-",
    },
    {
        name: "I Komang Ngurah Yasana",
        role: "Sie Pubdekdok",
        imageUrl:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/15442142121687058418.IMG_20230526_230938-removebg-preview.png",
        link: "-",
    },
    {
        name: "Dewa Putu Dharma Sudana",
        role: "Sie Pubdekdok",
        imageUrl:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/16991335661685254487.IMG_3160.png",
        link: "-",
    },
    {
        name: "Zivi S Sitanggang",
        role: "Sie Konsumsi",
        imageUrl:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/9049465431685344337.IMG_7491%20copy.jpg",
        link: "-",
    },
    {
        name: "Indra Dwisaputra",
        role: "Sie Konsumsi",
        imageUrl:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/3406693481685151635.Foto_Profil_2-removebg-preview.png",
        link: "-",
    },
    {
        name: "Varelly Arletta Tyora Putri Herlambang",
        role: "Sie Konsumsi",
        imageUrl:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/19463217111686819503.Ber_jas_latar_merah.png",
        link: "-",
    },
    {
        name: "Ketut Gita Ariani",
        role: "Sie Konsumsi",
        imageUrl:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/20652141041685273200.WhatsApp%20Image%202023-05-28%20at%2019.20.19.jpeg",
        link: "-",
    },
    {
        name: "Luluk Mukarromah",
        role: "Sie Konsumsi",
        imageUrl:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/2547369561684966226.0FFF47AA-1A7E-4CB0-A505-E5D86176282C.jpeg",
        link: "-",
    },
    {
        name: "Ida Polanda Nenepat",
        role: "Sie Kerohanian",
        imageUrl:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/17814276801683025478.Picsart_23-05-02_19-03-13-454.png",
        link: "-",
    },
    {
        name: "Ni Kadek Marini Arianti",
        role: "Sie Kerohanian",
        imageUrl:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/856534681685273179.IMG_8991%20(1).jpg",
        link: "-",
    },
    {
        name: "I Gede Teguh Brahmastra Wiradharma",
        role: "Sie Kerohanian",
        imageUrl:
            "http://static1.undiksha.ac.id/kkn/2023/upload/profile/3913884821685331243.1.jpg",
        link: "-",
    },
];

export default function Example() {
    return (
        <div className="bg-white">
            <div className="mt-10 pb-16 px-6 mx-auto">
                <div className="mx-auto max-w-screen-xl mb-10">
                    <h1 className="mb-2 text-center text-xl lg:text-2xl font-bold text-slate-900">
                        Tentang Kami
                    </h1>
                    <h1 className="text-center lg:text-lg font-bold text-slate-600">
                        Kenali lebih dekat dan kami siap membantu
                    </h1>
                </div>
                <ul
                    className="mx-auto max-w-screen-xl grid gap-6 lg:grid-cols-5"
                    role="list"
                >
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className="flex items-center gap-x-6 lg:flex-col xl:flex-col md:flex-col lg:text-center md:text-center xl:text-center md:mb-4 xl:mb-4 lg:mb-4">
                                <img
                                    className="h-16 w-16 rounded-full object-cover"
                                    src={person.imageUrl}
                                    onContextMenu={(e) => e.preventDefault()}
                                    draggable="false"
                                />
                                <div>
                                    <h3 className="pt-0 lg:pt-2 md:pt-2 xl:pt-2 text-xs lg:text-base md:text-base xl:text-base font-semibold leading-7 tracking-tight text-slate-600">
                                        {person.name}
                                    </h3>
                                    <p className="text-xs lg:text-sm md:text-sm xl:text-sm font-semibold leading-6 text-indigo-600">
                                        {person.role}
                                    </p>
                                    <a
                                        href={person.link}
                                        className="flex lg:justify-center md:justify-center xl:justify-center"
                                    >
                                        <img
                                            src={ImageDownload}
                                            className="w-6"
                                            onContextMenu={(e) =>
                                                e.preventDefault()
                                            }
                                            draggable="false"
                                        />
                                    </a>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
