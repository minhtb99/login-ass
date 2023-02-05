import { LinkWrapper } from "./hrefLinkStyle"

const HrefLink = ({ text, ...rest }) => {
    return (
        <LinkWrapper {...rest}>
            {text}
        </LinkWrapper>
    )
}

export default HrefLink