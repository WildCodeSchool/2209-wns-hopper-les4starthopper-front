import Map from './Map'
import { render, screen } from "@testing-library/react"

describe('map', ()=> {
        it('display pop up on click', ()=> {
            render(<Map />)
            // expect(screen.getByRole('')).toBeInTheDocument()
        })
    })