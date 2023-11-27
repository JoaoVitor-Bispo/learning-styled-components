import styled from 'styled-components'
import Button from './Button'

export const StyledButton = styled.button`
    background-color: ${(prop) => prop.background};
    color: white;
    padding: 8px 18px;
    font-weight: bold;
    border-radius: 6px;
    border: none;

    &:hover {
        background-color: white;
        color: blue;
        border: 2px solid blue
    }
`

export const ComponentButton = styled(Button)`
    background-color: pink;
`