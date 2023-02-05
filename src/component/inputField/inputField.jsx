import Icon from "../icon/icon"
import { IconWrapper, InputForm, InputStyle, InputWrapper, Title } from "./inpuFieldStyle"

const InputField = ({
    placeholder,
    title,
    iconProp,
    onClickIcon,
    ...rest
}) => {
    return (
        <InputWrapper>
            {title && <Title>{title}</Title>}
            <InputForm>
                <InputStyle placeholder={placeholder} {...rest} />
                {iconProp?.name && (
                    <IconWrapper>
                        <Icon
                            onClick={onClickIcon}
                            name={iconProp?.name}
                            fillColor={iconProp?.fillColor}
                            strokeColor={iconProp?.strokeColor}
                            width={iconProp?.width}
                            height={iconProp?.height}
                        />
                    </IconWrapper>
                )}
            </InputForm>
        </InputWrapper>
    )
}

export default InputField