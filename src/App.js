import React, {Component} from 'react';
import './App.css';

import {Link} from 'react-router';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Home from 'material-ui/svg-icons/action/home';
import Contact from 'material-ui/svg-icons/communication/contact-mail';
import Background from './background.jpg';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

var sectionStyle = {
  width: "100%",
  height: "900px",
  backgroundImage: `url(${Background})`
};

var cardStyle = {
  width: "50%",
};

const style = {
 margin: 15,
};

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            NavBar: false,
            viewChild: false,
        }
    }

    toggleNavBar() {
        this.setState({NavBar: !this.state.NavBar})
    }

    handleCloseChild() {
        this.setState({NavBar: false});
        this.setState({viewChild: true})
    }

    handleCloseNoChild() {
        this.setState({NavBar: false});
        this.setState({viewChild: false})
    }

    render() {
        if (this.state.viewChild === true) {
            return (
                
                

                <MuiThemeProvider>
                <section style={ sectionStyle }>
                    <div className="App">
                        <AppBar
                            title="fAirlines"
                            iconClassNameRight="muidocs-icon-navigation-expand-more"
                            onLeftIconButtonTouchTap={this.toggleNavBar.bind(this)}/>
                        <Drawer
                            docked={false}
                            width={225}
                            open={this.state.NavBar}
                            onRequestChange={this.toggleNavBar.bind(this)}>
                            <Link to="/Home">
                                <MenuItem primaryText="Home"
                                          leftIcon={<Home/>}
                                          onClick={this.handleCloseNoChild.bind(this)}
                                />
                            </Link>
                            <Link to="/login">
                                <MenuItem primaryText="Login"
                                          leftIcon={<Contact/>}
                                          onClick={this.handleCloseChild.bind(this)}
                                />
                            </Link>
                        </Drawer>
                        <p className="App-intro">
                            {this.props.children}
                        </p>
                    </div>
                    </section>
                </MuiThemeProvider>

                );


        } else {
            return (
                <MuiThemeProvider>
                <section style={ sectionStyle }>
                    <div className="App">
                        <AppBar
                            title="fAirlines"
                            iconClassNameRight="muidocs-icon-navigation-expand-more"
                            onLeftIconButtonTouchTap={this.toggleNavBar.bind(this)}/>
                        <Drawer
                            docked={false}
                            width={225}
                            open={this.state.NavBar}
                            onRequestChange={this.toggleNavBar.bind(this)}>
                            <Link to="/Home">
                                <MenuItem primaryText="Home"
                                          leftIcon={<Home/>}
                                          onClick={this.handleCloseNoChild.bind(this)}
                                />
                            </Link>
                            <Link to="/Login">
                                <MenuItem primaryText="Log In"
                                          leftIcon={<Contact/>}
                                          onClick={this.handleCloseChild.bind(this)}
                                />
                            </Link>
                        </Drawer>
                        
                        <p className = "App-intro">

                        </p>

                        <br></br>
                        <Card style = {cardStyle} >
                            <TextField
                             hintText="Depart From"
                             floatingLabelText="Depart From"
                             onChange = {(event,newValue) => this.setState({username:newValue})}
                             />

                             <TextField
                             hintText="Destination"
                             floatingLabelText="Destination"
                             onChange = {(event,newValue) => this.setState({username:newValue})}
                             />
                             <br></br>
                             <RaisedButton label="Add Reservation" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
                        </Card>

                    </div>
                </section>

                </MuiThemeProvider>
            );
        }
    }
}

export default App;
