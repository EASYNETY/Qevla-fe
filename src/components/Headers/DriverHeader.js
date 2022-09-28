
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import React from "react";
import { Redirect } from "react-router-dom";



  function getFormValues() {
    const storedValues = localStorage.getItem("driver");
    if (!storedValues)
      return {
        email: "",
        message: "",
        name: "",
        telephone: "",
      };
    return JSON.parse(storedValues);
  }

  


const DriverHeader = () => {
      const [user, setUser] = React.useState(getFormValues);

      React.useEffect(() => {
        localStorage.getItem("driver", JSON.stringify(user));
      }, [user]);

      console.log("User data", user);
      // const { user: currentUser } = useSelector((state) => state.auth);

      // if (!user) {
      //   return <Redirect to="/login" />;
      // }
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
          <Row>
            <Col lg="7" md="10">
              <h1 className="display-2 text-white">Hello {user.first_name}</h1>
              <p className="text-white mt-0 mb-5">
                This is your profile page. You can see the progress you've made
                with your work and manage your projects or assigned tasks
              </p>
              <Button
                color="info"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                Edit profile
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default DriverHeader;
