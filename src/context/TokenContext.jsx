import { useContext, useReducer } from "react";

export const TokenContext = useContext(null)
export const TokenDispatchContext = useContext(null)

function tokenReducer(oldToken, action) {
    switch (action.type) {
        case "loggedIn": {
            return {
                ...oldToken, token: action.payload
            }
        }
        case "loggedOut": {
            return {
                token: null
            }
        }
        default: { }
    }
}

export default function TokenProvider({ children }) {

    const [token, dispatch] = useReducer(tokenReducer, { token: null })

    return (
        <TokenContext value={token}>
            <TokenDispatchContext value={dispatch}>
                {children}
            </TokenDispatchContext>
        </TokenContext>
    )
}