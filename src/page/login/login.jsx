import { useCallback, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { authen } from "../../apis/service"
import Button from "../../component/button/button"
import Checkbox from "../../component/checkbox/checkbox"
import HrefLink from "../../component/hrefLink/hreftLink"
import InputField from "../../component/inputField/inputField"
import Loading from "../../component/loading/loading"
import MgsValid from "../../component/mgsValid/mgsValid"
import { validInput } from "../../helper/validInput"
import { Heading, InputForm, LoginContainer, LoginContent, MgsError, MgsLoginErr, RememberAccountWrapper, SignUpContent } from "./loginStyle"

const CONSTANT = {
    color: {
        showPass: "#4aba6a",
        hidePass: "#ccc"
    }
}

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [showPass, setShowPass] = useState(false)
    const [isRememberPass, setIsRememberPass] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();

    const [mgsError, setMgsError] = useState({
        username: '',
        password: ''
    })

    const [mgsAccountNotMatch, setMgsAccountNotMatch] = useState("")

    const onChangeUsername = (e) => {
        const value = e.target.value
        setUsername(value)
        const { isValid, mgsErrorText } = validInput(value, true)

        if (!isValid) {
            const error = { ...mgsError, username: mgsErrorText }
            setMgsError(error)
        } else {
            const error = { ...mgsError, username: "" }
            setMgsError(error)
        }
    }

    const onBlurUserName = (e) => {
        const value = e.target.value

        const { isValid, mgsErrorText } = validInput(value, true)

        if (!isValid) {
            const error = { ...mgsError, username: mgsErrorText }
            setMgsError(error)
        } else {
            const error = { ...mgsError, username: "" }
            setMgsError(error)
        }
    }

    const onChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)

        const { isValid, mgsErrorText } = validInput(value, true)

        if (!isValid) {
            const error = { ...mgsError, password: mgsErrorText }
            setMgsError(error)
        } else {
            const error = { ...mgsError, password: "" }
            setMgsError(error)
        }
    }

    const onBlurPassword = (e) => {
        const value = e.target.value

        const { isValid, mgsErrorText } = validInput(value, true)

        if (!isValid) {
            const error = { ...mgsError, password: mgsErrorText }
            setMgsError(error)
        } else {
            const error = { ...mgsError, password: "" }
            setMgsError(error)
        }
    }

    const onClickEye = () => {
        setShowPass(!showPass)
    }

    const onClickRemember = () => {
        setIsRememberPass(!isRememberPass)
    }

    const isDisableLogin = useMemo(() => {
        if (!mgsError.username && !mgsError.password) {
            return false
        }
        return true
    }, [mgsError])

    const submit = useCallback(async () => {
        const user = { username, password }
        setIsLoading(true)
        const res = await authen(user)
        if (res !== undefined) {
            setIsLoading(false)
            if (res?.accessToken) {
                localStorage.setItem("token", res?.accessToken)
                localStorage.setItem("name", res?.name)
                setMgsAccountNotMatch("");
                navigate("/home")
            } else {
                setMgsAccountNotMatch("Account information incorrect")
            }
        }
    }, [username, password, navigate])


    return (
        <LoginContainer>
            <LoginContent>
                <Heading>Login</Heading>
                <SignUpContent>Do not have an account? &nbsp; <HrefLink text="Sign up here" /></SignUpContent>
                <InputForm>
                    <InputField
                        title="Email"
                        placeholder="email@example.com"
                        value={username}
                        onChange={onChangeUsername}
                        onBlur={onBlurUserName}
                    />
                    {mgsError.username && (
                        <MgsError>
                            <MgsValid text="Required" />
                        </MgsError>
                    )}
                </InputForm>
                <InputForm>
                    <InputField
                        title="Password"
                        placeholder="Enter your password"
                        type={showPass ? "text" : "password"}
                        value={password}
                        onChange={onChangePassword}
                        onBlur={onBlurPassword}
                        iconProp={{
                            name: "eye",
                            width: "20px",
                            height: "20px",
                            fillColor: showPass ? CONSTANT.color.showPass : CONSTANT.color.hidePass,
                        }}
                        onClickIcon={onClickEye}
                    />
                    {mgsError.password && (
                        <MgsError>
                            <MgsValid text="Required" />
                        </MgsError>
                    )}
                </InputForm>
                <RememberAccountWrapper>
                    <Checkbox title="Remember my account" checked={isRememberPass} onClick={onClickRemember} />
                    <HrefLink text="Forgot password?" />
                </RememberAccountWrapper>
                {mgsAccountNotMatch &&
                    <MgsLoginErr>
                        <MgsValid text={mgsAccountNotMatch} />
                    </MgsLoginErr>}
                {isLoading ? (<Loading text={"PROCESSING..."} />) : (
                    <Button
                        title="LOGIN"
                        onClick={submit}
                        disabled={isDisableLogin}
                    />
                )}
            </LoginContent>
        </LoginContainer>
    )
}

export default Login