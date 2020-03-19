import React from "react";
import { Alert } from "react-bootstrap";

const AlertElement = props => {
  return (
    <Alert variant={props.variant}>
      This is a {props.variant} alert with{" "}
      <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
      like.
    </Alert>
  );
};

export default AlertElement;

/**
 * varient of alert
/* 'primary',
'secondary',
'success',
'danger',
'warning',
'info',
'light',
'dark'*/
