import React, { Component } from 'react';
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'
import moment from 'moment'
import DatePicker from 'react-date-picker'
import M from 'materialize-css'; 

class Reports extends Component{
    state={
        date: new Date(),
        name: 'Blue Circle',
        book: ''
    }
    componentDidMount() {
        M.AutoInit();
        let elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {inDuration: 300, outDuration: 225});
    }
    handleChange=(date)=> {
        this.setState({
            date: date,
        });
    }
    handleClick=(e)=> {
        e.preventDefault();
        this.setState({
            book: 'Your Appointment has been booked'
        });
    }
    render(){
        
        const { tests, auth }=this.props;
        if(!auth.uid)
            return<Redirect to='/signin'/>    
        return(
            <div className="dashboard container">
                <div className="row">
                <div className="col s12 m11">
                        <div className="section">
                            <div className="card z-depth-0">
                                <div className="card-content">
                                    <span className="card-title">Book an Appointment</span>
                                    <select defaultValue={this.state.name}>
                                        <option value="Blue Circle">Blue Circle(Mrs. Jyoti Bernard 10:00AM-7:00PM)</option>
                                        <option value="Max Hospital">Max Hospital(Mr. Arvind Nada 1:00PM-2:00PM)</option>
                                        <option value="Kailash Hospital">Kailash Hospital(Mr. Peter Rogers 4:00PM-5:00PM)</option>
                                    </select>  
                                    <br/>                                  
                                    <DatePicker
                                        onChange={this.handleChange}
                                        value={this.state.date}
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                        timeIntervals={15}
                                        dateFormat="MMMM d, yyyy h:mm aa"
                                        timeCaption="time"
                                    /> 
                                    <div className="input-field">
                                        <button className="btn pink lighten-1 z-depth-0" onClick={this.handleClick}>Book</button>  
                                    </div> 
                                    <div className="blue-text center">
                                        {this.state.book ? <p> {this.state.book} </p> : null}
                                    </div>
                                </div>
                            </div>
                        </div>                    
                    </div>
                    <div className="col s12 m7">
                    <div className="project-list section">
                        {tests && tests.map(test=>{
                        if(auth.uid===test.authorId)return(
                            <div class="card">
                                <div class="card-content">
                                <span class="card-title">{test.testName}</span>
                                <p>Diagnosis : {test.diagnosis}</p>
                                <p>Score : {test.score}</p>
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