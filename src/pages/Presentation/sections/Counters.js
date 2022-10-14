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

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Agrov React components
import MKBox from "components/MKBox";

// Agrov React examples
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={500}
              suffix="k     +"
              title="Farmers"
              description="have benefitted from using this platform. "
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <DefaultCounterCard
              count={70}
              suffix="%"
              title="Citizens"
              description="has brought the farmer's vegetables and helped revolutionize the agriculture business. "
            />
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <DefaultCounterCard
              count={12}
              suffix="+"
              title="States"
              description="are in support for the farmers and are in tie with Agrov. "
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
