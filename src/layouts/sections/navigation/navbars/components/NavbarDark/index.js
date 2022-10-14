/* eslint-disable no-param-reassign */
/**
=========================================================
* Agrov React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2022 Team Explicits (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Agrov React components
import MKBox from "components/MKBox";

// Agrov React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Routes
import routes from "routes";

function NavbarDark() {
  return (
    <MKBox variant="gradient" bgColor="dark" shadow="sm" py={0.25}>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "Subscribe to Premium",
          color: "info",
        }}
        transparent
        relative
        light
        center
      />
    </MKBox>
  );
}

export default NavbarDark;
