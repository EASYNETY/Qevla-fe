
import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
import DriverRegHeader from "components/Headers/DriverRegHeader";

  const AddAdmin = () => {

    return (
      <>
        <DriverRegHeader />
        {/* Page content */}
        <Container lassName="mt--14 my-auto">
          <Row lassName="mt--14">
            <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
              <Card className="card-profile shadow"></Card>
            </Col>
            <Col className="order-xl-1" xl="8">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Add New Admin</h3>
                    </Col>
                    <Col className="text-right" xs="4"></Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      Personal information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              First name
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue={""}
                              id="input-username"
                              placeholder="First Name"
                              name="first_name"
                              // onChange={() => handleOnChange}
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Last name
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue={""}
                              id="input-username"
                              placeholder="Last Name"
                              name="last_name"
                              // onChange={() => handleOnChange}
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Phone Number
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue={""}
                              id="number"
                              placeholder="Phone Number"
                              // onChange={() => handleOnChange}
                              type="number"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="email"
                            >
                              Email address
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="email"
                              placeholder={""}
                              // onChange={() => handleOnChange}
                              type="email"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              DOB
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue={""}
                              id="dbo"
                              placeholder="Date of birth"
                              // onChange={() => handleOnChange}
                              type="date"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Password
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue={"123456"}
                              id="password"
                              readOnly
                              // placeholder="Last name"
                              // onChange={() => handleOnChange}
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    <h6 className="heading-small text-muted mb-4">
                      Contact information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Address
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue={""}
                              id="input-address"
                              placeholder="Vehicle Address"
                              // onChange={() => handleOnChange}
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Button variant="secondary">Submit</Button>
                    </div>
                    <div className="left"></div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  };

export default AddAdmin;
