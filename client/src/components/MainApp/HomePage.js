import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBCollapse, MDBMask, MDBRow, MDBCol,  MDBBtn, MDBView, MDBContainer, MDBFormInline } from "mdbreact";

class Home extends Component {

  render() {
    const navStyle = { marginTop: "4rem" };
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <>
        <MDBView src={`https://mdbootstrap.com/img/Photos/Others/gradient2.png`} >
          <MDBMask className="rgba-purple-slight d-flex justify-content-center align-items-center">
            <MDBContainer>
              <MDBRow>
                <MDBCol md="12" className="mb-4 text-center">
                  <h1 className="display-4 font-weight-bold mb-0 pt-md-5 pt-5 text-white" >Meetup.Space</h1>
                  
                  <h5 className="pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5"> Meet Me Halfway </h5>
                  
                  <MDBBtn 
                     rounded 
                     className="btn-purple"
                     onClick = {this.props.renderCreateGroup}
                  > 
                     Create Group 
                  </MDBBtn>

                  <MDBBtn 
                     outline 
                     color="purple" 
                     rounded 
                     onClick = {this.props.renderJoinGroup}
                  > 
                     Join Group 
                  </MDBBtn>

                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </>
    );
  }
}

export default Home;