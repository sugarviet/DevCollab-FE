import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '.';

describe('Counter Component', ()=> {
  it('render initial count', ()=>{
    render(<Counter />);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });

  it('increments count on click', () => {
    render(<Counter />);
    fireEvent.click(screen.getByText('Increment'));
    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });
})