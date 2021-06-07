import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import "./Dashboard.css";
import img from "./1.png";
import bid from "./auction.png";
import chat from "./chat.png";
import us from "./user.png";
class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div>
      <div style={{ height: "90vh" }} className="container valign-wrapper">
        <div className="row">
        <div className="vec-im col s12 center-align">
          <img src={img} height="450px" width="700px" />
        </div>
          <div className="landing-copy col s12 center-align">
            <h4>
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                Welcome to Mercury, an online shipping platform
              </p>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>
            <a href="https://mercurychat.herokuapp.com/"> <button style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              className = "btn btn-large waves-effect waves-light hoverable blue accent-3">Chat</button></a>
              <a href="http://localhost:3000/"> <button style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              
              className = "btn btn-large waves-effect waves-light hoverable blue accent-3">Bid</button></a>
          </div>
        </div>
      </div>
      <div className="landing-copy col s12 center-align defc">
              <h4>Who are <b>we?</b></h4>
              <p className="flow-text grey-text text-darken-1 hefd">
                Mercury is an online shipping platform where users can upload items for their items that they want delivered from one place to another on which anyone can bid the amount that they would require to do the task. The beauty of Mercury is that anyone can sign up on it and the final decision lies ccompletely with the User.
              </p>
      </div>
      <div className="landing-copy col s12 center-align defch">
              <h4>Our <b>Features</b></h4>
              <div className = "row">
                <div className = "col-4">
                  <img src={bid} height="50px" width="50px" />
                  <h5><b>Bidding System</b></h5>
                  <p className="flow-text grey-text text-darken-1 hefd">
                Mercury allows users be it shipping companies or anyone going a particular route who could make some money by just delivering a package to bid on items uploaded by the user.
              </p>
                  </div>
                  <div className = "col-4">
                  <img src={chat} height="50px" width="50px" />
                  <h5><b>Chat System</b></h5>
                  <p className="flow-text grey-text text-darken-1 hefd">
                Mercury allows users to chat with the person who has bid on a product so that they can get to know the person who would potentially be delivering their product.
              </p>
                  </div>
                  <div className = "col-4">
                  <img src={us} height="50px" width="50px" />
                  <h5><b>User has complete control</b></h5>
                  <p className="flow-text grey-text text-darken-1 hefd">
                Mercury allows users to be in complete control over everything. From choosing your preferred person to paying with whatever seems comfortable to both we ensure that control is always in your hands!
              </p>
                  </div>
              </div>
              
      </div>
      <hr className="line"></hr>
      <h4 className="center-align dem"> Copyright Mercury 2021. SEPM project for Sem-4</h4>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
