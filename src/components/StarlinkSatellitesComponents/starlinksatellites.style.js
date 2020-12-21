import styled from 'styled-components';

export const StatelliteListContainer = styled.div`
    padding: 20px 40px;
`;

export const DatePicker = styled.div`
    display: flex;
    .selectbox-label {
        margin-right: 10px;
        font-size: 20px;
    }
`;

export const SelectBox = styled.div`
    margin: 0 10px;

    select{
        height: 24px;
        width: 100px;
    }
`;

export const SatelliteList = styled.div`
    margin: 20px 0;
    .statellite-list-row {
        display: flex;
        padding: 10px;
        .statellite-list-column-one{
            flex: 1;
        }
        .statellite-list-column{
            flex: 3;
        }
        .row-odd {
            background-color: #f9f9f9;
        }
        .row-even {
            background-color: #f1f1f1;
        }
    }
    .title-row {
        border-bottom: 1px solid #000;
        background-color: #ffffff;
    }
`;

export const NoDataContainer = styled.div`
    padding: 10px;
    font-size: 16px;
`
