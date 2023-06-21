import { Link } from "react-router-dom";

const Blog = () => {
    return (
        <section className="bg-white">
            <div className="mt-10 px-6">
                <div className="mx-auto max-w-screen-xl mb-10">
                    <h1 className="mb-2 text-center text-xl lg:text-2xl font-bold text-slate-900">
                        Blog & Galery
                    </h1>
                    <h1 className="text-center lg:text-lg font-bold text-slate-600">
                        Lihat kegiatan kami selama bertugas
                    </h1>
                </div>
                <div className="mx-auto max-w-screen-xl grid lg:grid-cols-4 lg:gap-6 md:grid-cols-4 md:gap-6 xl:grid-cols-4 xl:gap-6">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
                        <div className="">
                            <img
                                src="https://media.istockphoto.com/id/953295782/id/foto/pura-ulun-danu-bratan-temple.jpg?s=612x612&w=0&k=20&c=6koyMVq3-4eRzSXhNCLzcBgDDbLz03tKocwuz9TrGvs="
                                alt="Travel"
                                className="object-cover h-48 w-full"
                                onContextMenu={(e) => e.preventDefault()}
                                draggable="false"
                            />
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="flex justify-between items-center ml-6 mt-3">
                                <span className="text-[11px] font-bold text-slate-600 rounded-md">
                                    Rabu, 21 Juni 2023
                                </span>
                            </div>
                            <div className="flex justify-between items-center mr-6 mt-3">
                                <span className="text-[10px] font-bold bg-slate-300 text-slate-600 p-2 rounded-md">
                                    <p className="truncate">
                                        I Gede Gelgel Abdiutama
                                    </p>
                                </span>
                            </div>
                        </div>
                        <div className="py-6 px-6">
                            <h3>
                                <Link
                                    to=""
                                    className="block mb-3 font-semibold text-lg text-slate-900 transition 0.3s ease-in-out hover:text-slate-900 truncate"
                                >
                                    Blog Dummy Pertama
                                </Link>
                            </h3>
                            <div className="truncate">
                                <p className="text-sm mb-2 text-slate-600">
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Sequi, itaque animi! Nam
                                    fuga voluptatem veritatis eius nemo, eos
                                    eveniet magnam maiores quae ducimus ipsum!
                                    Vel totam eaque ad unde incidunt?
                                </p>
                            </div>
                            <Link
                                to=""
                                className="flex items-center font-bold text-sm text-slate-600 transition 0.3s ease-in-out hover:text-slate-900"
                            >
                                Baca selengkapnya
                                <svg
                                    className="ml-2 w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
                        <div className="">
                            <img
                                src="https://media.istockphoto.com/id/953295782/id/foto/pura-ulun-danu-bratan-temple.jpg?s=612x612&w=0&k=20&c=6koyMVq3-4eRzSXhNCLzcBgDDbLz03tKocwuz9TrGvs="
                                alt="Travel"
                                className="object-cover h-48 w-full"
                                onContextMenu={(e) => e.preventDefault()}
                                draggable="false"
                            />
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="flex justify-between items-center ml-6 mt-3">
                                <span className="text-[11px] font-bold text-slate-600 rounded-md">
                                    Rabu, 21 Juni 2023
                                </span>
                            </div>
                            <div className="flex justify-between items-center mr-6 mt-3">
                                <span className="text-[10px] font-bold bg-slate-300 text-slate-600 p-2 rounded-md">
                                    <p className="truncate">
                                        I Gede Gelgel Abdiutama
                                    </p>
                                </span>
                            </div>
                        </div>
                        <div className="py-6 px-6">
                            <h3>
                                <Link
                                    to=""
                                    className="block mb-3 font-semibold text-lg text-slate-900 transition 0.3s ease-in-out hover:text-slate-900 truncate"
                                >
                                    Blog Dummy Kedua
                                </Link>
                            </h3>
                            <div className="truncate">
                                <p className="text-sm mb-2 text-slate-600">
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Sequi, itaque animi! Nam
                                    fuga voluptatem veritatis eius nemo, eos
                                    eveniet magnam maiores quae ducimus ipsum!
                                    Vel totam eaque ad unde incidunt?
                                </p>
                            </div>
                            <Link
                                to=""
                                className="flex items-center font-bold text-sm text-slate-600 transition 0.3s ease-in-out hover:text-slate-900"
                            >
                                Baca selengkapnya
                                <svg
                                    className="ml-2 w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
                        <div className="">
                            <img
                                src="https://media.istockphoto.com/id/953295782/id/foto/pura-ulun-danu-bratan-temple.jpg?s=612x612&w=0&k=20&c=6koyMVq3-4eRzSXhNCLzcBgDDbLz03tKocwuz9TrGvs="
                                alt="Travel"
                                className="object-cover h-48 w-full"
                                onContextMenu={(e) => e.preventDefault()}
                                draggable="false"
                            />
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="flex justify-between items-center ml-6 mt-3">
                                <span className="text-[11px] font-bold text-slate-600 rounded-md">
                                    Rabu, 21 Juni 2023
                                </span>
                            </div>
                            <div className="flex justify-between items-center mr-6 mt-3">
                                <span className="text-[10px] font-bold bg-slate-300 text-slate-600 p-2 rounded-md">
                                    <p className="truncate">
                                        I Gede Gelgel Abdiutama
                                    </p>
                                </span>
                            </div>
                        </div>
                        <div className="py-6 px-6">
                            <h3>
                                <Link
                                    to=""
                                    className="block mb-3 font-semibold text-lg text-slate-900 transition 0.3s ease-in-out hover:text-slate-900 truncate"
                                >
                                    Blog Dummy Ketiga
                                </Link>
                            </h3>
                            <div className="truncate">
                                <p className="text-sm mb-2 text-slate-600">
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Sequi, itaque animi! Nam
                                    fuga voluptatem veritatis eius nemo, eos
                                    eveniet magnam maiores quae ducimus ipsum!
                                    Vel totam eaque ad unde incidunt?
                                </p>
                            </div>
                            <Link
                                to=""
                                className="flex items-center font-bold text-sm text-slate-600 transition 0.3s ease-in-out hover:text-slate-900"
                            >
                                Baca selengkapnya
                                <svg
                                    className="ml-2 w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
                        <div className="">
                            <img
                                src="https://media.istockphoto.com/id/953295782/id/foto/pura-ulun-danu-bratan-temple.jpg?s=612x612&w=0&k=20&c=6koyMVq3-4eRzSXhNCLzcBgDDbLz03tKocwuz9TrGvs="
                                alt="Travel"
                                className="object-cover h-48 w-full"
                                onContextMenu={(e) => e.preventDefault()}
                                draggable="false"
                            />
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="flex justify-between items-center ml-6 mt-3">
                                <span className="text-[11px] font-bold text-slate-600 rounded-md">
                                    Rabu, 21 Juni 2023
                                </span>
                            </div>
                            <div className="flex justify-between items-center mr-6 mt-3">
                                <span className="text-[10px] font-bold bg-slate-300 text-slate-600 p-2 rounded-md">
                                    <p className="truncate">
                                        I Gede Gelgel Abdiutama
                                    </p>
                                </span>
                            </div>
                        </div>
                        <div className="py-6 px-6">
                            <h3>
                                <Link
                                    to=""
                                    className="block mb-3 font-semibold text-lg text-slate-900 transition 0.3s ease-in-out hover:text-slate-900 truncate"
                                >
                                    Blog Dummy Keempat
                                </Link>
                            </h3>
                            <div className="truncate">
                                <p className="text-sm mb-2 text-slate-600">
                                    Lorem ipsum, dolor sit amet consectetur
                                    adipisicing elit. Sequi, itaque animi! Nam
                                    fuga voluptatem veritatis eius nemo, eos
                                    eveniet magnam maiores quae ducimus ipsum!
                                    Vel totam eaque ad unde incidunt?
                                </p>
                            </div>
                            <Link
                                to=""
                                className="flex items-center font-bold text-sm text-slate-600 transition 0.3s ease-in-out hover:text-slate-900"
                            >
                                Baca selengkapnya
                                <svg
                                    className="ml-2 w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-5 pb-16">
                <Link
                    to="/blog-detail"
                    className="text-sm font-bold text-white bg-indigo-600 py-3 px-8 rounded-lg hover:shadow-lg hover:opacity-50 transition duration-300 ease-in-out"
                >
                    Lihat Lebih Banyak
                </Link>
            </div>
        </section>
    );
};
export default Blog;
