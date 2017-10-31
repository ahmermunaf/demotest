import React, { Component } from 'react';
import './App.css';
import { Navbar , FormControl , Jumbotron , FormGroup , Col , Checkbox , Button } from 'react-bootstrap'

class App extends Component {
  constructor(){
    super()
    this.state={
      allFlag:false
    }
  }
  render() {
    return (
      <div>
        <div>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <span>Test App</span>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Navbar.Text>
                <span></span>
              </Navbar.Text>
              <Navbar.Text pullRight>
                Have a great day!
              </Navbar.Text>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div>
          <Jumbotron style={{boxShadow:'1px 1px 5px grey',backgroundColor:'#fcfcfc',marginLeft:'15%',width:'70%'}}>
          <span>
            <Checkbox style={{marginLeft:15,marginTop:10}} checked={this.state.allFlag} onClick={()=>{
              this.setState({allFlag:!this.state.allFlag})
            }}>
              Select All
            </Checkbox>
          </span>
          <div>
            <ul>
              <li style={{borderBottomWidth:0.5,borderBottomColor:'#ededed',borderBottomStyle:'solid',paddingTop:10,paddingBottom:10}}>
                <span>
                  popup 1
                </span>
                <span style={{marginLeft:'80%'}}>
                  <Checkbox style={{display:'inline'}}>select</Checkbox>
                </span>
              </li>
              <li style={{borderBottomWidth:0.5,borderBottomColor:'#ededed',borderBottomStyle:'solid',paddingTop:10,paddingBottom:10}}>
              <span>
                popup 2
              </span>
              <span style={{marginLeft:'80%'}}>
                <Checkbox style={{display:'inline'}}>select</Checkbox>
              </span>
              </li>
              <li style={{borderBottomWidth:0.5,borderBottomColor:'#ededed',borderBottomStyle:'solid',paddingTop:10,paddingBottom:10}}>
                <span>
                  popup 3
                </span>
                <span style={{marginLeft:'80%'}}>
                  <Checkbox style={{display:'inline'}}>select</Checkbox>
                </span>
                </li>
            </ul>
          </div>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

export default App;
