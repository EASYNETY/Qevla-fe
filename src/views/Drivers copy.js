import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  // UncontrolledTooltip,
} from "reactstrap";
// core components
import { useHistory } from "react-router-dom";
import Header from "components/Headers/Header.js";
import React, { useState, useEffect } from "react";
// import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import { endpoints } from "../api-endpoints";

const Drivers = () => {
  const [drivers, setDrivers] = useState([]);
  const driver = [];
  const navigate = useHistory();

  useEffect(() => {
    async function fetchUsers() {
      const fullResponse = await fetch(endpoints.getDrivers);
      const responseJson = await fullResponse.json();
      setDrivers(responseJson.users);
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

  const handleViewDriver = (drivers) => {
      window.localStorage.setItem("driver", JSON.stringify(drivers));
      // window.localStorage.setItem("driver", JSON.stringify(driver))
      navigate.push("/driver-profile")   
  };

    

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}

        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Drivers list</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Numebr</th>
                    <th scope="col">Vehicle</th>
                    <th scope="col">Reg. Status</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {driver.map((d) => (
                    <tr key={d._id}>
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={
                                require("../assets/img/theme/bootstrap.jpg")
                                  .default
                              }
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              {d.fist_name} {d.last_name}
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>{d.email}</td>
                      <td>
                        <Badge color="" className="badge-dot mr-4">
                          <i className="bg-warning" />
                          {d.number}
                        </Badge>
                      </td>
                      <td>{d.vehicle_details.v_license}</td>
                      <td>
                        <div className="d-flex align-items-center">
                          <span className="mr-2">completed</span>
                          <div>
                            <Progress
                              max="100"
                              value="100"
                              barClassName="bg-success"
                            />
                          </div>
                        </div>
                      </td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#pablo"
                            role="button"
                            size="sm"
                            color=""
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="/driver-profile"
                              onClick={() => handleViewDriver(d)}
                            >
                              View
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.preventDefault()}
                            >
                              Edit Driver
                            </DropdownItem>
                            <DropdownItem
                              href="#pablo"
                              onClick={(e) => e.deleteDriver()}
                            >
                              Delete
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Drivers;
