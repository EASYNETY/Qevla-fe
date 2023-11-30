import React from "react";
import { Modal, Button } from "react-bootstrap";

const PaymentModal = ({ selectedPayment, showModal, onClose }) => {
  if (!selectedPayment) {
    return null; // Render nothing if selectedPayment is undefined
  }

  return (
    <Modal show={showModal} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Payment Authorization URL</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><strong>Payment ID:</strong> {selectedPayment.id}</p>
        <p><strong>Account Holder Name:</strong> {selectedPayment.subaccount.business_name}</p>
        <p><strong>Account Number:</strong> {selectedPayment.subaccount.account_number}</p>
        <p><strong>Bank Name:</strong> {selectedPayment.subaccount.settlement_bank}</p>
        <p><strong>Amount:</strong> {selectedPayment.amount}</p>
        {/* Add a "Copy to Clipboard" button here */}
        {/* Implement copy-to-clipboard logic */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PaymentModal;
