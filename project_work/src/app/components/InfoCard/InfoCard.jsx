
export default function InfoCard({info}){

    return(
        <section>
            <h3>{info.title}</h3>
            <p>{info.info}</p>
        </section>
    )
}