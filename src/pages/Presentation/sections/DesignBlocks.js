// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Agrov React components
import MKBox from "components/MKBox";

function DesignBlocks() {
  return (
    <MKBox component="section" my={6} py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        />
      </Container>
    </MKBox>
  );
}

export default DesignBlocks;
