
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

  const AddDriver = () => {

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
                      <h3 className="mb-0">My account</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      {/* <Button
                        color="primary"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        Settings
                      </Button> */}
                    </Col>
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
                      Vehicle information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Manufacturer
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue={""}
                              id="input-address"
                              placeholder="Manufacturer"
                              // onChange={() => handleOnChange}
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              Vehicle Type
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue={""}
                              id="input-city"
                              placeholder="Vehicle Type"
                              // onChange={() => handleOnChange}
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Max Weight
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue={""}
                              id="input-country"
                              placeholder="Max Weight"
                              // onChange={() => handleOnChange}
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Vehicle License
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-postal-code"
                              defaultValue={""}
                              placeholder="Vehicle License"
                              // onChange={() => handleOnChange}
                              type="number"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    <h6 className="heading-small text-muted mb-4">
                      Payment Details
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Account Holder Name
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue={""}
                              id="input-address"
                              placeholder="Account Holder Name"
                              // onChange={() => handleOnChange}
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              Account Number
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue={""}
                              id="input-city"
                              placeholder="Account Number"
                              // onChange={() => handleOnChange}
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Bank Name
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue={""}
                              id="input-country"
                              placeholder="Bank Name"
                              // onChange={() => handleOnChange()}
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <div className="align-items-center">
                    <Button variant="secondary" >
                      Submit
                    </Button></div>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  };

export default AddDriver;
