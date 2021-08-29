import React, { useState, useEffect} from 'react';
import HeaderStatistic from './Header';
import CountriesListDisplay from './CountriesListDisplay'
import  {createFilter} from 'react-search-input'
import './style.css'

const KEYS_TO_FILTERS = ['Country']

function App() {
  const [ serverData, setServerData ]  = useState(null)
  const [search, setSearch] = useState('')
  useEffect(()=>{
      fetch("https://api.covid19api.com/summary")
         .then(res => res.json())
         .then((data) => {
            setServerData(data)
         })

  },[])
  const filteredData = serverData ?  serverData.Countries.filter(createFilter(search, KEYS_TO_FILTERS)) : null;
  const data = search ? filteredData : (serverData ? serverData.Countries : null)
  return (
    <div>
      
      <div>
          <HeaderStatistic searchUpdated = {setSearch}/>
       </div>
      <div className={'row'}>
         <CountriesListDisplay examples = {data} />
         
      </div>
       
    </div>
  );
}

export default App;
