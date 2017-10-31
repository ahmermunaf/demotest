import React, { Component } from 'react';
import './App.css';
import { Navbar , FormControl , FormGroup , Col , Checkbox , Button } from 'react-bootstrap'

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
          <span>
            <Checkbox checked={this.state.allFlag} onClick={()=>{
              this.setState({allFlag:!this.state.allFlag})
            }}>
              Select All
            </Checkbox>
          </span>
        </div>
      </div>
    );
  }
}

export default App;
