// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Agrov React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function BuiltByDevelopers() {
  const bgImage =
    "https://raw.githubusercontent.com/creatingtimofficial/public-assets/master/soft-ui-design-system/assets/img/desktop.jpg";

  return (
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Grid container item xs={12} lg={6} sx={{ ml: { xs: 0, lg: 6 } }}>
          <MKTypography variant="h4" color="white" fontWeight="bold">
            Built by young minds
          </MKTypography>
          <MKTypography variant="h1" color="white" mb={1}>
            Bridging Gaps
          </MKTypography>
          <MKTypography variant="body1" color="white" opacity={0.8} mb={2}>
            From amla to zucchini, all the vegetables can be sold in this platform across the
            nation. We aim to bridge the gap between farmers and customers by reducing the middleman
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BuiltByDevelopers;
