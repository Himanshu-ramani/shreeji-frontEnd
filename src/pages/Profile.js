import React, { Fragment } from "react";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { MetaTags } from "react-meta-tags";
import LayoutOne from "../layouts/LayoutOne";

import { Link } from "react-router-dom";
import Breadcrumb from "../wrappers/breadcrumb/Breadcrumb";
import { Box, Stack, Typography } from "@mui/joy";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const Profile = ({ location }) => {
  const { pathname } = location;
  const user = useSelector((state) => state?.user?.user);
  console.log(user);
  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Not Found</title>
        <meta
          name="description"
          content="404 page of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Profile
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <Box my={3}>
          <Stack justifyContent={"center"} alignItems="center">
            <Typography level="h3">Personal Info</Typography>
          </Stack>
          <div className="ml-auto mr-auto col-lg-9">
            <div className="myaccount-wrapper">
              <Card.Body>
                <div className="myaccount-info-wrapper">
                  <div className="account-info-wrapper">
                    <h4>My Account Information</h4>
                    <h5>Your Personal Details</h5>
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-md-6">
                      <div className="billing-info">
                        <label>Username</label>
                        <input type="text" value={user?.username} />
                      </div>
                    </div>
                    {/* <div className="col-lg-6 col-md-6">
                      <div className="billing-info">
                        <label>Last Name</label>
                        <input type="text" />
                      </div>
                    </div> */}
                    <div className="col-lg-12 col-md-12">
                      <div className="billing-info">
                        <label>Email Address</label>
                        <input type="email" value={user?.ea} />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="billing-info">
                        <label>Telephone</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="billing-info">
                        <label>Fax</label>
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="billing-back-btn">
                    <div className="billing-btn">
                      <button type="submit">Continue</button>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </div>
          </div>
        </Box>
      </LayoutOne>
    </Fragment>
  );
};

export default Profile;
