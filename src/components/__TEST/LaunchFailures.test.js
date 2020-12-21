import React from 'react';
import { getByText, findByText, render, fireEvent, cleanup, screen, waitFor, findByTestId, findByDisplayValue} from '@testing-library/react';

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { MockedProvider } from '@apollo/react-testing';

import LaunchFailureList from '../LaunchFailureComponents/LaunchFailureList';
import LaunchFailures from '../LaunchFailureComponents/LaunchFailures';
import {getFailedlauchesQuery, getLaunchPadsQuery} from '../../queries/queries';

//Setup Apollo Client
const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql',
    cache: new InMemoryCache()
  });

const mockLaunchPadsQuery = [
{
    request: {
        query: getLaunchPadsQuery,
    },
    result: {
    data: {
        allLaunchPads: [
            {
              id: "xxx",
              launchpad: "LaunchPad 1"
            },
            {
              id: "yyy",
              launchpad: "LaunchPad 2"
            },
        ]
    }
    }
}
];

const mockFailedLaunchQuery = [
    {
      request: {
        query: getFailedlauchesQuery,
        variables: {
          id: 'selectedLaunchPad',
        }
      },
      result: {
        data: {
            launchPadFailures: {
                launchpad: "Launchpad Name",
                all_failures: [
                  {
                    name: "Launch Name 1",
                    failures: "Failure reason1"
                  },
                  {
                    name: "Launch Name 2",
                    failures: "Failure reason2"
                  }
                ]
              }
        }
      }
    }
  ];

describe('Test Launch Failure Component', () => {

    afterEach(cleanup);

    it('Test whether the component loads correctly', () => {
        const { getByText, getByTestId } = render(<ApolloProvider client={client}><LaunchFailures /></ApolloProvider>);

        /** Test whether the select element load with tthe proper label*/
        expect(getByText(/List/i).textContent).toBe("List of Launchpads:");
        expect(getByTestId('lauchPads')).toBeTruthy();

        /** Test whether the Launchpad list shows initially */
        expect(screen.queryByTestId('lauchpad-failure-container')).toBeFalsy();
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

    it('should render select Launchpad with options after graphql guery', async () => {
        const { container } = render(
        <MockedProvider mocks={mockLaunchPadsQuery}>
            <LaunchFailures  />
        </MockedProvider>
        )

        const LaunchPadOptionElement = await findByText(container, 'LaunchPad 1')

        expect(LaunchPadOptionElement).toBeTruthy();
    });

    it('should render failure message and details after graphql guery', async () => {
        const { container } = render(
        <MockedProvider mocks={mockFailedLaunchQuery}>
            <LaunchFailureList selectedLaunchPad="selectedLaunchPad" />
        </MockedProvider>
        )

        const failureMessageElement = await findByTestId(container, 'failure-message')
        const failureListContent = await findByTestId(container, 'failure-list-container')

        expect(failureMessageElement).toBeTruthy()
        expect(failureListContent).toBeTruthy()
    });

});