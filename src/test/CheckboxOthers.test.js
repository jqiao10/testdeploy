import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CheckboxOthers from "../Components/CheckboxOthers";

describe('CheckboxBtn Component', () => {
  // check if check box exisit
    test('check checkbox type', () => {
        render(<CheckboxOthers />);
        expect(screen.getByRole('checkbox')).toBeInTheDocument();
      });
      
      // check if others box exisit
      test('Check input field', () => {
        render(<CheckboxOthers />);
        const input = screen.getByPlaceholderText('Others');
        expect(input).toBeInTheDocument();
      });
  });