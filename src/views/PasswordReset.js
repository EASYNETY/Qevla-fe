
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AuthService from "../services/auth_service";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

  function getFormValues() {
    const storedValues = localStorage.getItem("passReq");
    if (!storedValues)
      return {
        token: "",
        userId: "",

      };
    return JSON.parse(storedValues);
  }


const PasswordReset = () => {
  const [passReq, setPassReq] = React.useState(getFormValues);
  const [password, setPassword] = useState("");

  const navigate = useHistory();

  React.useEffect(() => {
    localStorage.getItem("passReq", JSON.stringify(passReq));
  }, [passReq]);

  console.log("PasswordResetRequest stored data", passReq);

  const handlePassRequest = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.passwordReset;
(passReq.token, passReq.userId, password).then(
  () => {
    navigate.push("/auth/login");
    // window.location.reload();
  },
  (error) => {
    console.log(error);
  }
);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

    const handleLoginButton = (e) => {
      e.preventDefault();
      navigate.push("/auth/login");
    };
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-3">
              <small>Sign in here</small>
            </div>
            <div className="btn-wrapper text-center"></div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small></small>
            </div>
            <Form role="form" onSubmit={handlePassRequest}>
              {/* <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email address"
                    type="email"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </InputGroup>
              </FormGroup> */}
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              {/* <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div> */}
              {/* <div className="text-center">
                <Button type="submit" className="my-4" color="primary">
                  Sign in
                </Button>
              </div> */}
              <div className="my-4" color="primary">
                <button
                  className="btn btn-primary btn-block"
                  // disabled={loading}
                >
                  {/* {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )} */}
                  <span>Reset Password</span>
                </button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          {/* <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot passwordword?</small>
            </a>
          </Col> */}
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="auth/login"
              onClick={() => handleLoginButton()}
            >
              <small>Remembered password? Login!</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default PasswordReset;

