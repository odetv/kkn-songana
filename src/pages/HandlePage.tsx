import { Link } from "react-router-dom";
import Page404 from "../assets/images/handling-page/404.gif";

const HandlePage404 = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-5 mb-20">
            <img
                className="w-96"
                src={Page404}
                alt="404"
                onContextMenu={(e) => e.preventDefault()}
                draggable="false"
            />
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg">
                <Link
                    to="/"
                    className="text-sm font-semibold leading-6 text-white"
                >
                    Go Back
                </Link>
            </button>
        </div>
    );
};
export default HandlePage404;
