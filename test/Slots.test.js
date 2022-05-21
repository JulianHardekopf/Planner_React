import { render, screen, fireEvent } from '@testing-library/react';
import Slot from "src\components\Slot.js"


describe("Slot", () => {
    it("test slots"), async () => {
        render(<Slot />)
        //const inputElementName = screen.getAllByPlaceholderText(/Add title/i)
    }
})