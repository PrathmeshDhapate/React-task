import React, { Component } from 'react'
import './Form.css'

  class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
        name:'' ,
        email:'',
        username:'',
        password:'',
        confirmpassword:'',
        dob:'',
        contact:''
    }
    this.forToggle = this.forToggle.bind(this);
    this.submitting = this.submitting.bind(this);
  }
  
   onChangingName = (event) => {
      this.setState({
        name:event.target.value
      })
   }

   onChangingEmail = (event) => {
    this.setState({
        email:event.target.value
    })
   }

   onChangingUser = (event) => {
    this.setState({
        username:event.target.value
    })
   }

   onChangingPass = (event) => {
    this.setState ({
        password:event.target.value
    })
   }
  
   onChangingConfirmPass = (event)=> {
    this.setState({
        confirmpassword:event.target.value
    })
   }

   onChangingDOB = (event) => {
    this.setState({
        dob:event.target.value
    })
   }

   onChangingContact = (event => {
    this.setState ({
        contact:event.target.value
    })
   })
  
   forToggle = () => {
    const container = document.querySelector('#container');
    container.classList.toggle('lighttheme');
    container.classList.toggle('darktheme');
   }

   submitting = (event) => {
      event.preventDefault();
      alert('The form is submitted',this.state);
   }
  
  
    render() {
    return (
        <div id='container' className='lighttheme'>
        <h1>Registration Form</h1>
      <form>
      
      <div className="Contents">
        <label>Name</label>
        <input type='text' value={this.state.name} onChange={this.onChangingName} />
      </div>
      <div className="Contents">
        <label>Email</label>
        <input type = 'email' value={this.state.email} onChange={this.onChangingEmail} />
      </div>
      <div className="Contents">
        <label>Username</label>
        <input type = 'text' value={this.state.username} onChange={this.onChangingUser} />
      </div>
      <div className="Contents">
        <label>Password</label>
        <input type = 'password' value={this.state.password} onChange={this.onChangingPass} />
      </div>
      <div className="Contents">
        <label>Confirm Password</label>
        <input type = 'password' value={this.state.confirmpassword} onChange={this.onChangingConfirmPass} />
      </div>
      <div className="Contents">
        <label>Date of Birth</label>
        <input type = 'date' value={this.state.dateofbirth} onChange={this.onChangingDOB} />
      </div>
      <div className="Contents">
        <label>Phone Number</label>
        <input type = 'tel' value={this.state.contact} onChange={this.onChangingContact} />
      </div>
      <button className = "toggle" type="button" onClick={this.forToggle}>Toggle Button</button>
      <button type="button" onClick={this.submitting}>Submit</button>
      </form>
      </div>
    )
  }
}
export default Form
