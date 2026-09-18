import { render, screen } from "@testing-library/react";
import Greeting from "@/app/components/Greeting";

    
    test("component should render with given string", () => {

        const name = "Teppo";

        render(<Greeting name={name}/>)
        expect(screen.getByText(`Greetings, ${name}!`)).toBeInTheDocument();
    })
