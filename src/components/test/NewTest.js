import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createProject} from '../../store/actions/projectActions'
import {Redirect} from 'react-router-dom'

export class CreateProject extends Component {
    state={
      score:'4',
      test: 'ptsd'
    }
  handleChange=(e)=>{
    this.setState({
       score: (parseInt)(this.state.score) + (parseInt)(e.target.value) 
      });
  }  
  handleSubmit=(e)=>{
    e.preventDefault();
    console.log(this.state.score)
    this.props.history.push('/test')
  }  
  
  render() {
    const { auth }=this.props;
        if(!auth.uid)
            return<Redirect to='/signin'/>    
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
            <div>
              <h6>What is your favorite colour?</h6>
              <label>
                <input value="1" type="radio" onChange={this.handleChange}/>
                <span>Red</span>
              </label>
            </div>
            <div>
              <label>
                <input value="1" type="radio" onChange={this.handleChange} />
                <span>Yellow</span>
              </label>
            </div>
            <div className="input-field">
              <button className="btn yellow lighten-1 z-depth-2 blue-text text-darken-2">Submit</button>  
            </div>
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

const mapDispatchTOProps=(dispatch)=>{
  return{
    createProject:(project)=>dispatch(createProject(project))
  }
}

export default connect(mapStateToProps,mapDispatchTOProps)(CreateProject)
