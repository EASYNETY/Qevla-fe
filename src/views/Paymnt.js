
import React, { useState, useRef, useEffect } from "react";
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
  ModalHeader, ModalBody
} from "reactstrap";
// core components
import PaymentHeader from "components/Headers/Payment.js";
import BootstrapTable from "react-bootstrap-table-next";
// import PaginationFactory from "react-bootstrap-table2-paginator";
import { Modal } from "react-bootstrap";
import paginationFactory from "react-bootstrap-table2-paginator";
import "./modal.css"
import { Dropdown, DropdownButton } from 'react-bootstrap';
import CopyToClipboard from "react-copy-to-clipboard";
import TransactionTable from "./TransactionTable";


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



const Paymnt = ({data}) => {
  const [user, setUser] = React.useState(getFormValues);
  const [modalInfo, setModalInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [show, setShow] = useState(false);
  const driver = [];
  const [responseData, setResponseData] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);
  const [transactionData, setTransactionData] = useState([]);

  const [formData, setFormData] = useState({
    email: "dare@qevla.com",
    amount: "",
    subaccount: "ACCT_s95h9r7ezsdqgft",
    transaction_charge: 10000,
  });
  // const navigate = useHistory();

  // const { SearchBar } = Search;

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };


  useEffect(() => {
    // fetch("http://localhost:3001/api/user/payment/transactions") // Replace with your API endpoint
    fetch("http://54.226.34.22:3001/api/user/payment/transactions") // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setTransactionData(data.data));
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, amount, subaccount, transaction_charge } = formData;
    const payload = {
      email,
      amount,
      subaccount,
      transaction_charge,
    };

    // fetch("http://localhost:3001/api/user/accept-payment", {
      fetch("http://54.226.34.22:3001/api/user/accept-payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjI2ZjE5NmNjNmUwOGY2ZGU0ZTc3YTFjIiwibnVtYmVyIjoiMTIzNDU2NzgiLCJpYXQiOjE2NTE0NTA4NDEsImV4cCI6MTY1MTQ1ODA0MX0.I0ebFo0X6W3BYZ2zZNTuedBnYYa3_zdKAGnpg7u5Nvo",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        setApiResponse(data.data.authorization_url);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };


  const PaymentModal = ({ responseData, showModal, onClose }) => {
    const [copySuccess, setCopySuccess] = React.useState(false); // Initialize copySuccess state

    const copyTextRef = useRef(null);
    return (
      <Modal show={showModal} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Payment Authorization URL</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div ref={copyTextRef}>{responseData}</div>
          <CopyToClipboard
            text={responseData} // Text to copy
            onCopy={() => setCopySuccess(true)} // Callback when copy is successful
          >
            <Button variant="primary">
              {copySuccess ? 'Copied!' : 'Copy to Clipboard'}
            </Button>
          </CopyToClipboard>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
    
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to open the modal
  const openModal = () => {
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  const handleApiResponse = (apiResponse) => {
    setResponseData(apiResponse);
    openModal(); // Open the modal after receiving the response
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const rowEvents = {
    onClick: (e, row) => {
      console.log("Row list test", row.id);
      setModalInfo(row);
      // toggleTrueFalse();
    },
  };

  if (!user) {
    return <Redirect to="/login" />;
  }





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
                    <h3 className="mb-0">Add Payment for the order</h3>
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
                    <FormGroup>
                      <label for="amount">Enter Amount</label>
                      <Input
                        type="text"
                        name="amount"
                        id="amount"
                        placeholder="Enter amount"
                        value={formData.amount} // Populate the input value from state
                        onChange={handleInputChange} // Attach event handler
                      />
                    </FormGroup>
                  </div>
                  <div className="pl-lg-4">
                    <FormGroup>
                      <label for="subaccount">Sub Account</label>
                      <Input
                        type="text"
                        name="subaccount"
                        id="subaccount"
                        placeholder="Enter subaccount code"
                        value={formData.subaccount} // Populate the input value from state
                        onChange={handleInputChange} // Attach event handler
                      />
                    </FormGroup>
                  </div>
                  <div className="pl-lg-4">
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </div>
                  <Button variant="primary" style={{ float: "right" }} onClick={() => handleApiResponse(apiResponse)}>Copy the payment link</Button>

                  {/* Display the modal */}
                  <PaymentModal
                    responseData={responseData}
                    showModal={showModal}
                    onClose={closeModal}
                  />
                </Form>
              </CardBody>
            </Card>
          </Col>
          {/* </Row> */}
          {/* <Row> */}
          <Col className="order-xl-1" xl="8">
          <TransactionTable data={transactionData} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Paymnt;
