import { useEffect, useState } from 'react'
import axios from './../plugins/axios'
import {addRoom,rooms} from '../cache/umapRoom'
import { useDispatch, useSelector } from 'react-redux'

const GetRooms = () => {
    const dispatch = useDispatch()
    const roomses = useSelector(rooms);

    const [roomss,setRooms] = useState([])


   
    useEffect(() => {
      if (!roomses.length) {
        const fetchData = async () => {
          try {
            const response = await axios.get('rooms/',{
                headers: {
                  Authorization: `Token ${localStorage.getItem("access")}`,
                },
              });

            dispatch(addRoom([response.data]))

            console.log(response.data)
            
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
    }
}, []);
    

    return roomss
  }

export default GetRooms;
