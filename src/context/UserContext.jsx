import { createContext, useEffect, useState } from "react";
export const UserContext = createContext()

export const UserProvider = (props) =>
{
    const [user, setUser] = useState(null)
    const [loggedIn, setLoggedIn] = useState(false)
    const [token, setAuthToken] = useState(null)
    useEffect(() =>
    {

        const storedToken = localStorage.getItem("token")
        const storedUser = localStorage.getItem("user")

        if (storedToken && storedUser)
        {

            setAuthToken(storedToken)
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
        setAuthToken(null)
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        props?.navigate?.push("/login")
    }

    return (

        <UserContext.Provider value={{ user, login, logout, token, loggedIn }}>
            {props.children}
        </UserContext.Provider>
    )
}
