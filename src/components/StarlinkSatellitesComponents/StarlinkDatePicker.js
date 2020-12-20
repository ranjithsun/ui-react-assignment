import {DatePicker, SelectBox} from './starlinksatellites.style';

function StarlinkDatePicker({filterSatellites, yearArray, monthArray, dateArray, showMonth, showDate}){
    return (
        <DatePicker>
            <div data-testid="selectbox-label" className="selectbox-label">
                Pick an option to list the satellites:
            </div>
            <SelectBox>
                <select data-testid="year" name="year" onChange={filterSatellites}>
                <option value="" >Select Year</option>
                { yearArray.map(year => <option key={year} value={year} >{year}</option>) }
                </select>
            </SelectBox>
            {showMonth &&
            <SelectBox>
                <select data-testid="month" name="month" onChange={filterSatellites}>
                <option value="" >Select Month</option>
                { monthArray.map(month => <option key={month} value={month} >{month}</option>) }
                </select>
            </SelectBox>
            }
            {showDate &&
            <SelectBox>
                <select data-testid="date" name="date" onChange={filterSatellites}>
                <option value="" >Select Day</option>
                { dateArray.map(date => <option key={date} value={date} >{date}</option>) }
                </select>
            </SelectBox>
            }
        </DatePicker>
    );
}

export default StarlinkDatePicker;