import React from 'react';
import SearchInput, {createFilter} from 'react-search-input'
import searcch from './covidLogo/searchIcon.png'

import logo from './covidLogo/covidLogo.png'

function HeaderStatistic({ searchUpdated }) {
   return(
      
      <div className={'row logo__container'}>
         <div className={'row logo__wraper'}>
            <div  >
               <img src={logo} className ={'logo'}></img>
            </div>
            <div>
               <h1 className={'logo__text'}>STATISTIC</h1>
            </div>
         </div>

         <div className={'search__wraper'}>
         <SearchInput className={'search'} placeholder = {'Search...'} onChange={searchUpdated} />
            <div>
               <img src={searcch}></img>
            </div>
         </div>
      </div>
   )
}
export default HeaderStatistic;