import styled from "styled-components";

export const ButtonStyle = styled.button`
    border: none;
    padding: 10px 16px;
    border-radius: 3px;
    color: #fff;
    font-weight: 600;
    background-color: #4aba6a;
    &:hover {
        background-color: #399754;
        cursor: pointer;
    }
    &:active {
        background-color: #318549;
    }
    &:disabled {
        cursor: not-allowed;
        background-color: #efefef;
        color: #aaaaaa;
    }
    &:focus-visible{
        outline: none;
    }
`