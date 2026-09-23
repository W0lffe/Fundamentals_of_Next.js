import Link from "next/link";
import Image from "next/image";
import styles from "./NavButton.module.css"
export default function NavButton({ path, page, image }) {

    const hasImage = image !== null;

    if (hasImage) {

        return (
            <Link href={path}>
                <div className="z-50 max-h-20 max-w-20 overflow-hidden hover:max-h-60 hover:max-w-60 
                                transition-all duration-500 border hover:p-1 rounded-lg hover:bg-linear-to-t
                             from-gray-500/60 to-transparent">
                    <Image src={image}
                        alt="Image of View"
                        width={150}
                        height={150} />
                    <p className="font-bold text-lg text-center">{page}</p>
                </div>
            </Link>
        )
    }

    return (
        <button className={styles.navBtn}>
            <Link href={path} className="font-bold">{page}</Link>
        </button>
    )
}