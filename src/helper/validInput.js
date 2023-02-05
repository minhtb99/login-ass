export const validInput = (value, required, regx) => {
    if (required) {
        if (value === "") {
            return {
                isValid: false,
                mgsErrorText: "Required"
            }
        }
    } else if (regx) {
        //coming soon
    }
    return { isValid: true, mgsErrorText: '' }
}