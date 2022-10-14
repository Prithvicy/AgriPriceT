// @mui material components

// Agrov React components
import MKBox from "components/MKBox";
// import TabGrid from "TabCardGrid";
import React, { useEffect, useState } from "react";

// Agrov React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
// import CenteredFooter from "examples/Footers/CenteredFooter";

// Routes
import routes from "routes";

const url =
  "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001a026355ed5ba4aeb4109176edc2d4adf&format=json&limit=10000";
function BaseLayout() {
  const [vegetables, setVegetables] = useState([]);
  const fetchVeggie = async () => {
    const dump = await fetch(url);
    let states = await dump.text();
    states = JSON.parse(states).records;
    const state = [];
    states.forEach((item) => {
      if (item.state === "Karnataka") {
        state.push(item);
      }
    });
    const vegetablesSet = new Set();

    state.forEach((item) => {
      // vegetables.add({'name': item.commodity, 'price': item.max_price })
      if (vegetablesSet.has(item.commodity)) {
        return;
      }
      vegetablesSet.add(item.commodity);
      vegetables.push({ name: item.commodity, variety: item.variety, price: item.max_price });
    });
    console.log(vegetables);
    setVegetables(vegetables);
  };
  const renderList = vegetables.map((item) => item.price);

  useEffect(() => {
    fetchVeggie();
  }, []);

  return (
    <MKBox display="flex" flexDirection="column" bgColor="white" minHeight="100vh">
      <MKBox bgColor="white" shadow="sm" py={0.25}>
        <DefaultNavbar
          routes={routes}
          action={{
            type: "external",
            route: "",
            label: "Subscribe to Premium",
            color: "info",
          }}
          transparent
          relative
        />
      </MKBox>
      <MKBox mt="auto">
        {/* {vegetables.map((item) => (
          <>{(item = { item })}</>
        ))}
        ; */}
        {renderList}
      </MKBox>

      {/* <MKBox mt="auto">
        <CenteredFooter />
      </MKBox> */}
    </MKBox>
  );
}

// Typechecking props for the BaseLayout

export default BaseLayout;
