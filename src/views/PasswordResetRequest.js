
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

const PasswordResetRequest = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useHistory();

  const handlePassRequest = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.requestPasswordReset(
        email
      ).then(
        () => {
          navigate.push("/auth/reset-password");
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
              <small>Enter your email to request a password change</small>
            </div>
            <div className="btn-wrapper text-center"></div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <Form role="form" onSubmit={handlePassRequest}>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Enter your email address"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
              </FormGroup>
              <div className="my-4" color="primary">
                <button className="btn btn-primary btn-block">
                  <span>Request Password Reset</span>
                </button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
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

export default PasswordResetRequest;

