
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
// core components
import PaymentHeader from "components/Headers/Payment.js";
import BootstrapTable from "react-bootstrap-table-next";
// import PaginationFactory from "react-bootstrap-table2-paginator";
import { Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import paginationFactory from "react-bootstrap-table2-paginator";
import "./modal.css"
import { Dropdown, DropdownButton } from 'react-bootstrap';
import SubaccountTable from "./SubAccountTable";

function getFormValues() {
  const storedValues = localStorage.getItem("user");
  if (!storedValues)
    return {
      email: "",
      message: "",
      name: "",
      telephone: "",
    };
  return JSON.parse(storedValues);
}

const SubAccounts = () => {
  const [user, setUser] = React.useState(getFormValues);
  const [modalInfo, setModalInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);
  const [state, setState] = useState();
  const [drivers, setDrivers] = useState([]);
  const driver = [];

  const [subaccountData, setSubaccountData] = useState([]);

  useEffect(() => {
    // Fetch subaccount data from your API here
    // Example fetch request:
    fetchSubaccountData();
  }, []);

  const fetchSubaccountData = async () => {
    try {
      // Replace with your API endpoint and authorization header
      const response = await fetch(
        "http://54.226.34.22:3001/api/user/payment/get-subaccount",
        {
          headers: {
            Authorization: "Bearer YOUR_ACCESS_TOKEN",
          },
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        setSubaccountData(responseData.data);
      } else {
        console.error("Failed to fetch subaccount data");
      }
    } catch (error) {
      console.error("Error fetching subaccount data:", error);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    business_name: "",
    settlement_bank: "",
    account_number: "",
    percentage_charge: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the POST request data
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer YOUR_ACCESS_TOKEN`, // Replace with your actual token
      },
      body: JSON.stringify(formData),
    };

    // Send the POST request
    try {
      const response = await fetch(
        "http://54.226.34.22:3001/api/user/create-subaccount",
        requestOptions
      );

      if (response.ok) {
        console.log("Subaccount created successfully!");
        // Handle success, e.g., show a success message to the user
      } else {
        console.error("Failed to create subaccount");
        // Handle error, e.g., show an error message to the user
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };




  const rowEvents = {
    onClick: (e, row) => {
      console.log("Row list test", row.id);
      setModalInfo(row);
      // toggleTrueFalse();
    },
  };

  React.useEffect(() => {
    localStorage.getItem("user", JSON.stringify(user));
  }, [user]);

  console.log("User data", user);
  // const { user: currentUser } = useSelector((state) => state.auth);

  if (!user) {
    return <Redirect to="/login" />;
  }

  const columns = [
    { dataField: "id", text: "Payment ID" },
    { dataField: "account_holder_name", text: "Account Holder Name" },
    { dataField: "account_number", text: "Account Number" },
    { dataField: "bank_name", text: "Bank Name" },
    { dataField: "amount", text: "Amount" },
    // Add more payment-related columns as needed
    {
      text: "Actions",
      formatter: (cellContent, row) => (
        <DropdownButton title="Actions">
          <Dropdown.Item onClick={() => handleShow(row)}>View</Dropdown.Item>
          <Dropdown.Item onClick={() => handleDeleteRow(row.id)}>
            Delete
          </Dropdown.Item>
        </DropdownButton>
      ),
    },
  ];


  // Function to handle row deletion
  const handleDeleteRow = (id) => {
    // Construct the request body
    const requestBody = {
      id: id
    };

    fetch('http://54.226.34.22:3001/api/user/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
      .then(response => {
        if (response.ok) {
          const updatedDriver = driver.filter(driver => driver.id !== id);
          setModalInfo(updatedDriver);
          window.location.reload();
        } else {
          console.error('Failed to delete driver:', response.statusText);
        }
      })
      .catch(error => {
        console.error('Failed to delete driver:', error);
      });
  };


  const ModalContent = () => {
    return (
      <Modal
        show={show}
        onHide={handleClose}
        className="modal-width"
        contentClassName="transparentBgClass"
        dialogClassName="modal-width"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeLabel="X">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Modal.Title>
            {modalInfo.first_name} {modalInfo.last_name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid>
            <Row>
              <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
                <Card className="card-profile shadow">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={
                              require("../assets/img/brand/qevla_logo1.png")
                                .default
                            }
                          />
                        </a>
                      </div>
                    </Col>
                  </Row>
                  <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                    <div className="d-flex justify-content-between">
                      <Button
                        className="mr-4"
                        color="info"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        {/* Approve */}
                      </Button>
                      <Button
                        className="float-right"
                        color="default"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        {/* Delete */}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody className="pt-0 pt-md-4">
                    <Row>
                      <div className="col">
                        <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                          <div>
                            <span className="heading">22</span>
                            <span className="description">Total Tows</span>
                          </div>
                          <div>
                            <span className="heading">10</span>
                            <span className="description">Commissioned Tows</span>
                          </div>
                          <div>
                            <span className="heading">89</span>
                            <span className="description">
                              Total tow Commission owed
                            </span>
                          </div>
                        </div>
                      </div>
                    </Row>
                    <div className="text-center">
                      <h3>
                        {modalInfo.first_name} {modalInfo.last_name}
                        <span className="font-weight-light"></span>
                      </h3>
                      <div className="h5 font-weight-300">
                        <i className="ni location_pin mr-2" />
                        Current Address:{" "}
                        <b>{modalInfo.vehicle_details.address}</b>
                      </div>

                      <hr className="my-4" />
                      <p>
                        {modalInfo.first_name} — registered on{" "}
                        {modalInfo.createdAt}, with license{" "}
                        <b>{modalInfo.vehicle_details.v_license}</b>
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col className="order-xl-1" xl="8">
                <Card className="bg-secondary shadow">
                  <CardHeader className="bg-white border-0">
                    <Row className="align-items-center">
                      <Col xs="8">
                        <h3 className="mb-0">My account</h3>
                      </Col>
                      <Col className="text-right" xs="4">
                        <Button
                          color="primary"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          size="sm"
                        >
                          Settings
                        </Button>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <Form>
                      <h6 className="heading-small text-muted mb-4">
                        User information
                      </h6>
                      <div className="pl-lg-4">
                        <Row>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-username"
                              >
                                Username
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue={modalInfo.first_name}
                                id="input-username"
                                placeholder="Username"
                                // onChange={() => handleOnChange}
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-email"
                              >
                                Email address
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-email"
                                placeholder={modalInfo.email}
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
                                First name
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue={modalInfo.first_name}
                                id="input-first-name"
                                placeholder="First name"
                                // onChange={() => handleOnChange}
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="6">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-last-name"
                              >
                                Last name
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue={modalInfo.last_name}
                                id="input-last-name"
                                placeholder="Last name"
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
                                defaultValue={modalInfo.vehicle_details.address}
                                id="input-address"
                                placeholder="Vehicle Address"
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
                                Phone Number
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue={modalInfo.number}
                                id="input-city"
                                placeholder="Phone Number"
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
                                defaultValue={modalInfo.vehicle_details.address}
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
                                defaultValue={modalInfo.vehicle_details.address}
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
                                defaultValue={
                                  modalInfo.vehicle_details.max_weight
                                }
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
                                defaultValue={modalInfo.vehicle_details.v_license}
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
                                defaultValue={
                                  modalInfo.payment_details.bank_holder_name
                                }
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
                                defaultValue={
                                  modalInfo.payment_details.account_number
                                }
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
                                defaultValue={modalInfo.payment_details.bank_name}
                                id="input-country"
                                placeholder="Bank Name"
                                // onChange={() => handleOnChange()}
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleUpdate}>
          Update
        </Button> */}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };


  return (
    <>
      <PaymentHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>

          <Col>
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Add Driver Account as SubAccount</h3>
                  </Col>
                  <Col className="text-right" xs="4"></Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <h6 className="heading-small text-muted mb-4">
                    Enter transaction details below
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Business Name
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="business_name"
                            name="business_name"
                            placeholder="Enter Business Name"
                            type="text"
                            value={formData.business_name}
                            onChange={handleChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="account_number">
                            Settlement Bank
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="settlement_bank"
                            name="settlement_bank"
                            type="text"
                            value={formData.settlement_bank}
                            onChange={handleChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="percentage_charge">
                            Percentage Charge
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="percentage_charge"
                            name="percentage_charge"
                            type="text"
                            value={formData.percentage_charge}
                            onChange={handleChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label className="form-control-label" htmlFor="account_number">
                            Account Number
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="account_number"
                            name="account_number"
                            type="text"
                            value={formData.account_number}
                            onChange={handleChange}
                          />
                        </FormGroup>
                      </Col>

                    </Row>
                  </div>

                  <div className="pl-lg-4">
                    <Button variant="primary">Submit</Button>
                  </div>
                  <div className="left"></div>
                </Form>
              </CardBody>
            </Card>
          </Col>
          {/* </Row> */}
          {/* <Row> */}
          <Col className="order-xl-1" xl="8">
           <SubaccountTable data={ subaccountData } />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SubAccounts;
