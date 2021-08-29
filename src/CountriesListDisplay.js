import React, { useState } from 'react';
import CountriesList from './СountriesList';
import dead from './covidLogo/deadIcon.png';
import heart from './covidLogo/HeartIcon.png';
import recover from './covidLogo/recoverIcon.png';

const isActive = (sample, tested) => (sample && (sample['Country'] === tested['Country']))

function CountriesListDisplay({ examples }) { 
   const [active, setActive]  = useState(null)

   const clickHandler = (selectedItem) => {
      setActive(selectedItem);
   }

   const clearHandler= ()=>{
      setActive(null);
   }

   return(
      <React.Fragment>
       <div className ='table__body'>

            <div className={'row  table__row table__header ' }>
               <div  className={'cell number'}>№</div>
               <div className={'separtor__alt'}></div>
               <div  className={'cell country'}>Country</div>
               <div className={'separtor__alt'}></div>
               <div  className={'cell counter'}>Total Confirmed</div>
            </div>

      <div className={'table__body'}>
         {!!examples && examples.map((e, index) => <CountriesList onClick={clickHandler} number={index + 1} active={isActive(active, e)} key = {e.Country}  example = {e} />)}
      </div>
          {!examples && 
            <div>
               <div colSpan={3}>Загрузочка...</div>
            </div>
         }
       </div>
      {active && <div onClick={clearHandler} 
                     className={'popup__wraper'}>
                     <div className={'popup'}>
                        <div >
                           <div className={'popup__name'}>
                              <span>
                                 {active.Country}
                              </span>
                           </div>
                        </div>
                        <div className={'row popup__row'}>
                           <div className={'img'}>
                              <img src={heart}></img>
                           </div>
                           <div className={'popup__text'}>
                              <span>TotalConfirmed</span> 
                              <span>
                                 {active.TotalConfirmed}
                              </span>
                           </div>
                        </div>
                        <div className={'row popup__row'}>
                           <div className={'img'}>
                              <img src={dead}></img>
                           </div>
                           <div className={'popup__text'}>
                              <span>TotalDeaths</span>
                               <span>{active.TotalDeaths}</span>
                           </div>
                        </div>
                        <div className={'row popup__row'}>
                           <div className={'img'}>
                              <img src={recover}></img>
                           </div>
                           <div className={'popup__text'}>
                              <span>TotalRecovered</span> 
                              <span>{active.TotalRecovered}</span>
                           </div>
                        </div>
                        <div className={'button__wraper'}>
                           <div className={'button'}>
                              OK
                           </div>
                        </div>
                     </div>
      </div>}
      </React.Fragment>
   )

}

export default CountriesListDisplay;