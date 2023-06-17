import { createContext, useEffect, useState } from "react";

export const EventContext = createContext()

export const EventProvider = (props) => {
    const [event, setEvent] = useState(null)
 
    useEffect(() => {

     const data = JSON.parse(localStorage.getItem("event"))
        setEvent(data)
     } , [])

   const updateEvent = (data) =>{
    if(data){
        localStorage.setItem("event" , JSON.stringify(data))
        setEvent(data)
    }       
    else{
        return
    }    
   }

    return (

        <EventContext.Provider value={{ event , updateEvent}}>
            {props.children}
        </EventContext.Provider>
    )
}
