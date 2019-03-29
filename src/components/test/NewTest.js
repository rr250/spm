import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {createTest} from '../../store/actions/testActions'

export class NewTest extends Component {
    state={
      score:'0',
      testName: 'ptsd',
      diagnosis:''
    }
  handleChange=(e)=>{
    this.setState({
       score: (parseInt)(this.state.score) + (parseInt)(e.target.value) 
      });
  }  
  handleSubmit=(e)=>{
    e.preventDefault();
    this.props.createTest(this.state)
    this.props.history.push('/')
  }  
  
  render() {
    const { auth }=this.props;
        if(!auth.uid)
            return<Redirect to='/signin'/>    
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
            <p>
              <h6>What is your favorite colour?</h6>
              <label>
                <input value="1" name="1" type="radio" onChange={this.handleChange}/>
                <span>Red</span>
              </label>
            </p>
            <p>
              <label>
                <input value="1" name="1" type="radio" onChange={this.handleChange} />
                <span>Yellow</span>
              </label>
            </p>
            <p className="input-field">
              <button className="btn yellow lighten-1 z-depth-2 blue-text text-darken-2">Submit</button>  
            </p>
        </form>  
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  console.log(state);
  return{
      auth: state.firebase.auth

  }
}

const mapDispatchToProps=(dispatch)=>{
  return{    
    createTest:(test)=>dispatch(createTest(test))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewTest)
