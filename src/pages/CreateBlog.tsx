import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { base_api_url } from "../App";
import { toast } from "react-toastify";
import CKEditorWrapper from "../components/CKEditorWrapper";

const CreateBlog: React.FC = () => {
    const [title, setTitle] = useState<string>("");
    const [fileImage, setFileImage] = useState<File | null>(null);
    const [newsContent, setNewsContent] = useState<string>("");
    const cookie = new Cookies();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        formData.append("fileImage", fileImage || "");
        formData.append("news_content", newsContent);

        const token = cookie.get("Authorization");

        if (token) {
            try {
                const response = await axios.post(
                    base_api_url + "/api/posts",
                    formData,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
                console.log("Blog post created:", response.data);
                toast.success("Blog berhasil dibuat!");
            } catch (error) {
                console.error("Error creating blog post:", error);
                toast.error("Terjadi kesalahan saat membuat blog.");
            }
        } else {
            console.error("Token akses tidak tersedia.");
            toast.error("Token akses tidak tersedia.");
        }
    };

    return (
        <section className="bg-white">
            <div className="mt-10 px-6">
                <div className="mx-auto max-w-screen-xl mb-10">
                    <h1 className="mb-2 text-center text-xl lg:text-2xl font-bold text-slate-900">
                        Buat Blog
                    </h1>
                    <h1 className="text-center lg:text-lg font-bold text-slate-600">
                        Yuk buat postingan blog terbaru
                    </h1>
                </div>
                <div className="mx-auto max-w-screen-xl text-sm">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label
                                htmlFor="title"
                                className="block font-semibold text-slate-900"
                            >
                                Judul
                            </label>
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full px-3 py-2 border rounded-lg"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="newsContent"
                                className="block font-semibold text-slate-900"
                            >
                                Deskripsi
                            </label>
                            <CKEditorWrapper
                                content={newsContent}
                                onChange={setNewsContent}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="fileImage"
                                className="block font-semibold text-slate-900"
                            >
                                Gambar
                            </label>
                            <input
                                type="file"
                                id="fileImage"
                                onChange={(e) =>
                                    setFileImage(e.target.files?.[0] || null)
                                }
                                className="w-full px-3 py-2 border rounded-lg"
                            />
                        </div>
                        <div className="text-center mt-5 pb-16">
                            <button
                                type="submit"
                                className="text-sm font-bold text-white bg-indigo-600 py-3 px-8 rounded-lg hover:shadow-lg hover:opacity-50 transition duration-300 ease-in-out"
                            >
                                Buat Blog
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default CreateBlog;
