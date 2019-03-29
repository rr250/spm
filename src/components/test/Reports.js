import React, { Component } from 'react';
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'

class Reports extends Component{
    render(){
        
        const { tests, auth }=this.props;
        if(!auth.uid)
            return<Redirect to='/signin'/>    
        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m7">
                    <div className="project-list section">
                        {tests && tests.map(test=>{
                        if(auth.uid===test.authorId)return(
                            <div class="card">
                                <div class="card-content">
                                <span class="card-title">{test.testName}</span>
                                <p>{test.diagnosis}</p>
                                </div>
                            </div>
                        )
                        })}         
                    </div>
                    </div>
                </div>
            </div>  
        )  
    }
}

const mapStateToProps=(state)=>{
    console.log(state);
    return{
        tests: state.firestore.ordered.tests,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection: 'tests',orderBy:['createdAt','desc']}])
)(Reports)