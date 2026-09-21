import Link from "next/link";

export default function NavButton({navigateTo}){

    return(
        <button>
            <Link href={navigateTo.path}>{navigateTo.page}</Link>
        </button>
    )
}