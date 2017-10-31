import React, { Component } from 'react';
import './App.css';
import { Navbar , FormControl , Jumbotron , FormGroup , Col , Checkbox , Button } from 'react-bootstrap'

class App extends Component {
  constructor(){
    super()
    this.state={
      allFlag:false,
      liFlag1:false,
      liFlag2:false,
      liFlag3:false,
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
          <Jumbotron style={{boxShadow:'1px 1px 5px grey',backgroundColor:'#fcfcfc',marginLeft:'7.5%',width:'85%'}}>
          <span>
            <Checkbox style={{marginLeft:'7.5%',marginTop:10}} checked={this.state.allFlag} onClick={()=>{
              this.setState({allFlag:!this.state.allFlag},()=>{
                if(this.state.allFlag === true){
                  this.setState({
                    liFlag1:true,
                    liFlag2:true,
                    liFlag3:true
                  })
                }
                else if(this.state.allFlag === false){
                  this.setState({
                    liFlag1:false,
                    liFlag2:false,
                    liFlag3:false
                  })
                }
              })
            }}>
              Select All
            </Checkbox>
          </span>
          <div>
            <ul style={{paddingLeft:'9%'}}>
              <li style={{borderBottomWidth:0.5,borderBottomColor:'#ededed',borderBottomStyle:'solid',paddingTop:10,paddingBottom:10}}>
                <span>
                  popup 1
                </span>
                <span style={{marginLeft:'75%'}}>
                  <Checkbox style={{display:'inline'}} checked={this.state.liFlag1} onClick={()=>{
                    this.setState({liFlag1:!this.state.liFlag1},()=>{
                      if(this.state.liFlag1 === true && this.state.liFlag2 === true && this.state.liFlag3 === true){
                        this.setState({
                          allFlag:true
                        })
                      }
                      else{
                        this.setState({allFlag:false})
                      }
                    })
                  }} >Select</Checkbox>
                </span>
              </li>
              <li style={{borderBottomWidth:0.5,borderBottomColor:'#ededed',borderBottomStyle:'solid',paddingTop:10,paddingBottom:10}}>
              <span>
                popup 2
              </span>
              <span style={{marginLeft:'75%'}}>
                <Checkbox style={{display:'inline'}} checked={this.state.liFlag2} onClick={()=>{
                    this.setState({liFlag2:!this.state.liFlag2},()=>{
                      if(this.state.liFlag1 === true && this.state.liFlag2 === true && this.state.liFlag3 === true){
                        this.setState({
                          allFlag:true
                        })
                      }
                      else{
                        this.setState({allFlag:false})
                      }
                    })
                  }}>Select</Checkbox>
              </span>
              </li>
              <li style={{borderBottomWidth:0.5,borderBottomColor:'#ededed',borderBottomStyle:'solid',paddingTop:10,paddingBottom:10}}>
                <span>
                  popup 3
                </span>
                <span style={{marginLeft:'75%'}}>
                  <Checkbox style={{display:'inline'}} checked={this.state.liFlag3} onClick={()=>{
                    this.setState({liFlag3:!this.state.liFlag3},()=>{
                      if(this.state.liFlag1 === true && this.state.liFlag2 === true && this.state.liFlag3 === true){
                        this.setState({
                          allFlag:true
                        })
                      }
                      else{
                        this.setState({allFlag:false})
                      }
                    })
                  }} >Select</Checkbox>
                </span>
                </li>
            </ul>
            <Button bsStyle="info" style={{width:'10%',marginLeft:'45%',marginTop:10}}>Info</Button>
          </div>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

export default App;
