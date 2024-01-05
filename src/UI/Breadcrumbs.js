import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
// import { Link } from "react-router-dom";
import Button from "./Button";
import "./Breadcrumbs.css";
import { Link } from "react-router-dom";

export default function BasicBreadcrumbs() {
  return (
    <div className="breadcrumbs">
      <Link to="/" style={{textDecoration:'none'}}>
        {" "}
        <Button type="outline_success">
          <i className="fa-solid fa-caret-left"></i>Back to Home
        </Button>
      </Link>

      <Breadcrumbs aria-label="breadcrumb" separator=">" color="#86bc24">
        <Link style={{ textDecoration: "none", color: "#86bc24" }} to="/">
          <b>Home</b>
        </Link>
        <Typography color="text.primary">Course Details</Typography>
      </Breadcrumbs>
    </div>
  );
}
