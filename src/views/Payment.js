import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Col,
} from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Modal, Button } from "react-bootstrap";
import { Dropdown, DropdownButton } from "react-bootstrap";
import axios from "axios";
import Header from "components/Headers/Header.js";
import userService from "services/user.service";
import { endpoints } from "../api-endpoints";
import "./modal.css";

const PaymentList = () => {
  const [modalInfo, setModalInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);
  const [state, setState] = useState();
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    async function fetchPayments() {
      const fullResponse = await fetch(endpoints.getPayments);
      const responseJson = await fullResponse.json();
      const payments = responseJson.payments; // Replace with actual payment data
      setPayments(payments);
    }
    fetchPayments();
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setState({ [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const formData = state;

      const response = await userService
        .updateUser // Update this to your payment update endpoint
        .concat(`${modalInfo.Id}`)
        .then(
          () => {
            console.log(response);
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

  const rowEvents = {
    onClick: (e, row) => {
      console.log("Row list test", row.id);
      setModalInfo(row);
    },
  };

  const toggleTrueFalse = () => {
    setShowModal(handleShow);
  };

  const columns = [
    { dataField: "id", text: "Payment ID" },
    { dataField: "account_holder_name", text: "Account Holder Name" },
    { dataField: "account_number", text: "Account Number" },
    { dataField: "bank_name", text: "Bank Name" },
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

  const handleDeleteRow = (id) => {
    const requestBody = {
      id: id,
    };

    fetch("http://54.210.50.74:3001/api/payment/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (response.ok) {
          const updatedPayments = payments.filter(
            (payment) => payment.id !== id
          );
          setPayments(updatedPayments);
          window.location.reload();
        } else {
          console.error("Failed to delete payment:", response.statusText);
        }
      })
      .catch((error) => {
        console.error("Failed to delete payment:", error);
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
            {modalInfo.account_holder_name}'s Payment Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Payment details content here */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <CardHeader className="border-0">
          <h3 className="mb-0">Payments List</h3>
        </CardHeader>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Payments List</h3>
              </CardHeader>
              <ToolkitProvider
                keyField="id"
                data={"payments"}
                columns={columns}
                search
              >
                {/* {(props) => (
                  <div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <SearchBar {...props.searchProps} />
                        </div>
                      </div>
                    </div>
                    <BootstrapTable
                      {...props.baseProps}
                      pagination={paginationFactory()}
                      rowEvents={rowEvents}
                    />
                  </div>
                )} */}
              </ToolkitProvider>
            </Card>
          </div>
        </Row>
        {show ? <ModalContent /> : null}
      </Container>
    </>
  );
};

export default PaymentList;
