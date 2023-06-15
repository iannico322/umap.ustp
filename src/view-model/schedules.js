import { useEffect, useState } from 'react'
import axios from './../plugins/axios'



const GetSchedules = () => {
    

    const [schedules,setSchedules] = useState([])


   
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`schedules/user/${localStorage.getItem("id")}`,{
              headers: {
                Authorization: `Token ${localStorage.getItem("access")} `,
              },
            });

              setSchedules(response.data)

            
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, []);
    

    return schedules
  }

export default GetSchedules;
