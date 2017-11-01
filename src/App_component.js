import React, { Component } from 'react';
import './App.css';
import { Navbar , FormControl , Jumbotron , FormGroup , Col , Checkbox , Button , Modal } from 'react-bootstrap'

class App_Component extends Component {
  constructor(props){
    super(props)
    this.state={
      allFlag:false,
      data:[],
      popupList:[],
      show:false
    }
  }
 async componentWillReceiveProps (nextProps) {
    this.setState({data:nextProps.data})
    for(var i = 0;i<this.state.data.length;i++){
      this.setState({
        ['liFlag'+i]:false
      })
    }
  }
  
  render() {
    return (
      <div>
           {
             this.state.popupList.map((data,index)=>(
              <Modal
                show={this.state['show'+index]}
                container={this}
                aria-labelledby="contained-modal-title"
              >
                <Modal.Body>
                  {data}
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={()=>{
                    if(index === (this.state.popupList.length-1)){
                      this.setState({['show'+index]:false})
                    }
                    else if(index !== (this.state.popupList.length-1)){
                      this.setState({
                        ['show'+index]:false,
                        ['show'+(index+1)]:true
                      })
                    }
                  }}>Close</Button>
                </Modal.Footer>
              </Modal>
             )) 
          }
          <Modal
                show={this.state.show}
                container={this}
                aria-labelledby="contained-modal-title"
              >
                <Modal.Body>
                  No CheckBox Was Selected
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={()=>{
                    this.setState({show:false})
                  }}>Close</Button>
                </Modal.Footer>
              </Modal>
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
                  var arr = []
                  for(var j = 0;j<this.state.data.length;j++){
                    arr.push(this.state.data[j])
                    this.setState({
                      ['liFlag'+j]:true,
                    })
                  }
                  this.setState({popupList:arr})
                }
                else if(this.state.allFlag === false){
                  var arr = []
                  for(var k = 0;k<this.state.data.length;k++){
                    this.setState({
                      ['liFlag'+k]:false,
                    })
                  }
                  this.setState({popupList:arr})
                }
              })
            }}>
              Select All
            </Checkbox>
          </span>
          <div>
            <ul style={{paddingLeft:'9%'}}>
            {
              this.state.data.map((list,ind)=>{
                
                return(
                  <li key={ind} style={{borderBottomWidth:0.5,borderBottomColor:'#ededed',borderBottomStyle:'solid',paddingTop:10,paddingBottom:10}}>
                    <span>
                      {list}
                    </span>
                    <span style={{marginLeft:'75%'}}>
                      <Checkbox style={{display:'inline'}} checked={this.state['liFlag'+ind]} onClick={()=>{
                        this.setState({['liFlag'+ind]:!this.state['liFlag'+ind]},()=>{
                          var listArr = this.state.popupList
                          var arr =[] 
                          for(var l = 0;l<this.state.data.length;l++){
                            if(this.state['liFlag'+l] === true){
                              arr.push(l)
                            }
                            if(arr.length === this.state.data.length){
                              this.setState({
                                allFlag:true
                              })
                            }
                            else if(arr.length !== this.state.data.length){
                              this.setState({allFlag:false})
                            }
                          }
                          if(this.state['liFlag'+ind] === true){
                            listArr.push(list)
                          }
                          else if(this.state['liFlag'+ind] === false){
                            listArr.splice(listArr.indexOf(list),1)
                          }
                          this.setState({popupList:listArr})
                          for(var m = 0;m<this.state.popupList.length;m++){
                            this.setState({['show'+m]:false})
                          }
                        })
                      }} >Select</Checkbox>
                    </span>
                  </li>  
              )
            })
          }
            </ul>
            <Button bsStyle="info" style={{display:'block',margin:'0px auto',width:100,marginTop:30}} onClick={()=>{
              if(this.state.popupList.length !== 0){
                this.setState({show0:true})
              }
              else if(this.state.popupList.length === 0){
                this.setState({show:true})
              }
            }}>Info</Button>
          </div>
          </Jumbotron>
        </div>
      </div>
    );
  }
}

export default App_Component;
