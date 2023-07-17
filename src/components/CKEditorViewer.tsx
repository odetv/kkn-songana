import React from "react";

interface ViewBlogProps {
    content: string;
}

const ViewBlog: React.FC<ViewBlogProps> = ({ content }) => {
    // Membersihkan teks dari tag HTML menggunakan regex
    const cleanContent = content.replace(/(<([^>]+)>)/gi, "");

    return <p className="text-sm mb-2 text-slate-600">{cleanContent}</p>;
};

export default ViewBlog;
