import { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";



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
              <AboutUs />
           
        
        </>
    )
}

export default Home;