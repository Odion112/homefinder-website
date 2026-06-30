import { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import { TokenContext } from "../context/TokenContext";
import { getProfile } from "../utils/fn";

function Home() {

    const token = useContext(TokenContext)
    console.log(token)


    useEffect(() => {

        async function call() {
            const response = await getProfile(token.token)
            console.log(response)
        }

        console.log("Mounted")

        if (token && token.token) {
            call()
        }

    }, [token])

    return (
        <>
            <Navbar />


        </>
    )
}

export default Home;