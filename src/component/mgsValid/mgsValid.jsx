import Icon from "../icon/icon"
import { MgsContent, MgsValidWrapper } from "./mgsValidStyle"

const MgsValid = ({ text, color = "#f33030" }) => {
    return (
        <MgsValidWrapper>
            <Icon name="caution" width="14px" height="14px" fillColor={color} />
            {text && <MgsContent color={color} >{text}</MgsContent>}
        </MgsValidWrapper>
    )
}

export default MgsValid