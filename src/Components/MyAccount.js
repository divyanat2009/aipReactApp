import React, {Component} from 'react';
import Nav from './Nav';
import {BASE_URL} from "../../src/config";
import {BASE_URL_FRONTEND} from "../../src/config";
class MyAccount extends Component{
    state = {
        isBoxVisible:false,
        username: "",
        password: ""
    }
    BetaVersionPopUp=(e)=>{
        e.preventDefault();
        this.setState({ isBoxVisible: true });
    }
    closeWindow=()=>{
        this.setState({ isBoxVisible: false });
    } 
    setForm(e)
   {
    const {name, value} = e.target;    
    this.setState({
        [name] : value
    });
   }
    signIn = (e) =>  { 
        e.preventDefault();
        fetch(BASE_URL+'/users/checkuser/'+this.state.username, {
          method:'post',
          headers:{'Content-Type' : 'application/json'},
          body:JSON.stringify({
            password: this.state.password 
          })
        })
        .then(response=> response.json())
        .then(response=>{
            if(response) window.location.href = BASE_URL_FRONTEND+"/"+this.state.username+"/dashboard";
        })
        .catch(err=> alert(err))
    }   
    render(){      
        
        return(
          <div className="account-page">
            <Nav pageType={'interior'}/>
              <div className={`box beta-version-box ${this.state.isBoxVisible ? "" : "hidden"}`}>
              
              <button className="button" onClick={this.closeWindow}>Close</button>
              </div>             
                <form className="update-account-form" onSubmit={e=>this.signIn(e)}>
                    <h2>My Account</h2>                    
                    <p>Please enter your username and password to SignIn.</p>
                    
                    <div className="form-field-group">
                        <label htmlFor="username">UserName</label>
                        <input placeholder="user123" type="username" name='username' id='username' onChange={(e)=>this.setForm(e)} required/>
                    </div>
                    <div className="form-field-group">
                        <label htmlFor="password">Password</label>
                        <input placeholder="*******" type="password" name='password' id='password' onChange={(e)=>this.setForm(e)} required/>
                    </div>
                    <button type="submit">SignIn</button>                    
                   </form> 
                                                 
            </div>
        )
    }
}
export default MyAccount;