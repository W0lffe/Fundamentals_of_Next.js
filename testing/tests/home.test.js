import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
    
    test("should render heading text", () => {

        const heading = /testing in next\.js/i;
        render(<Home />)
        expect(screen.getByText(heading)).toBeInTheDocument();
    })
