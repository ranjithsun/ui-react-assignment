import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { getByText, findByText, render, fireEvent, cleanup, screen, waitFor} from '@testing-library/react';

import LaunchFailures from '../LaunchFailures';

Enzyme.configure({ adapter: new Adapter() });

afterEach(cleanup);

it('Test the component loads correctly', () => {
    const { getByText, getByTestId } = render(<LaunchFailures />);

    /** Test whether the select element load with tthe proper label*/
    expect(getByText(/List/i).textContent).toBe("List of Launchpads:");
    expect(getByTestId('lauchPads')).toBeTruthy();

    /** Test whether the Launchpad list shows initially */
    expect(screen.queryByTestId('lauchpad-failure-container')).toBeFalsy();
 });

 it('Test the FetchAPI call works and options loads', async () => {
    const { getByTestId } = render(<LaunchFailures />);

    await waitFor(() => expect(getByTestId('lauchPads').childNodes.length).toBeGreaterThan(1), {options: { timeOut:2000}});
 });

it('can select an option', async () => {
    const { getByTestId } = render(<LaunchFailures />);

    const keyDownEvent = {
        key: 'ArrowDown',
    };

    async function selectOption(container, optionText) {
        const placeholder = getByText(container, 'Select launchPad');
        fireEvent.keyDown(placeholder, keyDownEvent);
        await findByText(container, optionText);
        fireEvent.click(getByText(container, optionText));
    }
    /** Open the select options then click on an option. */
    await selectOption(getByTestId('lauchPads'), 'VAFB SLC 3W');
});