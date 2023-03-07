
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from 'next/link'
import Newslatter from "./_child/newslatter";

export default function () {
    let bg:Object = {
        backgroundImage: "url('/images/footer.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom left"
    }
    return (
        <footer className="bg-gray-50" style={bg}>
            <Newslatter />
            <div className="container mx-auto flex justify-center py-12">
                <div className="py-5">
                    <div className="flex gap-6 justify-center">
                        <Link href={"/"}>
                            <ImFacebook color="#063970" />
                        </Link>
                        <Link href={"/"}>
                            <ImTwitter color="#1e81b0" />
                        </Link>
                        <Link href={"/"}>
                            <ImYoutube color="#d40d11" />
                        </Link>
                    </div>
                    <div className="text-xs">
                        <p className="pt-5 text-gray-400">Copyright @2023 All Right reserved by Naja Nadhirah</p>
                        <p className="text-gray-400 text-center">Terms & Conditions</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}