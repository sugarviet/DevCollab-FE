import { render, fireEvent, screen } from "@testing-library/react";
import LoginForm from ".";

describe('LoginForm', () => {
  it('render email and password inputs', ()=>{
    render(<LoginForm onLogin={jest.fn()}/>);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', {name: /login/i})).toBeInTheDocument();
  });

  it('shows validation errors', ()=> {
    render(<LoginForm onLogin={jest.fn()}/>);

    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(screen.getByRole('alert')).toHaveTextContent('Email and password are required')
  })

  it('call when fill full data', ()=> {
    const onLoginMock = jest.fn();
    render(<LoginForm onLogin={onLoginMock} />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: {value: 'user@example.com'}
    })

    fireEvent.change(screen.getByLabelText(/password/i), {
      target: {value: 'secret@123'}
    })

    fireEvent.click(screen.getByRole('button', {name: /login/i}));

    expect(onLoginMock).toHaveBeenCalledWith('user@example.com', 'secret@123')
  })
})