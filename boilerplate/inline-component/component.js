import React from "react";
import styled from "@emotion/styled";

const {{titleCase}}Component = styled.span`
  color: ${props => props.color};
  font-family: var(--body-font);
`;

export default React.forwardRef(
  ({ children, color, ...otherProps }, ref) => (
    <{{titleCase}}Component ref={ref} {...otherProps} color={color}>
      {children}
    </{{titleCase}}Component>
  )
);
