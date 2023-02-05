import styled from "styled-components";

export const LinkWrapper = styled.a`
    text-decoration: underline;
    color: #4aba6a;

    &:hover {
       color: #399754;
        cursor: pointer;
    }
    &:active {
       color: #318549;
    }
    &:focus-visible{
        outline: none;
    }

`