import React, {Component} from 'react';
import './Login.css';
import logo from './../../logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

var cardStyle = {
  width: "50%",
};

class Login extends Component {

	constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }

    render() {
        return (
            <div>
        <MuiThemeProvider>
        <Card style = {cardStyle} >
          <div>
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Login" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
             <RaisedButton label="Register" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
             

         </div>
         </Card>


		  
		


         </MuiThemeProvider>
      </div>
        );
    }
}

const style = {
 margin: 15,
};

export default Login;
