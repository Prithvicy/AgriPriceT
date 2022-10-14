/*
=========================================================
* Agrov React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2022 Team Explicits (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Sections components
import BaseLayout from "layouts/sections/components/BaseLayout";

function Features() {
  return (
    <BaseLayout
      title="Features"
      breadcrumb={[
        { label: "Page Sections", route: "/sections/page-sections/features" },
        { label: "Features" },
      ]}
    >
      <div>Features</div>;
    </BaseLayout>
  );
}

export default Features;
