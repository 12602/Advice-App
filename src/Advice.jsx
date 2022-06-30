import React, { Component } from 'react'
import axios from 'axios';

import './advice.css';
export class Advice extends Component {
    state={ advice:''};
    componentDidMount()
    {
        this.fetchAdvice();
      
    }
    fetchAdvice=()=>{
      console.log("clicked");
        axios.get("https://api.adviceslip.com/advice")
        .then((response)=>{
            const { advice }=response.data.slip;
                   
                this.setState({advice})
        })
        .catch((error)=>
        {

        });

    }
  render() {
    const {advice}=this.state;
    return (
      <div className='section'>
          <div className="container">
            <div className="cards">
            <h1 className='h1 '>{advice}</h1>
        <button className='btn bg-primary rounded text-center text-white pt-2 pb-4' onClick={this.fetchAdvice}>Get Advice</button>
              </div>
              </div>
      </div>
    )
  }
}

export default Advice;