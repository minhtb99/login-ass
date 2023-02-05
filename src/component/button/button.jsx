import { ButtonStyle } from "./buttonStyle"

const Button = ({ title, disabled, onClick }) => {

    return (
        <ButtonStyle disabled={disabled} onClick={onClick} >
            {title}
        </ButtonStyle>
    )
}

export default Button