import { useEffect, useState } from 'react'
import axios from './../plugins/axios'


const GetEvents = () => {
    

    const [events,setEvents] = useState([])


   
    useEffect(() => {

        const fetchData = async () => {
          try {
            const response = await axios.get('events/',{
                headers: {
                  Authorization: `Token ${localStorage.getItem("access")}`,
                },
              });

            setEvents(response.data)

            
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, []);
    

    return events
  }

export default GetEvents;
