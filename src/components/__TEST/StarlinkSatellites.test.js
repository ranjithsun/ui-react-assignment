import React from 'react';

import { getByText, findByText, render, fireEvent, cleanup, screen, waitFor} from '@testing-library/react';

import { Provider } from 'react-redux'
import configureStore from '../../redux/store';
import StarlinkSatellites from '../StarlinkSatellitesComponents/StarlinkSatellites';
import StarlinkDatePicker from '../StarlinkSatellitesComponents/StarlinkDatePicker';
import {dateArray,monthArray,yearArray} from '../../constants/ConstantValues'; 

describe('Test Launch Failure Component', () => {

    afterEach(cleanup);

    it('Test the component loads correctly', () => {

        const {getByTestId } = render(<Provider store={configureStore()}><StarlinkSatellites /></Provider>);

        /** Test whether the select element load with the proper label & selectboxes*/
        expect(getByTestId('selectbox-label').textContent).toBe("Pick an option to list the satellites:");
        expect(getByTestId('year')).toBeTruthy();
        expect(screen.queryByTestId('month')).toBeFalsy();
        expect(screen.queryByTestId('date')).toBeFalsy();

        /** Test whether the Statellite list shows initially */
        expect(screen.queryByTestId('statellite-list')).toBeTruthy();
    });

    it('checks initial state value is []', async () => {
        const { getByTestId } = render(<Provider store={configureStore()}><StarlinkSatellites /></Provider>);

        expect(getByTestId('statellite-list').childNodes.length).toBe(2); 
    });

    it('Test the FetchAPI call works and list loads', async () => {
        
        const { getByTestId } = render(<Provider store={configureStore()}><StarlinkSatellites /></Provider>);

        expect(getByTestId('statellite-list').childNodes.length).toBe(2); //initial childnode length should be one
        await waitFor(
            () => expect(getByTestId('statellite-list').childNodes.length).toBeGreaterThan(2), // waitfor the API call, then child node should be more than one
            {options: { timeOut:5000}} 
        );
    });

    it('Could be able select an option', async () => {

        const {getByTestId } = render(<Provider store={configureStore()}><StarlinkSatellites /></Provider>);

        const keyDownEvent = {
            key: 'ArrowDown',
        };

        async function selectOption(container, optionText) {
            const placeholder = getByText(container, 'Select Year');
            fireEvent.keyDown(placeholder, keyDownEvent);
            await findByText(container, optionText);
            fireEvent.click(getByText(container, optionText));
        }
        /** Open the select options then click on an option. */
        await selectOption(getByTestId('year'), '2019');
    });

    it('test conditional rendering of Month & Date selectbox', async () => { 
        const showMonth= true;
        const showDate= true
        const { getByTestId } = render(<StarlinkDatePicker 
            filterSatellites={()=>{}} 
            yearArray={yearArray} 
            monthArray={monthArray} 
            dateArray={dateArray} 
            showMonth={showMonth} 
            showDate={showDate} />);
        
        await waitFor(() => expect(getByTestId('month')).toBeTruthy());
        await waitFor(() => expect(getByTestId('date')).toBeTruthy());
    });

});