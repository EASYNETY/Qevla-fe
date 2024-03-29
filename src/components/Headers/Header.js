import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import { fetchAllDrivers } from "services/onboarding-service";
import axios from "axios";
import { endpoints } from "../../api-endpoints";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { isSuccessful } from "../../utils/tools";
// import { useSelector, useDispatch } from "react-redux";
import { fetchDrivers } from "services/onboarding-service";
import Drivers from "views/Drivers";




const Header = () => {

  // const dispatch = useDispatch();
  const [drivers, setDrivers] = useState([]);
  const [admins, setAdmins] = useState([]);

useEffect(() => {
  async function fetchUsers() {
    const fullResponse = await fetch(endpoints.getDrivers);
    const responseJson = await fullResponse.json();
    const drivers = responseJson.users.filter(user => user.isAdmin === false);
    const admins = responseJson.users.filter(user => user.isAdmin === true);

    // console.log("Created drivers>>>>>>>: from headers responses", responseJson);
    setDrivers(drivers);
    setAdmins(admins);
  }

  fetchUsers();
}, []);
console.log("Drivers on dashboard", drivers.count)
console.log("Admins on dashboard", admins.count)
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Total Drivers
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          {drivers.length}
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="fas fa-chart-bar" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> %
                      </span>{" "}
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Total Admin
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                       
                            {admins.length}
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                          <i className="fas fa-chart-pie" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-danger mr-2">
                        <i className="fas fa-arrow-down" /> %
                      </span>{" "}
                      <span className="text-nowrap">Since last week</span>
                    </p>
                  </CardBody>
                </Card>
              </Col>
             <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Total Active Driver
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">                            
                        {drivers.length}
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                          <i className="fas fa-users" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-warning mr-2">
                        <i className="fas fa-arrow-down" /> 1.10%
                      </span>{" "}
                      <span className="text-nowrap">Since yesterday</span>
                    </p>
                  </CardBody>
                </Card>
              </Col> 
               <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Payments
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">49,65%</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                          <i className="fas fa-percent" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        <i className="fas fa-arrow-up" /> 12%
                      </span>{" "}
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </CardBody>
                </Card>
              </Col> 
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
