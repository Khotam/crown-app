import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./sign-up.styles.scss";
import { connect } from "react-redux";
import { setCurrentUserSignUpError } from "../../redux/reducers/user/user.actions";
import { selectSignUpError } from "../../redux/reducers/user/user.selectors";
import { createRef } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    this.errorRef = createRef(null);

    this.timeout = null;
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      this.props.setCurrentUserSignUpError(error);

      if (this.errorRef.current) {
        this.errorRef.current.style.opacity = 0;
        this.timeout = setTimeout(() => {
          this.errorRef.current.style.opacity = 1;
        }, 300);
      }
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    const { error } = this.props;

    return (
      <div ref={this.signUpRef} className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            value={displayName}
            name="displayName"
            onChange={this.handleChange}
            label="Display name"
            required
          />
          <FormInput
            type="email"
            value={email}
            name="email"
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            value={password}
            name="password"
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            value={confirmPassword}
            name="confirmPassword"
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          {error ? (
            <p className="error" ref={this.errorRef}>
              {error.message}
            </p>
          ) : null}
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: selectSignUpError(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUserSignUpError: (error) =>
      dispatch(setCurrentUserSignUpError(error)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
