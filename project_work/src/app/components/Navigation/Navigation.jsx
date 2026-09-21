import NavButton from "../NavButton/NavButton";

export default function Navigation({pages}){
    return(
        <nav>
            {pages.map((page, i) => (
                <NavButton key={i} navigateTo={{path: page.path, page: page.page}} />
            ))}
        </nav>
    )
}