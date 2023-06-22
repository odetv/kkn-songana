import { Link } from "react-router-dom";
import ImageDashboard from "../assets/images/dashboard/dashboard.jpg";
import { TypeAnimation } from "react-type-animation";

const Dashboard = () => {
    return (
        <div id="dashboard" className="pt-12 pb-20 px-2">
            <div className="flex justify-center items-center mx-auto max-w-screen-xl">
                <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-row-1 content-center">
                    <div className="w-full self-end px-4 order-first xl:order-last lg:order-last md:order-last sm:order-first">
                        <div className="relative">
                            <img
                                src={ImageDashboard}
                                alt="Bali"
                                className="w-100 rounded-tl-full rounded-tr-full md:rounded-xl lg:rounded-tl-full lg:rounded-tr-full shadow-lg w-full mx-auto hover:scale-105 transition duration-300 ease-in-out"
                                onContextMenu={(e) => e.preventDefault()}
                                draggable="false"
                            />
                        </div>
                    </div>
                    <div className="w-full self-center px-4">
                        <h1 className="text-slate-900 block font-bold text-3xl mb-7 mt-7 lg:mt-0 xl:mt-0 lg:text-4xl text-center md:text-left lg:text-left xl:text-left">
                            Selamat Datang di Website KKNT
                        </h1>
                        <TypeAnimation
                            sequence={[
                                "Desa Songan A Kec. Kintamani",
                                2000,
                                "Desa Songan A Kab. Bangli",
                                2000,
                                "Desa Songan A Prov. Bali",
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="text-slate-900 font-bold text-lg mb-2 text-center lg:text-left xl:text-left bg-yellow-200"
                        />
                        <p className="text-slate-600 mb-8 leading-normal text-justify lg:text-left xl:text-left">
                            Platform informasi resmi untuk program Kuliah Kerja
                            Nyata. Program ini merupakan bagian penting dari
                            pengalaman kuliah yang bertujuan untuk
                            mengaplikasikan ilmu pengetahuan dan keterampilan
                            mahasiswa dalam melayani masyarakat.
                        </p>
                        <Link
                            to="/login"
                            className="text-sm font-bold text-white bg-indigo-600 py-3 px-8 rounded-lg hover:shadow-lg hover:opacity-50 transition duration-300 ease-in-out"
                        >
                            Lihat Selengkapnya
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Dashboard;
