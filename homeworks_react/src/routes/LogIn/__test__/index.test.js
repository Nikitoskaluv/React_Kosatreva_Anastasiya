import React from 'react'
import { render, fireEvent, screen, act, userEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { LoginForm } from '../LoginFormRender';
import { MemoryRouter } from 'react-router-dom';
import { LoginFormTestIds } from '../LoginFormRender';
import TestUtils from 'react-dom/test-utils'
import { LogIn } from '../LogIn'
import { Provider } from 'react-redux';
import store from '../../../store'


describe('LoginFormTests', () => {

    it('renders form component button', () => {
        render(<MemoryRouter><LoginForm /></MemoryRouter >);
        expect(screen.getByText(/login/i)).toBeInTheDocument();
    })

    it('проверяет required-свойство у инпута', () => {
        render(<MemoryRouter><LoginForm /></MemoryRouter >);
        expect(screen.getByLabelText(/обязательно/i)).toBeRequired();

    })
    it("проверка required", () => {
        const { getByTestId } = render(<MemoryRouter><LoginForm /></MemoryRouter >);

        const email = getByTestId(LoginFormTestIds.emailField);
        expect(email).toBeRequired();
    });

    test('меняется значение input', () => {
        const container = render(<MemoryRouter><LoginForm /></MemoryRouter >);
        const input = container.getByTestId(LoginFormTestIds.passwordField);
        fireEvent.change(input, { target: { value: '42' } });
        expect(input.value).toBe('42');

    });

    it('вызов метода onSubmit по клику на кнопки', async () => {
        const onSubmit = jest.fn();
        let renderedComp = TestUtils.renderIntoDocument(<MemoryRouter><LoginForm /></MemoryRouter>);
        let form = TestUtils.findRenderedDOMComponentWithClass(renderedComp, 'css-13r4j3i');
        TestUtils.Simulate.submit(form);
        onSubmit.mockImplementation(event => {
            event.preventDefault();
            act(() => {
                fireEvent.click(renderedComp.queryByTestId("LoginForm-submit"));
            })
        });
    });

    it('вызов метода logout по клику на кнопки', async () => {
        const logOut = jest.fn();
        let renderedComp = TestUtils.renderIntoDocument(<MemoryRouter><LoginForm /></MemoryRouter>);
        let button = TestUtils.findRenderedDOMComponentWithClass(renderedComp, 'LogOutBTN');

        TestUtils.Simulate.click(button);
        logOut.mockImplementation(event => {
            event.preventDefault();
            act(() => {
                fireEvent.click(renderedComp.queryByTestId("LoginForm-submit"));
            })
        });
    });

    // it('ввод данных в поле Login', () => {
    //     const loginValue = 'auth';
    //     const handleEmailChange = jest.fn();
    //     let renderedComp = TestUtils.renderIntoDocument(<MemoryRouter><Provider store={store}><LogIn setFieldValue={handleEmailChange} /></Provider></MemoryRouter>);
    //     const loginField = TestUtils.findRenderedDOMComponentWithClass(renderedComp, 'email');

    //     act(() => {
    //         fireEvent.change(loginField, { target: { value: 'TEST VALUE' } })
    //     })
    //     expect(handleEmailChange).toHaveBeenCalledWith('login', loginValue);


    // })
})


