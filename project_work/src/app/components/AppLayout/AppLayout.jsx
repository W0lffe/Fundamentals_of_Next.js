import Image from "next/image"

export default function AppLayout({children}){

    return(
        <div>
             <Image
                    className="dark:invert h-20 w-50"
                    src="/next.svg"
                    alt="Next.js logo"
                    width={100}
                    height={20}
                    priority 
                  />
            {children}
        </div>
    )
}