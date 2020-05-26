import React, { createRef } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-in.styles.scss";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUserSignInError } from "../../redux/reducers/user/user.actions";
import { selectSignInError } from "../../redux/reducers/user/user.selectors";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
    this.errorRef = createRef(null);

    this.timeout = null;
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      this.props.setCurrentUserSignInError(error);

      if (this.errorRef.current) {
        console.log(this.errorRef.current);
        this.errorRef.current.style.opacity = 0;
        this.timeout = setTimeout(() => {
          this.errorRef.current.style.opacity = 1;
        }, 500);
      }
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    const { error } = this.props;

    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          {error ? (
            <p className="error" ref={this.errorRef}>
              {error.message}
            </p>
          ) : null}
          <div className="buttons">
            <CustomButton type="submit"> Sign in </CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn="true"
            >
              {" "}
              Sign in with Google{" "}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUserSignInError: (error) =>
      dispatch(setCurrentUserSignInError(error)),
  };
};

const mapStateToProps = (state) => {
  return {
    error: selectSignInError(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
