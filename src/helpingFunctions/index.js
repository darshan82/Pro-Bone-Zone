import axios from "axios"

export const setBaseUrl = ()=>{
    axios.defaults.baseURL = import.meta.env.VITE_API_URL || "https://probonozone-cea5b843ff95.herokuapp.com"

}

export const setAuthToken = (token) =>
{
	if (token)
	{	
		axios.defaults.headers.common["Authorization"] = token
	} else
	{
		// Delete auth header
		delete axios.defaults.headers.common["Authorization"]
	}
}