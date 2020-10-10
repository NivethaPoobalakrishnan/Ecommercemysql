import * as actionTypes from './actionTypes';
import axios from 'axios';

export const initProduct = () => {
    return dispatch => {
        axios.get( "http://localhost:5000/items", )
            .then( response => {
               dispatch(fetchItems(response.data));
            } )
            .catch( error => {
               console.log(error);
            } );
    };
};

export const fetchItems = (items) => {
    return{
        type:actionTypes.FETCH_ITEMS,
        items:items
    }
}