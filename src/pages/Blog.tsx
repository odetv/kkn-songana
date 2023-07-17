import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { base_api_url } from "../App";
import CKEditorViewer from "../components/CKEditorViewer";

export default function Blog() {
    const [posts, setPosts] = useState<Post[]>([]);

    interface Post {
        id: number;
        image: string;
        created_at: string;
        author: {
            username: string;
        };
        title: string;
        news_content: string;
    }

    useEffect(() => {
        axios.get(base_api_url + "/api/posts").then((response) => {
            const postData = response.data.data;
            setPosts(postData);
        });
    }, []);

    return (
        <section className="bg-white">
            <div className="mt-10 px-6">
                <div className="mx-auto max-w-screen-xl mb-10">
                    <h1 className="mb-2 text-center text-xl lg:text-2xl font-bold text-slate-900">
                        Blog & Galery
                    </h1>
                    <h1 className="text-center lg:text-lg font-bold text-slate-600">
                        Yuk buat postingan blog terbaru
                    </h1>
                </div>
                <div className="mx-auto max-w-screen-xl grid xl:grid-cols-4 xl:gap-6 lg:grid-cols-3 lg:gap-5 md:grid-cols-2 md:gap-6">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden mb-6"
                        >
                            <div id="imageUrl" className="">
                                <img
                                    src={
                                        base_api_url +
                                        "/storage/image/" +
                                        post.image
                                    }
                                    className="object-cover h-48 w-full"
                                    onContextMenu={(e) => e.preventDefault()}
                                    draggable="false"
                                />
                            </div>
                            <div className="flex flex-row justify-between">
                                <div
                                    id="createdAt"
                                    className="flex justify-between items-center ml-6 mt-3"
                                >
                                    <span className="text-[11px] font-bold text-slate-600 rounded-md">
                                        {post.created_at}
                                    </span>
                                </div>
                                <div
                                    id="author"
                                    className="flex justify-between items-center mr-6 mt-3"
                                >
                                    <span className="text-[10px] font-bold bg-slate-300 text-slate-600 p-2 rounded-md">
                                        <p className="truncate">
                                            {post.author.username}
                                        </p>
                                    </span>
                                </div>
                            </div>
                            <div className="py-6 px-6">
                                <h3>
                                    <Link
                                        id="title"
                                        to=""
                                        className="block mb-3 font-semibold text-lg text-slate-900 transition 0.3s ease-in-out hover:text-slate-900 truncate"
                                    >
                                        {post.title}
                                    </Link>
                                </h3>
                                <div id="desc" className="truncate">
                                    <p className="text-sm mb-2 text-slate-600">
                                        <CKEditorViewer
                                            content={post.news_content}
                                        />
                                    </p>
                                </div>
                                <Link
                                    id="linkDetail"
                                    to={"posts/" + post.id}
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
                    ))}
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
}
