import styled from "styled-components";

const StyledTable = styled.table`
    width: 100%;
    th{
        text-align: left;
        text-transform: uppercase;
        color: #aaa;
        font-weight: 500;
    }
    td{
        border-top: 1px solid rgba(0,0,0,0.1);
        }
`;

export default function Table(props) {
    return <StyledTable {...props}/>
}