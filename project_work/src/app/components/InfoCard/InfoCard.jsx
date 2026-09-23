
export default function InfoCard({info}){

    return(
        <section className="border border-black rounded-2xl p-5">
            <h3 className="underline px-1 italic">{info.title}</h3>
            <p>{info.info}</p>
        </section>
    )
}