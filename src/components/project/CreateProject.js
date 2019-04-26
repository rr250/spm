import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createProject, anonCreateProject} from '../../store/actions/projectActions'
import {Redirect} from 'react-router-dom'

export class CreateProject extends Component {
    state={
      title:'',
      content:''
    }

    isFormValid = () => {
      let error;
      if (this.isFormEmpty(this.state)) {
          error = 'Fill in all fields';
          this.setState({ errors: error.toString() });
          return false;
      } else {
          return true;
      }
  }

  isFormEmpty = ({ title, content }) => {
      return !title.length || !content.length;
  }  

  displayErrors = (errors) => {
    console.log(errors)
     return(<p>{errors}</p>)
    };

  handleChange=(e)=>{
    this.setState({
      [e.target.id]: e.target.value
    });
  }  
  handleSubmit=(e)=>{
    e.preventDefault();
    if(this.isFormValid()) {
      this.setState({ errors: [], loading: true });
    console.log(this.state)
    this.props.createProject(this.state)
    this.props.history.push('/')
    }
  } 
  
  handleSubmitAnon=(e)=>{
    e.preventDefault();
    if(this.isFormValid()) {
      this.setState({ errors: [], loading: true });
    console.log(this.state)
    this.props.anonCreateProject(this.state)
    this.props.history.push('/')
    }
  } 
  
  render() {
    const { auth }=this.props;
        if(!auth.uid)
            return<Redirect to='/signin'/>    
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Create new post</h5>
            <div className="input-field">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" onChange={this.handleChange}/>  
            </div>
            <div className="input-field">
              <label htmlFor="content">Post Content</label>
              <textarea type="text" id="content" className="materialize-textarea" onChange={this.handleChange}/>  
            </div>
            <div className="input-field">
              <button className="btn yellow lighten-1 z-depth-2 blue-text text-darken-2">Create</button>  
              <button className="btn yellow lighten-1 z-depth-2 blue-text text-darken-2" onClick={this.handleSubmitAnon}>Create as Anonymous</button>
              <div className="red-text center">
                {this.errors!==[] && (
                  <span style={{'whiteSpace': 'pre-wrap'}}>{this.displayErrors(this.state.errors)}</span>
                )}
              </div>
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

const mapDispatchToProps=(dispatch)=>{
  return{
    createProject:(project)=>dispatch(createProject(project)),
    anonCreateProject:(project)=>dispatch(anonCreateProject(project))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateProject)
