import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {Link} from 'react-router-dom'

export class NewTest extends Component {
  render() {
    const { auth }=this.props;
        if(!auth.uid)
            return<Redirect to='/signin'/>    
    return (
      <div class="container">
        <div class="col s12 m6 centre">
          <div class="card">
            <div class="card-content">
              <span class="card-title">Depression</span>
              <p>Depression is a mood disorder characterized by persistently low mood and a feeling of sadness and loss of interest. It is a persistent problem, not a passing one, lasting on average 6 to 8 months.</p>
            </div>
            <div class="card-action grey lighten-4 grey-text">
              <Link to={'/test/depression'}>
                Depression Test
              </Link>
            </div>
          </div>
          <div class="card">
            <div class="card-content">
              <span class="card-title">Anxiety</span>
              <p>When an individual faces potentially harmful or worrying triggers, feelings of anxiety are not only normal but necessary for survival.</p>
            </div>
            <div class="card-action grey lighten-4 grey-text">
              <Link to={'/test/anxiety'}>
                Anxiety Test
              </Link>
            </div>
          </div>
          <div class="card">
            <div class="card-content">
              <span class="card-title">Bipolar Disorder</span>
              <p>Bipolar disorder, formerly called manic depression, is a mental health condition that causes extreme mood swings that include emotional highs (mania or hypomania) and lows (depression).</p>
            </div>
            <div class="card-action grey lighten-4 grey-text">
              <Link to={'/test/anxiety'}>
                Bipolar Disorder Test
              </Link>
            </div>
          </div>
          <div class="card">
            <div class="card-content">
              <span class="card-title">Post-traumatic stress disorder:PTSD</span>
              <p>Post-traumatic stress disorder (PTSD) is brought on by witnessing a terrifying, usually life-threatening, event. Severe anxiety, flashbacks, uncontrollable thoughts and nightmares are common symptoms of the illness.</p>
            </div>
            <div class="card-action grey lighten-4 grey-text">
              <Link to={'/test/anxiety'}>
                PTSD Test
              </Link>
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
      auth: state.firebase.auth

  }
}

export default connect(mapStateToProps,null)(NewTest)
