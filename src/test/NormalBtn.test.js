   /*******************************************************************************
     * Junya Qiao: test NormalBtn component, 
     *  if the button can passing any text for button dispaly as well direct to the correct address
     * Test the NormalBtn from NormalBtn component (Automatic test)
     * if the text can render correctly and get the correct route when click on
     * 2 test cases: for back and next
     * 1. button words can be changed
     * 2. link can be changed
     * 
     * *******************************************************************************/

import React from 'react';
import { MemoryRouter, Route, Routes} from 'react-router-dom';
import { render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NormalBtn from '../Components/NormalBtn';



  describe('NormalBtn next to info', () => {
    test('renders correctly naigate when click onto next', () => {
        const testHref = "/uploadlisting/info";
        render(
          <MemoryRouter initialEntries={['/']}>
            <Routes>
              <Route path="/" element={<NormalBtn href={testHref}>next</NormalBtn>} />
              <Route path={testHref} element={<div>Success to info</div>} />
            </Routes>
          </MemoryRouter>
        );
      expect(screen.getByRole('button')).toHaveTextContent('next');
      fireEvent.click(screen.getByText('next'));
      expect(screen.getByText('Success to info')).toBeInTheDocument();
    });
});

describe('NormalBtn back to main', () => {
  test('renders correctly naigate when click onto back', () => {
      const testHref = "/";
      render(
        <MemoryRouter initialEntries={['/uploadlisting/title']}>
          <Routes>
            <Route path="/uploadlisting/title" element={<NormalBtn href={testHref}>back</NormalBtn>} />
            <Route path={testHref} element={<div>Success to main</div>} />
          </Routes>
        </MemoryRouter>
      );
    expect(screen.getByRole('button')).toHaveTextContent('back');
    fireEvent.click(screen.getByText('back'));
    expect(screen.getByText('Success to main')).toBeInTheDocument();
  });
});


 



