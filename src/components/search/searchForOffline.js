import React,{ useState} from 'react'
import Magnifying from './../../media/image/Magnifier.png'
import Ex from "../../media/image/x-icon.svg"
import {rooms} from "./rooms"
import axios from 'axios'
import "./search.css"
import {  useDispatch,useSelector  } from 'react-redux';
import { searchs,addSearch } from '../../cache/userSearch'

const displayTime = () => {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const amPm = hours >= 12 ? 'pm' : 'am';
  let hoursMod = hours % 12;
  if (hoursMod === 0) {
    hoursMod = 12;
  }
  const minutesMod = minutes < 10 ? `0${minutes}` : minutes;
  const timeString = `${hoursMod}:${minutesMod}${amPm}`;
  console.log(timeString)
  return timeString
}


 
// const SearchLog = (text)=>{
  
    
//     const url = 'http://localhost/umap-server/searchlog.php';
//     let fData = new FormData();
//     fData.append('searchtext', text);
//     fData.append('timestamp',displayTime());
//     fData.append('userid', "69");
//     axios.post(url, fData ).catch(()=>{console.log("We Are Proud OF You!")});

    
// }


export const SearchOffline = (props) => {
      const [expand,setexpand]= useState(false)
      const [show,setShow] = useState(false)
        
        const dispatch = useDispatch();
        const searches = useSelector(searchs);
        // const searchs = useSelector((state)=>state.search.value)

        const [query, setQuery] = useState(''); // state to hold the search query
        const [suggestions, setSuggestions] = useState([]); // state to hold the suggestions
        const [originalSearchTerm, setoriginalSearchTerm] = useState(''); // state to hold the temporary query when hovering over a suggestion
        const [icon,seticon ] = useState(Magnifying);
        const search = event => {
          const searchTerm = event.target.value;
        
          if (searchTerm === ""){
              setShow(false)
              
          }else{
              setShow(true)
          }
          
          setQuery(searchTerm.toLowerCase());
          setoriginalSearchTerm(searchTerm.toLowerCase()); // update the search query
          const suggestions = rooms.filter(word => word.roomName.toLowerCase().startsWith(query) ||word.roomName.toLowerCase().includes(query) ); // filter the words that match the query
          setSuggestions(suggestions.slice(0,10)); // update the suggestions state with the top 5 matching words
        };
      
        const selectSuggestion = suggestion => {
       
          setQuery(suggestion); // update the search query with the selected suggestion
          setSuggestions([]); // clear the suggestions
        };
      
        const handleHover = suggestion => {
            setQuery(suggestion); // update the temporary query with the hovered suggestion
        };
      
        const handleHoverOut = () => {
          dispatch(addSearch({
            "location":"",
            "buildingID":"",
            "room": "",
            "floor": "",
            "block": "",
          }))
            setQuery(originalSearchTerm); // clear the temporary query
        };

        


        return (
      
          <div  className="flex flex-col w-full h-full">
          <div  className="relative flex items-center justify-end w-full h-14 " >
          <input id='animationActived' type="text"  

            className={expand?' font-bold text-xl outline-none pl-5 placeholder:text-[#3131317b] pr-14 rounded-lg w-[40px] h-full text-[#422306]  bg-[#a9a9a93d] backdrop-blur-sm border-[1px] border-[#80808046] ':' font-bold text-xl outline-none pl-5 placeholder:text-[#3131317b] pr-14 rounded-lg w-[600px] h-full text-[#422306]  bg-[#a9a9a93d] backdrop-blur-sm border-[1px] border-[#80808046] '}
            placeholder="search something"
            value={query} onChange={search}/>
              
          <img src={icon} className='absolute flex  z-30 cursor-pointer object-contain h-[70%] pr-5  '  alt="" onClick={()=>{
        
              if(icon === Ex){
                setQuery("")
                seticon(Magnifying)
                dispatch(addSearch({
                  "location":"",
                  "buildingID":"",
                  "room": "",
                  "floor": "",
                  "block": "",
                }))
               
              }else{

                setexpand(!expand)
                
            
              }
              expand == false?setShow(false):setShow(true)
              
          }} />

          
          </div>

    
      <ul id='animatedUL' className={show?' scroll w-[600px]  mt-1 gap-2 min-h-[0px] max-h-[300px] bg-[#ffffff53] border-[1px] border-[#80808058] backdrop-blur-sm overflow-y-scroll rounded-md':'hidden'}>
        { suggestions == 0 ? <div className='flex items-center justify-center w-full h-12 ' >
            <h1 className=' text-[#484848] cursor-pointer border-[#80808058]'>No result found</h1>
        </div> :suggestions.map((suggestion,key) => (


<li
className='px-2 py-2 border-b-[1px] hover:bg-[#1aff004f] text-[#484848] cursor-pointer border-[#80808058] text-lg font-medium truncate '
key={key}
onClick={() => {selectSuggestion(suggestion.roomName)
  setShow(false)
  seticon(Ex)
  dispatch(addSearch({
    "location":"",
    "buildingID":`${suggestion.buildingNumber}`,
    "room": suggestion.roomName,
    "floor":`F ${suggestion.floorNumber}`,
    "block":`B ${suggestion.blockNumber}`,
  }))
 

  console.log(searches)
  }}
          onMouseOver={() => {handleHover(suggestion.roomName)
            dispatch(addSearch({
              "location":"",
              "buildingID":`${suggestion.buildingNumber}`,
              "room": suggestion.roomName,
              "floor":`F ${suggestion.floorNumber}`,
              "block":`B ${suggestion.blockNumber}`,
            }))
          
          }
          
          
          }
          onMouseOut={handleHoverOut}
          >
            {suggestion.roomName}
           
          </li>
        )
        )}
      </ul>
    
  
          </div>
  



  
)};





      

   
      
