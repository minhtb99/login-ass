import { ReactComponent as Tick } from '../../asset/icons/tick.svg';
import { ReactComponent as Eye } from '../../asset/icons/eye.svg';
import { ReactComponent as CheckboxChecked } from '../../asset/icons/checkbox-checked.svg';
import { ReactComponent as CheckBoxBlank } from '../../asset/icons/checkbox-blank.svg';
import { ReactComponent as CautionCircle } from '../../asset/icons/caution-circle.svg';
import { IconWrapper } from './iconStyle';

const Icon = ({ name, fillColor, strokeColor, width = "30px", height = "30px", onClick }) => {
    switch (name) {
        case "tick":
            return (
                <IconWrapper width={width} height={height}>
                    <Tick onClick={onClick} fill={fillColor} stroke={strokeColor} />
                </IconWrapper>
            )
        case "eye":
            return (
                <IconWrapper width={width} height={height}>
                    <Eye onClick={onClick} fill={fillColor} stroke={strokeColor} />
                </IconWrapper>
            )
        case "checked":
            return (
                <IconWrapper width={width} height={height}>
                    <CheckboxChecked onClick={onClick} fill={fillColor} stroke={strokeColor} />
                </IconWrapper>
            )
        case "uncheck":
            return (
                <IconWrapper width={width} height={height}>
                    <CheckBoxBlank onClick={onClick} fill={fillColor} stroke={strokeColor} />
                </IconWrapper>
            )
        case "caution":
            return (
                <IconWrapper width={width} height={height}>
                    <CautionCircle onClick={onClick} fill={fillColor} stroke={strokeColor} />
                </IconWrapper>
            )
        default:
            throw new Error("Please fill name of icon")
    }
}

export default Icon