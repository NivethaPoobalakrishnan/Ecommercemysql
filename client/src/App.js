import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import { connect } from 'react-redux';
import * as actions from './store/index';

class App extends Component {
state={
  items:[]
}
componentDidMount(){
  this.props.initProduct();
 /* axios.get( "http://localhost:5000/items", )
  .then( response => {
 this.setState({items:response.data})
  } )
  .catch( error => {
     console.log(error);
  } );*/
}


  render() {
    console.log(this.props.items)
    const itemlist = this.props.items.map(item=>{
      return(
        
        <div key={item.id} className="items" >
      <img src={`../images/${item.img}.jpg`} alt={item.title} width="300"/>
      <p>{item.title}</p>
    <p>{item.descr}</p>
      <p><b>Price: {item.price}$</b></p>
      </div>
      )
  })
    return (
      <div className="main">
      <div className="itemcontainer" >
        {itemlist}
        </div>
      </div>

    );
  }
}

const mapStateToProps = state => {
  return {
items:state.items
  };
}

const mapDispatchToProps = dispatch => {
  return {
      initProduct: () => dispatch(actions.initProduct()),
}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


