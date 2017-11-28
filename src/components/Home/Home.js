import React, {Component} from 'react';
import './Home.css';
import logo from './../../logo.svg';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';


//homepage is basically useless right now as it dosnt go to it
class Home extends Component {

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
          <div>
           <TextField
             hintText="HOME PAGEddd"
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
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>


      
    


         </MuiThemeProvider>
      </div>
        );
    }
}

const style = {
 margin: 15,
};

export default Home;