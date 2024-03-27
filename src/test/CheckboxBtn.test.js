import React from "react";
import { render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import CheckboxBtn from "../Components/CheckboxBtn";

const MockIcon = ({ size }) => <div data-testid="icon" style={{ width: size, height: size }}>Icon</div>;

describe('CheckboxBtn Component', () => {
  // check label 
  test('Test checkBoxBtn Children', () => {
    render(<CheckboxBtn>Test Label</CheckboxBtn>);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  // check icon
  test('Check there is CheckboxIcon', () => {
    render(<CheckboxBtn IconComponent={MockIcon}>Test Checkbox</CheckboxBtn>);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  // checkbox exisit
  test('Check checkbox type',() =>{
    render(<CheckboxBtn/>);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  })
});