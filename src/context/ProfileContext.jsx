import { useContext, useReducer } from "react";

// filepath: /home/ejike/Desktop/cbc-2026/projects/group B/homefinder-frontend/src/context/ProfileContext.jsx

export const ProfileContext = useContext(null)
export const ProfileDispatchContext = useContext(null)

function profileReducer(oldProfile, action) {
    switch (action.type) {
        case "set": {
            return {
                ...oldProfile, profile: action.payload
            }
        }
        case "clear": {
            return null
        }
        default: { }
    }
}

export default function ProfileProvider({ children }) {

    const [profile, dispatch] = useReducer(profileReducer, null)

    return (
        <ProfileContext value={profile}>
            <ProfileDispatchContext value={dispatch}>
                {children}
            </ProfileDispatchContext>
        </ProfileContext>
    )
}