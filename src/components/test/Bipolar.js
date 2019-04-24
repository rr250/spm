import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {createTest} from '../../store/actions/testActions'

export class Anxiety extends Component {
    state={
      score:'0',
      testName: 'anxiety',
      diagnosis:''
    }
  handleChange=(e)=>{
    var d;
    if(this.state.score<=10){
      d='Nothing to worry about that may refresh your mind'
    }
    else if(this.state.score<=20){
      d='Consult a Psychiatrist but probably its nothing'
    }
    else{
      d='Emergency!! You should really consult a Psychiatrist'
    }
    this.setState({
        score: (parseInt)(this.state.score) + (parseInt)(e.target.value),
        diagnosis:d
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
              <h6>1. Feel more confident and capable	</h6>
              <label>
                <input value="0" name="1" type="radio" onChange={this.handleChange}/>
                <span>Several days</span>
              </label>
            </p>
            <p>
              <label>
                <input value="1" name="1" type="radio" onChange={this.handleChange} />
                <span>Not at all</span>
              </label>
            </p>
            <p>
              <label>
                <input value="2" name="1" type="radio" onChange={this.handleChange} />
                <span>More than half the days</span>
              </label>
            </p>
            <p>
              <label>
                <input value="3" name="1" type="radio" onChange={this.handleChange} />
                <span>Nearly everyday</span>
              </label>
            </p>
            <br></br>
            

            <p>
              <h6>2. See things in a new and exciting light	</h6>
              <label>
                <input value="0" name="2" type="radio" onChange={this.handleChange}/>
                <span>Several days</span>
              </label>
            </p>
            <p>
              <label>
                <input value="1" name="2" type="radio" onChange={this.handleChange} />
                <span>Not at all</span>
              </label>
            </p>
            <p>
              <label>
                <input value="2" name="2" type="radio" onChange={this.handleChange} />
                <span>More than half the days</span>
              </label>
            </p>
            <p>
              <label>
                <input value="3" name="2" type="radio" onChange={this.handleChange} />
                <span>Nearly everyday</span>
              </label>
            </p>
            <br></br>      
            <p>
              <h6>3. Feel very creative with lots of ideas and plans?</h6>
              <label>
                <input value="0" name="3" type="radio" onChange={this.handleChange}/>
                <span>Several days</span>
              </label>
            </p>
            <p>
              <label>
                <input value="1" name="3" type="radio" onChange={this.handleChange} />
                <span>Not at all</span>
              </label>
            </p>
            <p>
              <label>
                <input value="2" name="3" type="radio" onChange={this.handleChange} />
                <span>More than half the days</span>
              </label>
            </p>
            <p>
              <label>
                <input value="3" name="3" type="radio" onChange={this.handleChange} />
                <span>Nearly everyday</span>
              </label>
            </p>
            
            <br></br>

            <p>
              <h6>4. Become over-involved in new plans and projects?</h6>
              <label>
                <input value="0" name="4" type="radio" onChange={this.handleChange}/>
                <span>Several days</span>
              </label>
            </p>
            <p>
              <label>
                <input value="1" name="4" type="radio" onChange={this.handleChange} />
                <span>Not at all</span>
              </label>
            </p>
            <p>
              <label>
                <input value="2" name="4" type="radio" onChange={this.handleChange} />
                <span>More than half the days</span>
              </label>
            </p>
            <p>
              <label>
                <input value="3" name="4" type="radio" onChange={this.handleChange} />
                <span>Nearly everyday</span>
              </label>
            </p>
          
            <br></br>

            <p>
              <h6>5. Become totally confident that everything you do will succeed	?</h6>
              <label>
                <input value="0" name="5" type="radio" onChange={this.handleChange}/>
                <span>Several days</span>
              </label>
            </p>
            <p>
              <label>
                <input value="1" name="5" type="radio" onChange={this.handleChange} />
                <span>Not at all</span>
              </label>
            </p>
            <p>
              <label>
                <input value="2" name="5" type="radio" onChange={this.handleChange} />
                <span>More than half the days</span>
              </label>
            </p>
            <p>
              <label>
                <input value="3" name="5" type="radio" onChange={this.handleChange} />
                <span>Nearly everyday</span>
              </label>
            </p>
           
            <br></br>

            <p>
              <h6>6. Feel that things are very vivid and crystal clear	?</h6>
              <label>
                <input value="0" name="6" type="radio" onChange={this.handleChange}/>
                <span>Several days</span>
              </label>
            </p>
            <p>
              <label>
                <input value="1" name="6" type="radio" onChange={this.handleChange} />
                <span>Not at all</span>
              </label>
            </p>
            <p>
              <label>
                <input value="2" name="6" type="radio" onChange={this.handleChange} />
                <span>More than half the days</span>
              </label>
            </p>
            <p>
              <label>
                <input value="3" name="6" type="radio" onChange={this.handleChange} />
                <span>Nearly everyday</span>
              </label>
            </p>
           
            <br></br>


            <p>
              <h6>7. Spend, or wish to spend, significant amounts of money?</h6>
              <label>
                <input value="0" name="7" type="radio" onChange={this.handleChange}/>
                <span>Several days</span>
              </label>
            </p>
            <p>
              <label>
                <input value="1" name="7" type="radio" onChange={this.handleChange} />
                <span>Not at all</span>
              </label>
            </p>
            <p>
              <label>
                <input value="2" name="7" type="radio" onChange={this.handleChange} />
                <span>More than half the days</span>
              </label>
            </p>
            <p>
              <label>
                <input value="3" name="7" type="radio" onChange={this.handleChange} />
                <span>Nearly everyday</span>
              </label>
            </p>
            
            <p>
              <h6>8. Notice lots of coincidences occurring?</h6>
              <label>
                <input value="0" name="8" type="radio" onChange={this.handleChange}/>
                <span>Several days</span>
              </label>
            </p>
            <p>
              <label>
                <input value="1" name="8" type="radio" onChange={this.handleChange} />
                <span>Not at all</span>
              </label>
            </p>
            <p>
              <label>
                <input value="2" name="8" type="radio" onChange={this.handleChange} />
                <span>More than half the days</span>
              </label>
            </p>
            <p>
              <label>
                <input value="3" name="8" type="radio" onChange={this.handleChange} />
                <span>Nearly everyday</span>
              </label>
            </p>
            

            <p>
              <h6>9. Note that your senses are heightened and your emotions intensified	?</h6>
              <label>
                <input value="0" name="9" type="radio" onChange={this.handleChange}/>
                <span>Several days</span>
              </label>
            </p>
            <p>
              <label>
                <input value="1" name="9" type="radio" onChange={this.handleChange} />
                <span>Not at all</span>
              </label>
            </p>
            <p>
              <label>
                <input value="2" name="9" type="radio" onChange={this.handleChange} />
                <span>More than half the days</span>
              </label>
            </p>
            <p>
              <label>
                <input value="3" name="9" type="radio" onChange={this.handleChange} />
                <span>Nearly everyday</span>
              </label>
            </p>
            

            <p>
              <h6>10. Work harder, being much more motivated?</h6>
              <label>
                <input value="0" name="10" type="radio" onChange={this.handleChange}/>
                <span>Several days</span>
              </label>
            </p>
            <p>
              <label>
                <input value="1" name="10" type="radio" onChange={this.handleChange} />
                <span>Not at all</span>
              </label>
            </p>
            <p>
              <label>
                <input value="2" name="10" type="radio" onChange={this.handleChange} />
                <span>More than half the days</span>
              </label>
            </p>
            <p>
              <label>
                <input value="3" name="10" type="radio" onChange={this.handleChange} />
                <span>Nearly everyday</span>
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

export default connect(mapStateToProps,mapDispatchToProps)(Anxiety)