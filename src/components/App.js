import React, {Component} from 'react';

import {connect} from 'react-redux';
import '../styles/index.css';
import MemeItem from './MemeItem';
import MyMemes from './MyMemes';

import {Form, FormGroup, FormControl, FormLabel} from 'react-bootstrap';


class App extends Component{

    constructor(){
        super();
        this.state ={
            memeLimit : 10,
            text0 : '',
            text1 : ''
        }
    }

    render(){
        return(
            <div>
                <h2><u>Welcome to the MEME Genenrator!</u></h2>
                <MyMemes />
                <h4><i>Write some text</i></h4>
                <Form inline>
                    <FormGroup>
                        <FormLabel>Top</FormLabel>
                        {' '}
                        <FormControl
                        onChange ={event=> this.setState({text0 : event.target.value})}
                        type="text" />
                    </FormGroup>
                    {' '}
                    <FormGroup>
                        <FormLabel>Bottom</FormLabel>
                        {' '}
                        <FormControl
                        onChange ={event=> this.setState({text1: event.target.value})}
                        type="text" />
                    </FormGroup>
                </Form>
                {
                    this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
                        return(
                        <MemeItem key={index} meme={meme} text0={this.state.text0} text1={this.state.text1}/>
                        )
                    })
                }
                <div className = "meme-button" onClick = {() => this.setState({memeLimit : this.state.memeLimit+10})}>
                    Load 10 more...
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, null)(App);