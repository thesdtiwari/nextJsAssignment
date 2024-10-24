import { useRouter } from "next/router";

const Header = () => {
    const { push } = useRouter();
    return (
        <div style={{ display : "flex"}}>
            <button
                onClick={() => push(`/`)}
                className="flex flex-col rounded-lg border-2 border-solid border-black overflow-hidden hover:border-cyan-500 hover:bg-slate-200 hover:opacity-90"
            > HOME </button>
            <button
                onClick={() => push(`/following`)}
                className="flex flex-col rounded-lg border-2 border-solid border-black overflow-hidden hover:border-cyan-500 hover:bg-slate-200 hover:opacity-90"
            > Following </button>
            <button
                onClick={() => push(`/contact-us`)}
                className="flex flex-col rounded-lg border-2 border-solid border-black overflow-hidden hover:border-cyan-500 hover:bg-slate-200 hover:opacity-90"
            >Contact Us </button>
        </div>
    )
}

export default Header;