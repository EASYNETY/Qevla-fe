
// reactstrap components
import { Button, Container, Row, Col, Card, CardBody, CardTitle } from "reactstrap";
import React from "react";
import { Redirect } from "react-router-dom";
import { } from "reactstrap";




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

  


const PaymentHeader = () => {
      const [user, setUser] = React.useState(getFormValues);

      React.useEffect(() => {
        localStorage.getItem("user", JSON.stringify(user));
      }, [user]);

      if (!user) {
        return <Redirect to="/login" />;
      }
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            "url(" +
            require("../../assets/img/brand/qevla_logo.png").default +
            ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
       
        </Container>
      </div>
    </>
  );
};

export default PaymentHeader;
