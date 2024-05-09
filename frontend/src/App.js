
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
 
  const [data, setData] = useState([]);
  const [totalpagenumbers ,setTotalpagenumbers]=useState()
  let [pagenumbers , setpageNumbers]=useState(1)
  let [pagelimit ,setPagelimit]=useState(5)
 
  
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(response.data);
       
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
    debugger
  }, []);

    
//   // Update total page numbers when data changes
//   useEffect(() => {
//     if (data && data.length > 0) {
//       setTotalpagenumbers( Math.ceil(data.length / pagelimit));
//     }
   
//   }, []); 
 

// //pageslice function (for loops or condior start and end point is mandatory)
let pageslice=()=>{
    debugger
    let slicedata=[]
    debugger
    for(let i=(pagenumbers-1)*pagelimit;i<pagenumbers*pagelimit;i++) {
      slicedata.push(data[i])
    }
     setData(slicedata)
     console.log(slicedata)
  }
  useEffect(() => {
    pageslice(pagenumbers,pagelimit)
   
  }, [data]); 
  
  return (
    <>
    <div className="App">
     <h1>Posts</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
    {
      Array.from({length:totalpagenumbers},(_,index)=>{
       return <button onClick={(e)=>{
       console.log(e)
       }} value={index+1}>{index+1}</button>
      })
    }
  
    </>
  );
}



export default App;
//  on the page slice i am getting empty data array but already i update the data from the first useeffect