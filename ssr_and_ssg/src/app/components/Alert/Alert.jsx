
export default function Alert(){

    return(
        <div className="p-5 m-2 bg-red-800/60 border border-black 
                        rounded-md flex flex-col items-center 
                        hover:animate-pulse hover:p-10 transition-all duration-150"
            >
            <h1 className="font-bold">THIS IS A ALERT!</h1>
            <p>Hover here</p>
        </div>
    )
}