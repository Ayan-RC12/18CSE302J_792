import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './image1.png'



function Home() {

  return (
    <div>

<div>
  <div id="zc-welcome-loading" className="zc_loader_container ">
    <div id="zc-init-loader-animation" className="zc_line_loader_wraper" style={{}}>
      <span>Academia - Academic Web Services</span>
      <div className="zc_on_loading" />
    </div>
  </div>
  <div className="wrapper container-fixed zc-full-height zc-dem-container   ">
    <div id="loadingEl" className="zc-dem-loader-container" style={{display: 'none'}}>
      <div className="ball-pulse-container">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
    <div id="appViewContainer" className="zc-full-height ">
      <div className="zc-header">
        <div className="brand"><a href="http://creator.zoho.com" style={{display: 'none'}}>
          </a>
          <a href>
            <span className="zc-app-icon-details zc-app-brand-appicon-hasname" style={{display: 'none'}}> <span className="zc-app-brand-appicon-name"> <span className="zc-app-brand iconimages zc-app-brand-appicon">AAW</span> </span></span>
            <span className="zc-app-brand-appname"> Academia - Academic Web Services </span></a>
        </div>
        <div className="brand hide" id="zc-applicationHeaderDiv"><a href="javascript:void(0);" id="zc-applicationHeaderBar">
          </a>
          <a href="javascript:void(0);" id="backToSection" className="zc-dem-back-button zc-dem-back-active">
            <i className="zc-li-outline arrows-1-minimal-left" />
          </a></div>
        <div id="zc-header-top-bar-wrapper" className="header_top_bar"><a href="javascript:void(0);" className="menutoggle" id="menuToggle"> <i className="fa fa-dedent fa-fw" /> </a>
          <div className="top_navbar">
            <div id="zc-account-settings" className="top_navbar_user zc_navbar_noicons"><a href="javascript:;">
                <img src className="pull_left user_image" />			
                <span className="navbar_user_name">ac7661</span> 
              </a></div>
            <div className="clear" />
          </div>
        </div>
      </div>
      <div className="topbar_dropdown " id="zc-account-dropdown" style={{right: '0.3%'}}>
        <div className="Profile-info">
          <div className="user-image"><a href="javascript:;">
              <img src className="pull_left user_image" />			
            </a></div>
          <div className="user-info">
            <div className="user-name"><span className="navbar_user_name">ac7677</span></div>
            <div className="user-email-id"><a href="mailto:ac7661@srmist.edu.in"><span className="navbar_user_name">ac7661@srmist.edu.in</span></a>
            </div>
            <div className="user-privacy">
              <a className="dropdown_option" onclick="handleSignOut()">			
                <i className="fa fa-sign-out" />
                <span className="title">Sign out</span> </a>
              <a id="accountsSignOut" href="https://academia.srmist.edu.in?logout=true&servicename=ZohoCreator&serviceurl=https://academia.srmist.edu.in" style={{display: 'none'}}>
                <iframe previewloginurl="/accounts/signin?_sh=false&hideidp=false&portal=10002227248&client_portal=true&dcc=true&servicename=TeamDrive&serviceurl=https://previewengine.zoho.com" height={0} width={0} className="hide" />
              </a><a href="https://academia.srmist.edu.in/49910842/u/p" target="_blank" style={{marginRight: 5}}>Change Password</a>
            </div>
          </div>
        </div>
        <div className="Profile-option">
          <ul />
        </div>
      </div>
      <div className="inner">
        <div id="zc_inner_nav_menu" className="pane_nav zc-dem-hide-pane ">
          <div className="pane_nav_menu accordion_menu zc-showAppIcons container-fixed 
 " id="pane_nav_menu">
            <ul id="zc_nav_menu">
              <li className="zc_nav_section"><a id="tab_CIRCULAR" href="#CIRCULAR" className="zc_tab zc_transition ">
                  <i elname="componentIcon" className="
zc-li-outline tech-desktop" id="t2727643000203817005" />
                  <div className="zc-nav-title"><span className="title">CIRCULAR</span></div>
                  <span className="plus"> <i className="fa fa-angle-down" /> </span>
                </a>
                <ul className="zc_tab_comp pane_nav_submenu">
                  <li className="zc_nav_com ">
                    <a id="SRMIST_Contest" href="#Page:SRMIST_Contest">
                      <i elname="componentIcon" className="zc-li-outline ui-3-playlist" id="t2727643000206153150" />
                      <div className="zc-nav-title"><span className="title">SRMIST WRRC Contest</span></div>
                    </a></li>
                  <li className="zc_nav_com ">
                    <a id="Circular_III_Year_BTECH" href="#Page:Circular_III_Year_BTECH">
                      <i elname="componentIcon" className="zc-li-outline ui-3-playlist" id="t2727643000238876023" />
                      <div className="zc-nav-title"><span className="title">Circular III Year BTECH</span></div>
                    </a></li>
                </ul>
              </li>
              <li className="zc_nav_section"><a id="tab_WELCOME" href="#WELCOME" className="zc_tab zc_transition no-comp-section">
                  <i elname="componentIcon" className="
zc-li-outline tech-desktop" id="t2727643000098596129" />
                  <div className="zc-nav-title"><span className="title">WELCOME</span></div>
                </a>
                <ul className="zc_tab_comp pane_nav_submenu" style={{display: 'none'}}>
                  <li className="zc_nav_com ">
                    <a id="WELCOME" href="#Page:WELCOME">
                      <i elname="componentIcon" className="zc-li-outline ui-3-playlist" id="t2727643000015432015" />
                      <div className="zc-nav-title"><span className="title">WELCOME</span></div>
                    </a></li>
                </ul>
              </li>
              <li className="zc_nav_section"><a id="tab_Student_Profile" href="#Student_Profile" className="zc_tab zc_transition no-comp-section">
                  <i elname="componentIcon" className="
zc-li-outline tech-desktop" id="t2727643000233176101" />
                  <div className="zc-nav-title"><span className="title">Student Profile</span></div>
                </a>
                <ul className="zc_tab_comp pane_nav_submenu" style={{display: 'none'}}>
                  <li className="zc_nav_com ">
                    <a id="Photo_Upload_Student" href="#Form:Photo_Upload_Student">
                      <i elname="componentIcon" className="zc-li-outline ui-3-playlist" id="t2727643000230215553" />
                      <div className="zc-nav-title"><span className="title">Photo Upload Student</span></div>
                    </a></li>
                </ul>
              </li>
              <li className="zc_nav_section"><a id="tab_Academic_Reports" href="#Academic_Reports" className="zc_tab zc_transition ">
                  <i elname="componentIcon" className="
zc-li-outline tech-desktop" id="t2727643000098596143" />
                  <div className="zc-nav-title"><span className="title">Academic Reports</span></div>
                  <span className="plus"> <i className="fa fa-angle-down" /> </span>
                </a>
                <ul className="zc_tab_comp pane_nav_submenu">
                  <li className="zc_nav_com ">
                    <a id="Academic_Planner_2021_22_ODD" href="#Page:Academic_Planner_2021_22_ODD">
                      <i elname="componentIcon" className="zc-li-outline ui-3-playlist" id="t2727643000223658011" />
                      <div className="zc-nav-title"><span className="title">Academic_Planner_2021_22_ODD</span></div>
                    </a></li>
                  <li className="zc_nav_com ">
                    <a id="Academic_Planner_2021_22_EVEN" href="#Page:Academic_Planner_2021_22_EVEN">
                      <i elname="componentIcon" className="zc-li-outline ui-3-playlist" id="t2727643000243856375" />
                      <div className="zc-nav-title"><span className="title">Academic Planner 2021 22 EVEN</span></div>
                    </a></li>
                </ul>
              </li>
              <li className="zc_nav_section"><a id="tab_Student" href="#Student" className="zc_tab zc_transition ">
                  <i elname="componentIcon" className="
zc-li-outline tech-desktop" id="t2727643000098596153" />
                  <div className="zc-nav-title"><span className="title">Student</span></div>
                  <span className="plus"> <i className="fa fa-angle-down" /> </span>
                </a>
                <ul className="zc_tab_comp pane_nav_submenu">
                  <li className="zc_nav_com ">
                    <a id="Student_Contact_Update_2016_17" href="#Form:Student_Contact_Update_2016_17">
                      <i elname="componentIcon" className="zc-li-outline ui-3-playlist" id="t2727643000039362083" />
                      <div className="zc-nav-title"><span className="title">Student Contact Update 2016-17</span></div>
                    </a></li>
                  <li className="zc_nav_com ">
                    <a id="Student_Master_Contact_Update" href="#Report:Student_Master_Contact_Update">
                      <i elname="componentIcon" className="zc-li-outline ui-3-playlist" id="t2727643000094565089" />
                      <div className="zc-nav-title"><span className="title">Student_Master_Contact_Update</span></div>
                    </a></li>
                </ul>
              </li>
              <li className="zc_nav_section"><a id="tab_Time_Table_Mapping_2016_17_Even" href="#Time_Table_Mapping_2016_17_Even" className="zc_tab zc_transition ">
                  <i elname="componentIcon" className="
zc-li-outline tech-desktop" id="t2727643000098596197" />
                  <div className="zc-nav-title"><span className="title">Unified Time Table</span></div>
                  <span className="plus"> <i className="fa fa-angle-down" /> </span>
                </a>
                <ul className="zc_tab_comp pane_nav_submenu">
                  <li className="zc_nav_com ">
                    <a id="Minor_Time_Table" href="#Page:Minor_Time_Table">
                      <i elname="componentIcon" className="zc-li-outline ui-3-playlist" id="t2727643000195818011" />
                      <div className="zc-nav-title"><span className="title">Minor Time Table</span></div>
                    </a></li>
                  <li className="zc_nav_com ">
                    <a id="Special_Time_Table_1" href="#Page:Special_Time_Table_1">
                      <i elname="componentIcon" className="zc-li-outline ui-3-playlist" id="t2727643000201642053" />
                      <div className="zc-nav-title"><span className="title">Special Time Table - 1</span></div>
                    </a></li>
                  <li className="zc_nav_com ">
                    <a id="Special_Time_Table_2" href="#Page:Special_Time_Table_2">
                      <i elname="componentIcon" className="zc-li-outline ui-3-playlist" id="t2727643000201642067" />
                      <div className="zc-nav-title"><span className="title">Special Time Table - 2</span></div>
                    </a></li>
                  <li className="zc_nav_com ">
                    <a id="Unified_Time_Table_Jan_22_Batch_1" href="#Page:Unified_Time_Table_Jan_22_Batch_1">
                      <i elname="componentIcon" className="zc-li-outline ui-3-playlist" id="t2727643000240681015" />
                      <div className="zc-nav-title"><span className="title">Unified Time Table Jan-22 -Batch-1</span></div>
                    </a></li>
                  <li className="zc_nav_com ">
                    <a id="Unified_Time_Table_Jan_22_Batch_2" href="#Page:Unified_Time_Table_Jan_22_Batch_2">
                      <i elname="componentIcon" className="zc-li-outline ui-3-playlist" id="t2727643000240681029" />
                      <div className="zc-nav-title"><span className="title">Unified Time Table Jan-22 -Batch-2</span></div>
                    </a></li>
                </ul>
              </li>
              <li className="zc_nav_section"><a id="tab_Course_Feedback" href="#Course_Feedback" className="zc_tab zc_transition no-comp-section">
                  <i elname="componentIcon" className="
zc-li-outline tech-desktop" id="t2727643000098596223" />
                  <div className="zc-nav-title"><span className="title">Course Feedback</span></div>
                </a>
                <ul className="zc_tab_comp pane_nav_submenu" style={{display: 'none'}}>
                  <li className="zc_nav_com ">
                    <a id="Feedback_Polling_Page_2016_17" href="#Page:Feedback_Polling_Page_2016_17">
                      <i elname="componentIcon" className="zc-li-outline ui-3-playlist" id="t2727643000043621011" />
                      <div className="zc-nav-title"><span className="title">Feedback Polling Page 2016 - 17</span></div>
                    </a></li>
                </ul>
              </li>
              <li className="zc_nav_section"><a id="tab_New_Regulation" href="#New_Regulation" className="zc_tab zc_transition ">
                  <i elname="componentIcon" className="
zc-li-outline tech-desktop" id="t2727643000098596235" />
                  <div className="zc-nav-title"><span className="title">New Regulation</span></div>
                  <span className="plus"> <i className="fa fa-angle-down" /> </span>
                </a>
                <ul className="zc_tab_comp pane_nav_submenu">
                  <li className="zc_nav_com ">
                    <a id="Course_Registration_Page_New_Regulation" href="#Page:Course_Registration_Page_New_Regulation">
                      <i elname="componentIcon" className="zc-li-outline ui-3-playlist" id="t2727643000072398021" />
                      <div className="zc-nav-title"><span className="title">Course Registration Page New Regulation</span></div>
                    </a></li>
                  <li className="zc_nav_com ">
                    <a id="Course_Registration_Page_18_Regulation" href="#Page:Course_Registration_Page_18_Regulation">
                      <i elname="componentIcon" className="zc-li-outline ui-3-playlist" id="t2727643000188047186" />
                      <div className="zc-nav-title"><span className="title">Course Registration Page 18 Regulation</span></div>
                    </a></li>
                  <li className="zc_nav_com ">
                    <a id="My_Electives_18_Regulation" href="#Page:My_Electives_18_Regulation">
                      <i elname="componentIcon" className="zc-li-outline ui-3-playlist" id="t2727643000188757011" />
                      <div className="zc-nav-title"><span className="title">My Electives 18 Regulation</span></div>
                    </a></li>
                  <li className="zc_nav_com ">
                    <a id="Course_Confirmation_Elective_Polling" href="#Page:Course_Confirmation_Elective_Polling">
                      <i elname="componentIcon" className="zc-li-outline ui-3-playlist" id="t2727643000188816011" />
                      <div className="zc-nav-title"><span className="title">Course Confirmation Elective Polling</span></div>
                    </a></li>
                </ul>
              </li>
              <li className="zc_nav_section"><a id="tab_My_Time_Table_Attendance" href="#My_Time_Table_Attendance" className="zc_tab zc_transition ">
                  <i elname="componentIcon" className="
zc-li-outline tech-desktop" id="t2727643000098596239" />
                  <div className="zc-nav-title"><span className="title">My Time Table &amp; Attendance</span></div>
                  <span className="plus"> <i className="fa fa-angle-down" /> </span>
                </a>
                <ul className="zc_tab_comp pane_nav_submenu">
                  <li className="zc_nav_com ">
                    <a id="My_Time_Table_2020_21_22" href="#Page:My_Time_Table_2020_21_22">
                      <i elname="componentIcon" className="zc-li-outline ui-3-playlist" id="t2727643000074006011" />
                      <div className="zc-nav-title"><span className="title">My Time Table 2020-21-22</span></div>
                    </a></li>
                  <li className="zc_nav_com ">
                    <a id="My_Attendance" href="#Page:My_Attendance">
                      <i elname="componentIcon" className="zc-li-outline ui-3-playlist" id="t2727643000022131136" />
                      <div className="zc-nav-title"><span className="title">My Attendance</span></div>
                    </a></li>
                </ul>
              </li>
              <li className="zc_nav_section"><a id="tab_Student_Service_Requests_SSR" href="#Student_Service_Requests_SSR" className="zc_tab zc_transition ">
                  <i elname="componentIcon" className="
zc-li-outline tech-desktop" id="t2727643000224057211" />
                  <div className="zc-nav-title"><span className="title">Student Service Requests (SSR)</span></div>
                  <span className="plus"> <i className="fa fa-angle-down" /> </span>
                </a>
                <ul className="zc_tab_comp pane_nav_submenu">
                  <li className="zc_nav_com ">
                    <a id="Student_Service_Requests_SSR" href="#Form:Student_Service_Requests_SSR">
                      <i elname="componentIcon" className="zc-li-outline ui-3-playlist" id="t2727643000224057213" />
                      <div className="zc-nav-title"><span className="title">Student Service Requests (SSR)</span></div>
                    </a></li>
                  <li className="zc_nav_com ">
                    <a id="My_Service_Requests" href="#Page:My_Service_Requests">
                      <i elname="componentIcon" className="zc-li-outline ui-3-playlist" id="t2727643000224057623" />
                      <div className="zc-nav-title"><span className="title">My Service Requests</span></div>
                    </a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        {/*Left Pane ends here*/}
        <div className="page_content_wrapper container-fixed">
        <img src={logo} />
        </div>
      </div>
    </div>
    <div id="preloader" className="loading-animation">
      <div className="line"><span className="break dot1" /> <span className="break dot2" /> <span className="break dot3" /> <span className /> <span className /></div>
    </div>
    <div className="appFooter">
      <p></p>
    </div>
  </div>
  <div id="active-DatePicker">
    <div style={{position: 'relative'}} id="active-DatePicker-Cont" />
  </div>
  <div className="zc-scroll-mask" style={{display: 'none'}} />
  <div className="live-chat new-live" id="zcChat" style={{display: 'none'}}><i className="live-chat-ico" />
    <small className="circle-ripple" /></div>
</div>

    </div>
  );
}

ReactDOM.render(
  <Home/>,
  document.getElementById('root')
);

//----------------------------------------------------------------------------






// function Contacts() {
//   return <div className="Contacts" />;
// }

// function Chat() {
//   return <div className="Chat" />;
// }

// function SplitPane(props) {

//   console.log(props);
//   return (
//     <div className="SplitPane">
//       <div className="SplitPane-left">
//         {props.left}
//       </div>
//       <div className="SplitPane-right">
//         {props.right}
//       </div>
//     </div>
//   );
// }

// function App() {
//   return (
//     <SplitPane left={<Contacts />} right={<Chat />} />
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

//------------------------------------------------------------------------------





// function FancyBorder(props) {

//   console.log(props);
//   return (
//     <div className={'FancyBorder FancyBorder-' + props.color}>
//       {props.children}
//     </div>
//   );
// }

// function WelcomeDialog() {
//   return (
//     <FancyBorder color="blue">
//       <h1 className="Dialog-title">
//         Welcome
//       </h1>
//       <p className="Dialog-message">
//         Thank you for visiting our spacecraft!
//       </p>
//     </FancyBorder>
//   );
// }


// ReactDOM.render(<WelcomeDialog/>,
//   document.getElementById('root'));


// function BoilingVerdict(props) {
//   if (props.celsius >= 100) {
//     return <p>The water would boil.</p>;
//   }
//   return <p>The water would not boil.</p>;
// }

// const scaleNames = {
//   c: 'Celsius',
//   f: 'Fahrenheit'
// };

// function toCelsius(fahrenheit) {
//   return (fahrenheit - 32) * 5 / 9;
// }

// function toFahrenheit(celsius) {
//   return (celsius * 9 / 5) + 32;
// }


// function tryConvert(temperature, convert) {
//   const input = parseFloat(temperature);
//   if (Number.isNaN(input)) {
//     return '';
//   }
//   const output = convert(input);
//   const rounded = Math.round(output * 1000) / 1000;
//   return rounded.toString();
// }






// // tempreature class
// class TemperatureInput extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(e) {

//     // this.setState({temperature: e.target.value});  //---
//     this.props.onTemperatureChange(e.target.value);
//   }

//   render() {
//     // const temperature = this.state.temperature; //-----
//     const temperature = this.props.temperature;
//     const scale = this.props.scale;

//     return (
//       <fieldset>
//         <legend>Enter temperature in {scaleNames[scale]}:</legend>
//         <input value={temperature}
//                onChange={this.handleChange} />
//       </fieldset>
//     );
//   }

// }



// // class Calculator extends React.Component {
// //   render() {
// //     return (
// //       <div>
// //         <TemperatureInput scale="c" />
// //         <TemperatureInput scale="f" />
// //       </div>
// //     );
// //   }
// // }


// // calculator class
// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
//     this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
//     this.state = {temperature: '', scale: 'c'};
//   }

//   handleCelsiusChange(temperature) {
//     this.setState({scale: 'c', temperature});
//   }

//   handleFahrenheitChange(temperature) {
//     this.setState({scale: 'f', temperature});
//   }

//   render() {
    
//     const scale = this.state.scale;
//     const temperature = this.state.temperature;
//     const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
//     const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

//     return (
//       <div>
//         <TemperatureInput
//           scale="c"
//           temperature={celsius}
//           onTemperatureChange={this.handleCelsiusChange} />
//         <TemperatureInput
//           scale="f"
//           temperature={fahrenheit}
//           onTemperatureChange={this.handleFahrenheitChange} />
//         <BoilingVerdict
//           celsius={parseFloat(celsius)} />
//       </div>
//     );
//   }
// }



// // render method
// ReactDOM.render
// (<Calculator scale={scaleNames} />
//   , document.getElementById('root')
//   )




//---------------------------------------------------------------------------------------------------------------------------------------------------------







// function BoilingVerdict(props) {
//   if (props.celsius >= 100) {
//     return <p>The water would boil.</p>;
//   }
//   return <p>The water would not boil.</p>;
// }


// class Calculator extends React.Component {

//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.state = {temperature: ''};
//   }

//   handleChange(e) {
//     this.setState({temperature: e.target.value});
//   }

//   render() {

//     const temperature = this.state.temperature;
//     const scale=this.props.scale;
//     // console.log(this.props.scale);
//     // console.log(this.props.scale.c);
    
//     return (

//       <fieldset>

//         <legend>Enter temperature in </legend>

//         <input  value={temperature} onChange={this.handleChange} />

//         <BoilingVerdict celsius={parseFloat(temperature)} />

//       </fieldset>
//     );

//   }


// }

// const scaleNames = {
//   c: 'Celsius',
//   f: 'Fahrenheit'
// };

// ReactDOM.render(<Calculator scale={scaleNames} />
//   , document.getElementById('root'))


////------------------------------------------------------------------------------------


// class Reservation extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isGoing: true,
//       numberOfGuests: 2
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//   }

//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.type === 'checkbox' ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value
//     });
//   }

//   render() {
//     return (
//       <form>
//         <label>
//           Is going:
//           <input
//             name="isGoing"
//             type="checkbox"
//             checked={this.state.isGoing}
//             onChange={this.handleInputChange} />
//         </label>
//         <br />
//         <label>
//           Number of guests:
//           <input
//             name="numberOfGuests"
//             type="number"
//             value={this.state.numberOfGuests}
//             onChange={this.handleInputChange} />
//         </label>
//       </form>
//     );
//   }

// }


// ReactDOM.render(<Reservation />,
//   document.getElementById('root'));

//------------------------------------------------------------------------------------



// class FlavorForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: 'coconut'};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('Your favorite flavor is: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Pick your favorite flavor:
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="grapefruit">Grapefruit</option>
//             <option value="lime">Lime</option>
//             <option value="coconut">Coconut</option>
//             <option value="mango">Mango</option>
//           </select>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }


// ReactDOM.render(
// <FlavorForm />,
//  document.getElementById('root'));


//-------------------------------------------------------------------------------------------


// class EssayForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: 'Please write an essay about your favorite DOM element.'
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('An essay was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Essay:
//           <textarea value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }


// ReactDOM.render(
//   <EssayForm />,
//   document.getElementById('root')
// );

//---------------------------------------------------------------------------------------------------




// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }


//---------------------------------------------------------------------------------------------------





// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     // this.handleChange = this.handleChange.bind(this);
//     // this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {

//     console.log('the target event is',event.target);
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     console.log('the FFFOREM event is',event.target);
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={(e) => {this.handleSubmit(e);}}>
//         <label>
//           Name:
//           <input type="text" value={this.state.value} 
//           onChange={ (e) => {this.handleChange(e);} } />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }
// ReactDOM.render(
//   <NameForm/>,
//   document.getElementById('root')
// );


//-----------------------------------------------------------------------------------------------------------------------------------

// function Blog(props) {
//   const sidebar = (
//     <ul>
//       {props.posts.map((post) =>
//         <li key={post.id}>
//           {post.title}
//         </li>
//       )}
//     </ul>
//   );
//   const content = props.posts.map((post) =>
//     <div key={post.id}>
//       <h3>{post.title}</h3>
//       <p>{post.content}</p>
//     </div>
//   );
//   return (
//     <div>
//       {sidebar}
//       <hr />
//       {content}
//     </div>
//   );
// }





// -------------------------------------------------------------------------------------------------------------







// function List(props){
//   return <li>{props.title}</li>
// }

// function Blog(props) {


//   const sidebar=(
//     <ul>
//       {props.posts.map( (item) => 
//         <List key={item.id} title={item.title} />
//       )}
//     </ul>
//   );


//   // const content=props.posts.map( (item) =>
//   //   <div>
//   //     <h1>{item.title}</h1>
//   //     <p>{item.content}</p>
//   //   </div>
//   // );

//   return (
//     <div>
//       {sidebar}
//       <hr />
//       {props.posts.map( (item) =>
//         <div key={item.id}>
//           <h1>{item.title}</h1>
//           <p>{item.content}</p>
//         </div>
//       )
//       }
//     </div>
//   )



// }






// const posts = [
//   {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//   {id: 2, title: 'Installation', content: 'You can install React from npm.'}
// ];
// ReactDOM.render(
//   <Blog posts={posts} />,
//   document.getElementById('root')
// );



//----------------------------------------------------------------------------------------------







// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <li key={number.toString()}>
//       {number}
//     </li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }

// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
// );









// ----------------------------------------------------------------------------------------------





// function UserGreeting(props) {
//   return ( <h1>Welcome back!</h1>);
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }


// function Greeting(props){
//   const isLoggedIn=props.isLoggedIn;

//   if(isLoggedIn){
//     return <UserGreeting />;
//   }else{
//     return <GuestGreeting />;
//   }

// }



// function LoginButton(props) {
//   return (
//     <button onClick={props.fun1}>
//       Login
//     </button>
//   );
// }




// function LogoutButton(props) {
//   return (
//     <button onClick={props.fun1}>
//       Logout
//     </button>
//   );
// }







// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.handleLoginClick = this.handleLoginClick.bind(this);
//     // this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }

//   handleLoginClick() {
//     this.setState({isLoggedIn: true});
//   }

//   handleLogoutClick() {
//     this.setState({isLoggedIn: false});
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
//     if (isLoggedIn) {
//       button = <LogoutButton fun1={() => this.handleLogoutClick() } />;
//     } else {
//       button = <LoginButton fun1={() => this.handleLoginClick() } />;
//     }

//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <LoginControl />,
//   document.getElementById('root')
// );





// --------------------------------------------------------------------------------------





// function UserGreeting(props) {
//   return ( <h1>Welcome back!</h1>);
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }


// function Greeting(props){
//   const isLoggedIn=props.isLoggedIn;

//   if(isLoggedIn){
//     return <UserGreeting />;
//   }else{
//     return <GuestGreeting />;
//   }

// }



// function LoginButton(props) {
//   return (
//     <button onClick={props.fun1}>
//       Login
//     </button>
//   );
// }




// function LogoutButton(props) {
//   return (
//     <button onClick={props.fun1}>
//       Logout
//     </button>
//   );
// }







// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.handleLoginClick = this.handleLoginClick.bind(this);
//     // this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }

//   handleLoginClick() {
//     this.setState({isLoggedIn: true});
//   }

//   handleLogoutClick() {
//     this.setState({isLoggedIn: false});
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
//     if (isLoggedIn) {
//       button = <LogoutButton fun1={this.handleLogoutClick.bind(this)} />;
//     } else {
//       button = <LoginButton fun1={this.handleLoginClick.bind(this)} />;
//     }

//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <LoginControl />,
//   document.getElementById('root')
// );


















// --------------------------------------------------------------------------------------


// function UserGreeting(props) {
//   return ( <h1>Welcome back!</h1>);
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }


// function Greeting(props){
//   const isLoggedIn=props.isLoggedIn;

//   if(isLoggedIn){
//     return <UserGreeting />;
//   }else{
//     return <GuestGreeting />;
//   }

// }

// ReactDOM.render(
//   <Greeting isLoggedIn={true} />,
//   document.getElementById('root')
// );













// ---------------------------------------------------------------

// function Welcome(props) {
//     return <h1 className="akash">Hello, {props.name}</h1>;
//   }

// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};

//     // This binding is necessary to make `this` work in the callback
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(state => ({
//       isToggleOn: !state.isToggleOn
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }

// ReactDOM.render(
//   <Toggle />,
//   document.getElementById('root')
// );









// -------------------------------------------------------------------------------------

// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};

//     // This binding is necessary to make `this` work in the callback
//     // this.handleClick = this.handleClick.bind(this);

//   }



//   nextfun(){
//     console.log(22222);
//   }


//   handleClick() {
//     console.log('how are you');
//     console.log('party');
//     console.log('--------------------------------');

//     this.nextfun();
//     console.log('this is:', this);
    
//     this.setState((state, props) => {
//       return {
//         isToggleOn: !state.isToggleOn
//       };
//     });
//   }


//   // render() {
//   //   return (
//   //     <button onClick={this.handleClick}>
//   //       {this.state.isToggleOn ? 'ON' : 'OFF'}
//   //     </button>
//   //   );
//   // }

//   render() {
//     return (
//       <button onClick={ () => this.handleClick()}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }

// ReactDOM.render(
//   <Toggle />,
//   document.getElementById('root')
// );
















  // ------------------------------------------------------------------------------------------------
// clock example



// class Clock extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {date: new Date()};
//     }
  
//     componentDidMount() {
//       this.timerID = setInterval(
//         () => this.tick(),
//         1000
//       );
//     }
  
//     componentWillUnmount() {
//       clearInterval(this.timerID);
//     }
  
//     tick() {
//       this.setState({date: new Date()});
//     }
  
//     render() {
//       return (
//         <div>
//           <h1 className={this.props.color}>Hello, world!</h1>
//           <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//         </div>
//       );
//     }
//   }

//   function App() {
//     return (
//       <div>
//         <Clock color="red"/>
//         <Clock color="white"/>
//         <Clock color="orange"/>
//       </div>
//     );
//   }
  
  
//   ReactDOM.render(
//     <App />,
//     document.getElementById('root')
//   );










// ------------------------------------------------------------

//   setTimeout(() => {

//     ReactDOM.render(
//             <Welcome name="Akash Roy" />,
//             document.getElementById('root')
//           );
//   }, 10000);
// function Clock(props) {
//     return (
//     <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//     );
// }




// function tick() {
    
//     ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root')
//     );
// }

// setInterval(tick, 1000);
























// -----------------------------------------





// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
//   }
  
// //   const element = <Welcome name="Sara" />;

  
//   ReactDOM.render(
//     <Welcome name="Akash Roy" />,
//     document.getElementById('root')
//   );



// -----------------------------------


// // class Welcome extends React.Component {
// //     render() {
// //       return <h1>Hello!, {this.props.name}</h1>;
// //     }
// //   }

// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }
// // class App extends React.Component{
// //     render(){
// //         return(
// //             <div>
// //                 <Welcome name="Akash" />
// //                 <Welcome name="Akash Roy choudhury" />
// //                 <Welcome name="Edite" />
// //             </div>
// //         );
// //     }

// // }
// function App() {
//     return (
//     <div>
//         <Welcome name="Akash" />
//         <Welcome name="Akash Roy choudhury" />
//         <Welcome name="Edite" />
//     </div>
//     );
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );














// function formatName(user) {
//     return user.firstName + ' ' + user.lastName;
// }

// const user = {
//     firstName: 'Akash',
//     lastName: 'Roy Choudhury'
// };


// const element= <h1>Hello, {formatName(user)} </h1>



// ReactDOM.render(element,document.getElementById('root'));



// function tick() {
//     const element = (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
//   }
// setInterval(tick, 1000);






























// class Welcome extends React.Component {
//     render() {
//       return <h1>Hello, {this.props.name}</h1>;
//     }
//   }