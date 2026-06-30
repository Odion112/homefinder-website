import { createContext, useReducer } from "react";

export const ProfileContext = createContext(null)
export const ProfileDispatchContext = createContext(null)

function profileReducer(oldProfile, action) {
    switch (action.type) {
        case "set": {
            return {
                ...oldProfile, profile: action.payload
            }
        }
        case "clear": {
            return {}
        }
        default: { }
    }
}

export default function ProfileProvider({ children }) {

    const [profile, dispatch] = useReducer(profileReducer, {})

    return (
        <ProfileContext.Provider value={profile}>
            <ProfileDispatchContext.Provider value={dispatch}>
                {children}
            </ProfileDispatchContext.Provider>
        </ProfileContext.Provider>
    )
}