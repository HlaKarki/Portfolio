import Link from "next/link";

export default function Header() {
    return (
        <div className={"flex"}>
            <Link href={"/"}>Home</Link>
            <Link href={"/#projects"}>Projects</Link>
            <Link href={"/#tools"}>Tools</Link>
        </div>
    )
}