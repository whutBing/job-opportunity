import PropTypes from "prop-types";
import React, { memo } from "react";

const Child = memo((props) => {
  return <div>{props.count}</div>;
});

Child.propTypes = {
  count: Number,
};

export default Child;
