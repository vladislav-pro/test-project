import React, {Component} from 'react';

class  CountriesList extends Component { 
   render() {
      const {example, number, onClick, active} = this.props;
      const clickHandler = onClick && (()=>{
         onClick(example);
      });
      return(
         <div style={{cursor:"pointer"}} className={'table__row row'} onClick={clickHandler}>
               <div className={'cell number'}>{number}</div>
               <div className={'separtor'}></div>
               <div  className={'cell country'}>{active?<b>[active] </b> : ""}{example['Country']}</div>
               <div className={'separtor'}></div>
               <div  className={'cell counter'}>{example['TotalConfirmed']}</div>
         </div>
      )
   }
}
export default CountriesList;