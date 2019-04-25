import React, { Component } from 'react';
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
import moment from 'moment'

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
                                <div className="grey-text note-date">
                                    {moment(test.createdAt.toDate()).format('MMMM Do YYYY, h:mm a')}
                                </div>
                                </div>
                            </div>
                        )
                        })}         
                    </div>
                    </div>
                    <div className="col s12 m3 offset-m1">
                        <div className="section">
                            <div className="card z-depth-0">
                                <div className="card-content">
                                    <span className="card-title">Other Remedies</span>                                    
                                    <ul className="links">
                                        <li><a href="https://www.siddhayoga.org.in">Yoga at Home</a></li>
                                        <li><a href="http://www.freemeditation.com/online-meditation/music-therapy-for-meditation/">Online Meditation</a></li>
                                        <li><a href="https://www.online-therapy.com/blog/doodle/">Doodle therapy</a></li>
                                    </ul>    
                                </div>
                            </div>
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