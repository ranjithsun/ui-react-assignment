import styled from 'styled-components';

export const Header = styled.header`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #eeeeee;
    font-size: 24px;
`;
export const ContentSection = styled.div`
    max-width: 1200px;
    margin: auto;
    background-color: #e1e1e1;
    min-height: 700px;
    display: flex;

    .main {
        padding: 0px 10px;
        flex: 3;
    }
`;