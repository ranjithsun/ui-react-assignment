import React from 'react';
import { getByText, findByText, render, fireEvent, cleanup, screen, waitFor} from '@testing-library/react';

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import LaunchFailures from '../LaunchFailureComponents/LaunchFailures';

//Setup Apollo Client
const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    cache: new InMemoryCache()
  });

afterEach(cleanup);

it('Test whether the component loads correctly', () => {
    const { getByText, getByTestId } = render(<ApolloProvider client={client}><LaunchFailures /></ApolloProvider>);

    /** Test whether the select element load with tthe proper label*/
    expect(getByText(/List/i).textContent).toBe("List of Launchpads:");
    expect(getByTestId('lauchPads')).toBeTruthy();

    /** Test whether the Launchpad list shows initially */
    expect(screen.queryByTestId('lauchpad-failure-container')).toBeFalsy();
 });

 it('Test the FetchAPI call works and options loads', async () => {
    const { getByTestId } = render(<ApolloProvider client={client}><LaunchFailures /></ApolloProvider>);

    await waitFor(() => expect(getByTestId('lauchPads').childNodes.length).toBeGreaterThan(1), {options: { timeOut:5000}});
 });

it('Could be able select an option', async () => {
    const { getByTestId } = render(<ApolloProvider client={client}><LaunchFailures /></ApolloProvider>);

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