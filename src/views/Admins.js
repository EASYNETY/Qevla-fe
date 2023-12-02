import {
  Card,
  CardHeader,
  Container,
  Row,
} from "reactstrap";

import {
  CardBody,
  FormGroup,
  Form,
  Input,
  Col,
} from "reactstrap";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
// import PaginationFactory from "react-bootstrap-table2-paginator";
import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Header from "components/Headers/Header.js";
import React, { useState, useEffect } from "react";
import { endpoints } from "../api-endpoints";
import paginationFactory from "react-bootstrap-table2-paginator";
import "./modal.css"
import userService from "services/user.service";
import { Dropdown, DropdownButton } from 'react-bootstrap';
import axios from "axios";
// import { param } from "jquery";

const Admins = () => {
  const [modalInfo, setModalInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);
  const [state, setState] = useState();
  const [drivers, setDrivers] = useState([]);
  const driver = [];
  // const navigate = useHistory();

  // const { SearchBar } = Search;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    async function fetchUsers() {
      const fullResponse = await fetch(endpoints.getDrivers);
      const responseJson = await fullResponse.json();
      const drivers = responseJson.users.filter(user => user.isAdmin === true);
      setDrivers(drivers);
    }
    fetchUsers();
  }, []);

  drivers.forEach((user) => {
    driver.push(user);
  });

  console.log(
    "Created drivers>>>>>>> from headers from map markers used",
    driver
  );


  const rowEvents = {
    onClick: (e, row) => {
      console.log("Row list test", row.id);
      setModalInfo(row);
      // toggleTrueFalse();
    },
  };

  const toggleTrueFalse = () => {
    setShowModal(handleShow)
  }

//   const submitform() {
//     //Now I have the all values wrapped in a object to send to server
// }

const handleOnChange = (e) => {
    const { value, name } = e.target
    setState({ [name] : value })
};

    const handleUpdate = async (e) => {
      e.preventDefault();
      try {
    const formData = state

        const response = await userService.updateUser.concat(`${modalInfo.Id}`).then(
          () => {
            // navigate.push("/admin/index");
            console.log(response)
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


  const columns = [
    { dataField: "first_name", text: "Driver First Name" },
    { dataField: "last_name", text: "Driver Last Name" },
    { dataField: "email", text: "Driver Email" },
    { dataField: "number", text: "Driver Phone" },
    { dataField: "vehicle_details.v_license", text: "License Number" },
    // {
    //   text: 'Actions',
    //   formatter: (cell, row) => (
    //     <button onClick={() => handleDeleteRow(row._id)}>Delete</button>
    //   ),
    // },
   
    {
      text: "Actions",
      formatter: (cellContent, row) => (
        <DropdownButton title="Actions">
          <Dropdown.Item onClick={() => handleShow(row)}>View</Dropdown.Item>
          <Dropdown.Item onClick={() => handleDeleteRow(row._id)}>Delete</Dropdown.Item>
        </DropdownButton>
      ),
    },
  ];

  function handleDelete(id) {
    axios.delete("http://54.226.34.22:3001/api/user/delete", {
      // method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id })
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete the row.");
        }
        // Implement the logic to update the table after the row is deleted
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  
  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <CardHeader className="border-0">
          <h3 className="mb-0">Drivers list</h3>
        </CardHeader>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Drivers list</h3>
              </CardHeader>

              <BootstrapTable
                keyField="email"
                data={driver}
                columns={columns}
                pagination={paginationFactory()}
                rowEvents={rowEvents}
              />
            </Card>
          </div>
        </Row>
        {show ? <ModalContent /> : null}
      </Container>
    </>
  );
};

export default Admins;
