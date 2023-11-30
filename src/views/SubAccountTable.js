import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Dropdown, DropdownButton } from "react-bootstrap";
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

const SubaccountTable = ({ data }) => {
  const columns = [
    { dataField: "id", text: "Payment ID" },
    { dataField: "business_name", text: "Account Holder Name", style: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' } },
    { dataField: "account_number", text: "Account Number", style: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' } },
    { dataField: "settlement_bank", text: "Bank Name", style: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' } },
    { dataField: "percentage_charge", text: "Percentage Charge", style: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' } },
    // {
    //   text: "Actions",
    //   formatter: (cellContent, row) => (
    //     <DropdownButton title="Actions">
    //       <Dropdown.Item onClick={() => handleShow(row)}>View</Dropdown.Item>
    //       <Dropdown.Item onClick={() => handleDeleteRow(row.id)}>
    //         Delete
    //       </Dropdown.Item>
    //     </DropdownButton>
    //   ),
    // },
  ];

  return (
    <div className="col">
      <Card className="shadow">
        <BootstrapTable
          keyField="id"
          data={data}
          columns={columns}
          pagination={paginationFactory()}
        />
      </Card>
    </div>
  );
};

export default SubaccountTable;
