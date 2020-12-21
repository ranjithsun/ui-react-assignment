import styled from 'styled-components';

export const SideNav = styled.nav`
    z-index: 1;
    border-right: solid 5px #ffffff;
    background-color: #aaaaaa;
    flex: 1;

    a:first-child{
        margin-top: 20px;
    }
    a {
        padding: 6px 8px 6px 16px;
        text-decoration: none;
        font-size: 20px;
        color: #ffffff;
        border: 1px solid #818181;
        background-color: #000000;
        display: block;
    }
    a.active {
        color: #ffffff;
        border: 1px solid #000000;
        background-color: #818181;
    }
    a:hover {
        color: #f1f1f1;
    }
`;