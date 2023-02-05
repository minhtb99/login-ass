import Icon from "../icon/icon"
import { CheckBoxWrapper, Title } from "./checkboxStyle"

const Checkbox = ({ title, checked, onClick }) => {
    return (
        <CheckBoxWrapper onClick={onClick}>
            {
                checked ?
                    <Icon name="checked" width="15px" height="15px" fillColor="#4aba6a" /> :
                    <Icon name="uncheck" width="15px" height="15px" fillColor="#ccc" />
            }

            <Title>{title}</Title>
        </CheckBoxWrapper>
    )
}

export default Checkbox