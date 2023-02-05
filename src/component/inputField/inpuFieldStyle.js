import styled from "styled-components";

export const InputWrapper = styled.div`

`

export const Title = styled.div`
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 4px;
`

export const InputForm = styled.div`
    position: relative;
    width: 100%;
    height:32px;
`

export const IconWrapper = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    cursor: pointer;
`

export const InputStyle = styled.input`
    width: 100%;
    height: 32px;
    border-radius: 3px;
    border: 1px solid #ccc;
    font-size: 12px;
    color: #666666;
    position: absolute;
    padding: 5px;

    &:focus-visible{
        outline: 3px solid #e6fff2;
        border-color: #4aba6a;
    }
`