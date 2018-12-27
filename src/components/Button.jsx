import React from "react";
import styled from "@emotion/styled";

const Button = styled.button`
  margin: 0 1rem;
  color: #3d4852;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-weight: 600;
  border-width: 1px;
  border-radius: 0.25rem;
  border-color: #dae1e7;
  background-color: #fff;
  cursor: pointer;
`;

export default ({ label }) => {
  return <Button>{label}</Button>;
};
