import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {BASE_URL} from "../../src/config";
import {BASE_URL_FRONTEND} from "../../src/config";
class UserSignUp extends Component{
  state = {
    isBoxVisible:false,
    scrollPosition:0,
    statsRef:React.createRef(),
    fullname: "",
    username: "",
    password: ""
  };

  setForm(e)
  {
    const {name, value} = e.target;
    this.setState({
        [name] : value
    });
  }
  signupUser = (e) =>  { 
      e.preventDefault();
      fetch(BASE_URL+'/users', {
        method:'post',
        headers:{'Content-Type' : 'application/json'},
        body:JSON.stringify({
          fullname:this.state.fullname,
          username:this.state.username,
          password: this.state.password 
        })
      })
      .then(response=> response.json())
      .then(response=>{
        alert("Thank you for signing up!");
        window.location.href = BASE_URL_FRONTEND+"/my-account";
      })
      .catch(err=> alert(err))
  }

startExploring = () => {
  this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }));
  this.props.history.push('/dashboard');
  };
    render(){
        return(
            <div>
              <main>
                <Link to={'/my-account'}>Sign In</Link>
                <form method="post" className="signup-form" onSubmit={e=>this.signupUser(e)}>
                <h2>Sign-up to begin your AIP journey!</h2>
                <label htmlFor="first-name">Full Name</label>
                <input placeholder='Full Name' type="text" name='fullname' id='fullname' 
                onChange={e=>this.setForm(e)}/>               
                <label htmlFor="last-name">UserName</label>
                <input placeholder="UserName" type='text' name='username' id='username' 
                 onChange={e=>this.setForm(e)} />                
                <label htmlFor="password">Password</label>
                <input placeholder="*******" type="password" name='password' id='password' 
                 onChange={e=>this.setForm(e)}/>
                <button type="submit">Sign Up</button>                
                </form>
              
              </main>
            </div>

        )
    }
}
export default UserSignUp;