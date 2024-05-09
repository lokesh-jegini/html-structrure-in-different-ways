
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
 
  const [data, setData] = useState([]);
  const [totalpagenumbers ,setTotalpagenumbers]=useState()
  let [pagenumbers , setpageNumbers]=useState(1)
  let [pagelimit ,setPagelimit]=useState(5)
  const [currentPageData, setCurrentPageData] = useState([]);
 
 
  
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
  }, [data]);

    
  // Update total page numbers when data changes
  useEffect(() => {
    if (data && data.length > 0) {
      debugger
      setTotalpagenumbers( Math.ceil(data.length / pagelimit));
    }
   
  }, []); 
  useEffect(() => {
    pageslice(pagenumbers, pagelimit);
  }, [data,pagenumbers]);
 
 
  const pageslice = (pageNum, pageLimit) => {
    const startIndex = (pageNum - 1) * pageLimit;
    const endIndex = pageNum * pageLimit;
    const slicedData = data.slice(startIndex, endIndex);
    setCurrentPageData(slicedData);

  };
  
  return (
    <>
    <div className="App">
     <h1>Posts</h1>
      <ul>
        {currentPageData.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
    {
      Array.from({length:totalpagenumbers},(_,index)=>{
       return <button onClick={(e)=>{
        setpageNumbers(index+1)
       }} value={index+1}>{index+1}</button>
      })
    }
  
    </>
  );
}



export default App;
