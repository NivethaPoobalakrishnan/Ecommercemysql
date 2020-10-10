/*import Item1 from '../../images/item1.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'
import Item4 from '../../images/item4.jpg'
import Item5 from '../../images/item5.jpg'*/


import * as actionTypes from '../actions/actionTypes';
const initState = {
    items: [],
    error: false,
   

}
const Productreducer= (state = initState,action)=>{
   
    switch ( action.type ) {
       
        case actionTypes.FETCH_ITEMS: 
        return {
            ...state,
          items:action.items
        
        }
        
        default: return state;
    }
};
    
    
   
export default Productreducer;