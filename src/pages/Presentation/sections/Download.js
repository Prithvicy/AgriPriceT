// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Agrov React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Images
import bgImage from "assets/images/shapes/waves-white.svg";

function Download() {
  return (
    <MKBox component="section" py={{ xs: 0, sm: 12 }}>
      <MKBox
        variant="gradient"
        bgColor="dark"
        position="relative"
        borderRadius="xl"
        sx={{ overflow: "hidden" }}
      >
        <MKBox
          component="img"
          src={bgImage}
          alt="pattern-lines"
          position="absolute"
          top={0}
          left={0}
          width="100%"
          zIndex={1}
          opacity={0.2}
        />
        <Container sx={{ position: "relative", zIndex: 2, py: 12 }}>
          <Grid container item xs={12} md={7} justifyContent="center" mx="auto" textAlign="center">
            <MKTypography variant="h3" color="white">
              Do you love this awesome
            </MKTypography>
            <MKTypography variant="h3" color="white" mb={1}>
              ..Application Agrov
            </MKTypography>
            <MKTypography variant="body2" color="white" mb={6}>
              Cause if you do,you can also benefit from our premium version at just at ₹60 per month
              It has muntiple data analysis and price prediction features!!
            </MKTypography>
            <MKButton
              variant="gradient"
              color="info"
              size="large"
              component="a"
              href="https://www.creating-tim.com/product/material-kit-react"
              sx={{ mb: 2 }}
            >
              Join Premium Now{" "}
            </MKButton>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default Download;
