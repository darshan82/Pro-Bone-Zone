import { createContext, useEffect, useState } from "react";
import { setAuthToken } from "../helpingFunctions";
export const UserContext = createContext()

export const UserProvider = (props) =>
{
    const [user, setUser] = useState(null)
    const [loggedIn, setLoggedIn] = useState(false)
    useEffect(() =>
    {

        const storedToken = localStorage.getItem("token")
        const storedUser = localStorage.getItem("user")

        if (storedToken && storedUser)
        {

            setUser(JSON.parse(storedUser))
            setLoggedIn(true)
        }

    }, [])

    const login = (user, token) =>
    {

        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))

        setUser(user)
        setAuthToken(token)
        setLoggedIn(true)
    }

    const logout = () =>
    {
        setUser(null)
        setLoggedIn(false)
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        props?.navigate?.push("/login")
    }

    return (

        <UserContext.Provider value={{ user, login, logout,  loggedIn }}>
            {props.children}
        </UserContext.Provider>
    )
}
