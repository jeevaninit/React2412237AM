/* import { render,screen } from "@testing-library/react"
import Testingcomponent from "./Testingcomponent"
import '@testing-library/jest-dom/extend-expect';


test("Render the correct text in the H1 Tag",()=>{
   render(<Testingcomponent />);
    const h1Element=screen.getByText('Welcome to React Testing Library');
    expect(h1Element).toBeInTheDocument();
}) */

import { render } from "@testing-library/react"
import Testingcomponent from "./Testingcomponent"

    it("render component",()=>{
        render(<Testingcomponent />);
    })