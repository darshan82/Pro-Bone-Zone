import axios from "axios"

export const setBaseUrl = ()=>{
    axios.defaults.baseURL = "https://probonozone-cea5b843ff95.herokuapp.com"
    // axios.defaults.baseURL = "http://localhost:3000"

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