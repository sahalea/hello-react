import React from "react";
import { Button } from "react-bootstrap";

const ButtonElement = props => {
  return <Button variant={props.variant}>{props.variant}</Button>;
};

export default ButtonElement;

/**
 * variant of button
 * primary
 * secondary
 * success
 * warning
 * danger
 * light
 * link
 */
