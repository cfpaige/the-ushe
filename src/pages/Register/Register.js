
import React, { Component } from "react";
import "./Register.css";

class Register extends Component {
  state = {
    email: "",
    password: "",
    username: "",
    city: "",
    state: "",
    allergies: "",
    bio: ""
  };

  componentDidMount() {
    document.body.classList.add("background-register");
  }

  handleFormSubmit = e => {
    e.preventDefault();
    alert(`Hello ${this.state.username}`);
  };

  render() {
    return (
      <div className="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
      <div className="wrapper wrapper--w680">
        <div className="card card-4">
          <div className="card-body">
            <h2 className="title">Registration Form</h2>
            <form method="POST">
              <div className="row row-space">
                <div className="col-6">
                  <div className="input-group">
                    <label className="label">Username</label>
                    <input className="input--style-4" type="text" name="username" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="input-group">
                    <label className="label">Email</label>
                    <input className="input--style-4" type="text" name="email" />
                  </div>
                </div>
              </div>
              <div className="row row-space">
                <div className="col-6">
                  <div className="input-group">
                    <label className="label">Password</label>
                    <div className="input-group-icon">
                      <input className="input--style-4" type="text" name="password" />
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="input-group">
                    <label className="label">Allergies</label>
                    <div className="input-group-icon">
                      <input className="input--style-4" type="text" name="text" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row row-space">
              <div className="col-6">
                  <div className="input-group">
                    <label className="label">City</label>
                    <div className="input-group-icon">
                      <input className="input--style-4" type="text" name="text" />
                    </div>
                  </div>
                </div>
              <div className="col-6">
                <label className="label">State</label>
                <div className="rs-select2 js-select-simple select--no-search">
                  <select name="subject">
                    <option disabled="disabled" selected="selected">Choose option</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                  </select>
                  <div className="select-dropdown" />
                </div>
              </div>
              </div>
              <div className="row row-space">
                <div className="col-12">
                  <div className="input-group">
                    <label className="label">Tell Us About Yourself</label>
                    <input className="input--style-4 tell-more" type="textarea" name="Bio" />
                  </div>
                </div>
                </div>
              <div className="p-t-15">
                <button className="btn btn--radius-2 btn--blue" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    
    
    
    );
  }
}

export default Register;
// import React, { Component } from "react";
// import "./Register.css";

// class Register extends Component {
//   state = {
//     email: "",
//     password: "",
//     username: "",
//     city: "",
//     state: "",
//     allergies: "",
//     bio: ""
//   };

//   componentDidMount() {
//     document.body.classList.add("background-register");
//   }

//   handleFormSubmit = e => {
//     e.preventDefault();
//     alert(`Hello ${this.state.username}`);
//   };

//   render() {
//     return (
//       <div className="card text-center">
//         <article class="card-body mx-auto" ></article>
//       <div className="container">
//         <div className="align-items-center">
        
//            <h1>
//             <span className="fa fa-sign-in" /> Register
//           </h1> 

//           <form>
//             <div className="form-group">
//               <input
//                 type="text"
//                 className="form-control textbox"
//                 placeholder="Email"
//                 name="email"
//                 id="email"
//                 value={this.state.email}
//                 onChange={e => this.setState({ email: e.target.value })}
//                 />
//             </div>
//             <div className="form-group">
//               <input
//                 type="password"
//                 className="form-control textbox"
//                 placeholder="Password"
//                 name="password"
//                 id="password"
//                 value={this.state.password}
//                 onChange={e => this.setState({ password: e.target.value })}
//               />
//             </div>
//             <div className="form-group">
//               <input
//                 type="text"
//                 className="form-control textbox"
//                 placeholder="Username"
//                 name="username"
//                 id="username"
//                 value={this.state.username}
//                 onChange={e => this.setState({ username: e.target.value })}
//               />
//             </div>
//             <div className="form-group">
//               <input
//                 type="text"
//                 className="form-control textbox"
//                 placeholder="City"
//                 name="city"
//                 id="city"
//                 value={this.state.city}
//                 onChange={e => this.setState({ city: e.target.value })}
//               />
//             </div>
//             <div className="form-group ">
//               <input
//                 type="text"
//                 className="form-control textbox"
//                 placeholder="State"
//                 name="state"
//                 id="state"
//                 value={this.state.state}
//                 onChange={e => this.setState({ state: e.target.value })}
//               />
//             </div>
//             <div className="form-group">
//               <input
//                 type="text"
//                 className="form-control textbox"
//                 placeholder="Allergies"
//                 name="allergies"
//                 id="allergies"
//                 value={this.state.allergies}
//                 onChange={e => this.setState({ allergies: e.target.value })}
//               />
//             </div>
//             <div className="form-group textbox">
//               <input
//                 type="textarea" rows="3"
//                 className="form-control textbox"
//                 placeholder="Bio"
//                 name="bio"
//                 id="bio"
//                 value={this.state.bio}
//                 onChange={e => this.setState({ bio: e.target.value })}
//               />
//             </div>

//             <button type="submit" className="btn btn-info btn-lg btn-block" onClick={this.handleFormSubmit}>
//               Create Account
//             </button>
//           </form>

//           <hr />

//           <p>
//             Already have an account? <a href="/login">Sign in.</a>
//           </p>
//           <p>
//             <a href="/">Go back to home page.</a>
//           </p>
//         </div>
//       </div>
//       <article/>
//     </div>  
//     );
//   }
// }

// export default Register;