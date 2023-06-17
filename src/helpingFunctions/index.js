import axios from "axios"

export const setBaseUrl = ()=>{
    // axios.defaults.baseURL = "http://167.172.154.189:3000"
    axios.defaults.baseURL = "http://localhost:3000"

}


export const setAuthToken = (token) =>
{
	if (token)
	{
		// Apply to every request
		axios.defaults.headers.common["Authorization"] = token
	} else
	{
		// Delete auth header
		delete axios.defaults.headers.common["Authorization"]
	}
}