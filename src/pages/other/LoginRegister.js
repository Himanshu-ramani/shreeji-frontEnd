import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { apiCall, isObjWithValues } from "../../helper";
import { useDispatch } from "react-redux";
import { UPDATE_USER } from "../../redux/actions/userActions";
import { Snackbar } from "@mui/joy";
// import { useNavigate } from "react-router-dom";
const LoginRegister = ({ location }) => {
  const { pathname } = location;
  const dispatch = useDispatch();

  const [loginState, setLoginState] = useState({
    username: "",
    password: "",
  });
  const [regState, setRegState] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [activeKey, setActiveKey] = useState("login");
  const [snackbar, setSnackbar] = useState(false);
  const editRegister = (payload) =>
    setRegState((pre) => ({ ...pre, ...payload }));
  const editLogin = (payload) =>
    setLoginState((pre) => ({ ...pre, ...payload }));
  const login = async () => {
    let res = await apiCall({
      endpoint: "api/auth/login",
      method: "POST",
      data: loginState,
    });

    if (isObjWithValues(res)) {
      dispatch({
        type: UPDATE_USER,
        payload: {
          user: res,
        },
      });
      setSnackbar("Login successFully Shop now!");
    }
    console.log(res);
  };

  const register = async () => {
    let res = await apiCall({
      endpoint: "api/auth/register",
      method: "POST",
      data: regState,
    });
    if (isObjWithValues(res)) {
      setActiveKey("login");
      editLogin({
        password: regState.password,
        username: regState.username,
      });
      setSnackbar("Register successFully! now You can Login!");
    }
  };

  return (
    <Fragment>
      <Snackbar
        open={snackbar}
        onClose={() => setSnackbar(false)}
        autoHideDuration={2000}
        color="success"
        size="md"
        variant="plain"
      >
        {snackbar}
      </Snackbar>
      <MetaTags>
        <title>Flone | Login</title>
        <meta
          name="description"
          content="Compare page of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Login Register
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                <div className="login-register-wrapper">
                  <Tab.Container defaultActiveKey="login" activeKey={activeKey}>
                    <Nav variant="pills" className="login-register-tab-list">
                      <Nav.Item>
                        <Nav.Link
                          eventKey="login"
                          onClick={() => setActiveKey("login")}
                        >
                          <h4>Login</h4>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item onClick={() => setActiveKey("register")}>
                        <Nav.Link eventKey="register">
                          <h4>Register</h4>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="login">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form
                              onSubmit={(e) => {
                                e.preventDefault();
                                login();
                              }}
                            >
                              <input
                                type="text"
                                name="user-name"
                                placeholder="Username"
                                value={login.username}
                                onChange={(e) =>
                                  editLogin({ username: e.target.value })
                                }
                              />
                              <input
                                type="password"
                                name="user-password"
                                placeholder="Password"
                                value={login.password}
                                onChange={(e) =>
                                  editLogin({ password: e.target.value })
                                }
                              />
                              <div className="button-box">
                                <div className="login-toggle-btn">
                                  <input type="checkbox" />
                                  <label className="ml-10">Remember me</label>
                                  <Link to={process.env.PUBLIC_URL + "/"}>
                                    Forgot Password?
                                  </Link>
                                </div>
                                <button type="submit">
                                  <span>Login</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="register">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form
                              onSubmit={(e) => {
                                e.preventDefault();
                                register();
                              }}
                            >
                              <input
                                type="text"
                                name="user-name"
                                placeholder="Username"
                                value={regState.username}
                                onChange={(e) =>
                                  editRegister({ username: e.target.value })
                                }
                              />
                              <input
                                type="password"
                                name="user-password"
                                placeholder="Password"
                                value={regState.password}
                                onChange={(e) =>
                                  editRegister({ password: e.target.value })
                                }
                              />
                              <input
                                name="user-email"
                                placeholder="Email"
                                type="email"
                                value={regState.email}
                                onChange={(e) =>
                                  editRegister({ email: e.target.value })
                                }
                              />
                              <div className="button-box">
                                <button type="submit">
                                  <span>Register</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

LoginRegister.propTypes = {
  location: PropTypes.object,
};

export default LoginRegister;
