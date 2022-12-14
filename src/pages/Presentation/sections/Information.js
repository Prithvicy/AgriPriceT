// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Agrov React components
import MKBox from "components/MKBox";

// Agrov React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Experience the
                    <br />
                    new way of buying vegetables
                  </>
                }
                description="All the necessary information that you need to be aware of has been brought to you through a new platform. "
              />
              <RotatingCardBack
                image={bgBack}
                title="Discover More"
                description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "start with header",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="content_copy"
                  title="Direct registration"
                  description="Farmers from all around the nation can register in this platform to advertise 
                  about the products that they can sell in this digitalized market"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="flip_to_front"
                  title="Updated price list"
                  description="The prices mentioned in this platform are up to date with the market and makes sure 
                  that it is the actual price recommended by the government"
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="price_change"
                  title="Save Time & Money"
                  description="Selling all the products before expiry might be tedious and might result in hoarding of 
                  goods. Join our platform to save time and money"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon="devices"
                  title="Explore the varieties"
                  description="Citizens can explore the different kinds of harvest across the nation and order as much 
                  as they want. Agrov will help get the goods on time,keeping intact the freshness"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
