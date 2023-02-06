import Icon from "../../component/icon/icon"
import { Container, HomeComtainer, UserInfo } from "./homeStyle"

const Home = () => {
    const name = localStorage.getItem("name")
    return (
        <Container>
            <HomeComtainer>
                <Icon
                    name="tick"
                    width="24px"
                    height="24px"
                    fillColor="#4aba6a"
                />
                <UserInfo>
                    {name && `Welcome ${name}, you have logged in successfully`}
                </UserInfo>
            </HomeComtainer>
        </Container>
    )
}

export default Home