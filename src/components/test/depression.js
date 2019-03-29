import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {createTest} from '../../store/actions/testActions'

export class Depression extends Component {
    state={
      score:'0',
      testName: 'depression',
      diagnosis:'Emergency!! You should really consult a Psychiatrist'
    }
  handleChange=(e)=>{
    this.setState({
       score: (parseInt)(this.state.score) + (parseInt)(e.target.value) 
      });
  }  
  handleSubmit=(e)=>{
    e.preventDefault();
    this.setState({
      diagnosis: 'Nothing to Worry'
    });
    if(this.state.score<=10){
      this.setState({
        diagnosis: 'Nothing to Worry' 
      });
    }
    else if(this.state.score<=20){
      this.setState({
        diagnosis: 'Consult a Psychiatrist but probably its nothing' 
      });
    }
    else{
      this.setState({
        diagnosis: 'Emergency!! You should really consult a Psychiatrist'
      });
    }
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
              <h6>1. Thoughts that you would be better off dead or of hurting yourself?</h6>
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
              <h6>2. Little interest or pleasure in doing things?</h6>
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
              <h6>3. Trouble falling or staying asleep or sleeping too much?</h6>
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
              <h6>4. Feeling tired or having little energy?</h6>
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
              <h6>5. Poor appetite or overeating?</h6>
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
              <h6>6. Feeling bad about yourself- or that you are failure or have let yourself or your family down?</h6>
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
              <h6>7. Trouble concentrating on things, such as reading the newspaper or watching television?</h6>
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
            
            <br></br>


            <p>
              <h6>8. Moving or speaking so slowly that other people could have noticed?</h6>
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
            <br></br>


            <p>
              <h6>9. Thoughts that you would be better off dead or of hurting yourself?</h6>
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
            <br></br>

            <p>
              <h6>10. If you checked off any problems, how difficult have these problems made it for you at work, home or with other people?</h6>
              <label>
                <input value="0" name="10" type="radio" onChange={this.handleChange}/>
                <span>Not difficult at all</span>
              </label>
            </p>
            <p>
              <label>
                <input value="1" name="10" type="radio" onChange={this.handleChange} />
                <span>Somewhat difficult</span>
              </label>
            </p>
            <p>
              <label>
                <input value="2" name="10" type="radio" onChange={this.handleChange} />
                <span>Very difficult</span>
              </label>
            </p>
            <p>
              <label>
                <input value="3" name="10" type="radio" onChange={this.handleChange} />
                <span>Extremely difficult</span>
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

export default connect(mapStateToProps,mapDispatchToProps)(Depression)
