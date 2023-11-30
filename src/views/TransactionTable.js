import React, { useState } from "react";
import {Dropdown, DropdownButton } from "react-bootstrap";
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
    ModalHeader,
    ModalBody
} from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import PaymentModal from "./PaymentModal";

// ...

// Define a component to display the transaction data in a table
const TransactionTable = ({ data }) => {
    const [show, setShow] = useState(false);
    const [selectedPayment, setSelectedPayment] = useState(null);
    const [showModal, setShowModal] = useState(false);

    // Handle row click to show the modal
    const handleRowClick = (row) => {
        setSelectedPayment(row);
        setShowModal(true);
    };

    // Close the modal
    const closeModal = () => {
        setSelectedPayment(null);
        setShowModal(false);
    }

    console.log(selectedPayment);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Define columns for the table
    const columns = [
        { dataField: "id", text: "Payment ID" },
        { dataField: "subaccount.business_name", text: "Acc Holder", style: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' } },
        { dataField: "subaccount.account_number", text: "Acc Number", style: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' } },
        { dataField: "subaccount.settlement_bank", text: "Bank Name", style: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' } },
        { dataField: "amount", text: "Amount" },
        // Add more payment-related columns as needed
        // {
        //     text: "Actions",
        //     formatter: (cellContent, row) => (
        //         <DropdownButton title="Actions">
        //             <Dropdown.Item onClick={() => handleRowClick(row)}>View</Dropdown.Item>
        //             {/* <Dropdown.Item onClick={() => handleDeleteRow(row.id)}>Delete</Dropdown.Item> */}
        //         </DropdownButton>
        //     ),
        // },
    ];

    return (
        <Card className="bg-secondary shadow">
            <CardHeader className="border-0">
                <h3 className="mb-0" style={{ float: "left" }}>
                    Track Driver Payment History
                </h3>
            </CardHeader>
            <CardBody>
                <Row>
                    <div className="col">
                        <Card className="shadow">
                            <BootstrapTable
                                keyField="id"
                                data={data} // Pass the transaction data to the table
                                columns={columns}
                                pagination={paginationFactory()}
                                rowEvents={{ onClick: handleRowClick }} // Handle row click event
                            />
                        </Card>
                    </div>
                </Row>
            </CardBody>
            {/* Modal */}
            {selectedPayment && (
                <PaymentModal
                    show={showModal}
                    onHide={closeModal}
                    payment={selectedPayment}
                />
            )}
        </Card>
    );
};

export default TransactionTable;
