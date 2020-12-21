import styled from 'styled-components';

export const LaunchpadContainer = styled.div`
    padding: 50px 20px;
`;

export const LauchpadSelectWrapper = styled.div`
    display: flex;
    .launchpad-label {
        font-size: 20px;
    }
    .launchpad-list {
        margin-left: 10px;
        width: 200px;
        height: 24px;
    }
`;

export const LauchpadFailureContainer = styled.div`
    width: 100%;
`;

export const FailureMessageContainer = styled.div`
    width: 100%;

    .failure-message {
        font-size: 20px;
        margin-top: 15px;
    }
`;

export const FailureListContainer = styled.div`
    margin: 20px 0;
    .failure-list-row {
        display: flex;
        padding: 10px;
        .failure-list-column-one{
            flex: 1;
        }
        .failure-list-column-two{
            flex: 3;
        }
        .failure-list-column-three{
            flex: 10;
        }
    }
    .row-odd {
        background-color: #f9f9f9;
    }
    .row-even {
        background-color: #f1f1f1;
    }

    .title-row {
        border-bottom: 1px solid #000;
        background-color: #ffffff;
    }
`;
