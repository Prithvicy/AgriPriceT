import Icon from "@mui/material/Icon";
// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Author from "layouts/pages/landing-pages/author";
import SignIn from "layouts/pages/authentication/sign-in";

// Sections
import PageHeaders from "layouts/sections/page-sections/page-headers";
import Features from "layouts/sections/page-sections/featuers";
import Navbars from "layouts/sections/navigation/navbars";
import NavTabs from "layouts/sections/navigation/nav-tabs";
import Pagination from "layouts/sections/navigation/pagination";
import Inputs from "layouts/sections/input-areas/inputs";
import Forms from "layouts/sections/input-areas/forms";
import Alerts from "layouts/sections/attention-catchers/alerts";
import Modals from "layouts/sections/attention-catchers/modals";
import TooltipsPopovers from "layouts/sections/attention-catchers/tooltips-popovers";
import Avatars from "layouts/sections/elements/avatars";
import Badges from "layouts/sections/elements/badges";
import BreadcrumbsEl from "layouts/sections/elements/breadcrumbs";
import Buttons from "layouts/sections/elements/buttons";
import Dropdowns from "layouts/sections/elements/dropdowns";
import ProgressBars from "layouts/sections/elements/progress-bars";
import Toggles from "layouts/sections/elements/toggles";
import Typography from "layouts/sections/elements/typography";

const routes = [
  {
    name: "Home",
    icon: <Icon>dashboard</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "pages",
        collapse: [
          {
            name: "About Us",
            route: "/pages/landing-pages/about-us",
            component: <AboutUs />,
          },
          {
            name: "Contact Us",
            route: "/pages/landing-pages/contact-us",
            component: <ContactUs />,
          },
          {
            name: "Team Explicits",
            route: "/pages/landing-pages/author",
            component: <Author />,
          },
        ],
      },
      {
        name: "account",
        collapse: [
          {
            name: "sign in",
            route: "/pages/authentication/sign-in",
            component: <SignIn />,
          },
        ],
      },
    ],
  },
  {
    name: "Services",
    icon: <Icon>view_day</Icon>,
    collapse: [
      {
        name: "Live Price Tracker",
        description: "See all sections",
        dropdown: true,
        collapse: [
          {
            name: "Farmer Price",
            route: "/sections/page-sections/page-headers",
            component: <PageHeaders />,
          },
          {
            name: "Customer Price",
            route: "/sections/page-sections/features",
            component: <Features />,
          },
        ],
      },
      {
        name: "Premium Services",
        description: "See all services",
        dropdown: true,
        collapse: [
          {
            name: "Cost Price Prediction",
            route: "/sections/navigation/navbars",
            component: <Navbars />,
          },
          {
            name: "Market Analysis",
            route: "/sections/navigation/nav-tabs",
            component: <NavTabs />,
          },
          {
            name: "Selling Price Prediction",
            route: "/sections/navigation/pagination",
            component: <Pagination />,
          },
        ],
      },
      {
        name: "Middle Men Hoarding",
        description: "See all input areas",
        dropdown: true,
        collapse: [
          {
            name: "Highest to Lowest",
            route: "/sections/input-areas/inputs",
            component: <Inputs />,
          },
          {
            name: "Lowest to Highest",
            route: "/sections/input-areas/forms",
            component: <Forms />,
          },
        ],
      },
      {
        name: "Weather Analysis",
        description: "See all",
        dropdown: true,
        collapse: [
          {
            name: "Draught",
            route: "/sections/attention-catchers/alerts",
            component: <Alerts />,
          },
          {
            name: "Storm",
            route: "/sections/attention-catchers/modals",
            component: <Modals />,
          },
          {
            name: "Floods",
            route: "/sections/attention-catchers/tooltips-popovers",
            component: <TooltipsPopovers />,
          },
        ],
      },
      {
        name: "EXTRA",
        description: "See all 32 examples",
        dropdown: true,
        collapse: [
          {
            name: "avatars",
            route: "/sections/elements/avatars",
            component: <Avatars />,
          },
          {
            name: "badges",
            route: "/sections/elements/badges",
            component: <Badges />,
          },
          {
            name: "breadcrumbs",
            route: "/sections/elements/breadcrumbs",
            component: <BreadcrumbsEl />,
          },
          {
            name: "buttons",
            route: "/sections/elements/buttons",
            component: <Buttons />,
          },
          {
            name: "dropdowns",
            route: "/sections/elements/dropdowns",
            component: <Dropdowns />,
          },
          {
            name: "progress bars",
            route: "/sections/elements/progress-bars",
            component: <ProgressBars />,
          },
          {
            name: "toggles",
            route: "/sections/elements/toggles",
            component: <Toggles />,
          },
          {
            name: "typography",
            route: "/sections/elements/typography",
            component: <Typography />,
          },
        ],
      },
    ],
  },
  {
    name: "Buy Now!",
    icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "Vegetables",
        description: "At best prices!",
        href: "https://www.creating-tim.com/learning-lab/react/quick-start/material-kit/",
      },
      {
        name: "Fruits",
        description: "Freshly Picked!",
        href: "https://www.creating-tim.com/learning-lab/react/colors/material-kit/",
      },
      {
        name: "Grains",
        description: "Best Prices!",
        href: "https://www.creating-tim.com/learning-lab/react/alerts/material-kit/",
      },
      {
        name: "Organic",
        description: "Organice at the best price!!",
        href: "https://www.creating-tim.com/learning-lab/react/datepicker/material-kit/",
      },
    ],
  },
  {
    name: "Feedback",
    icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "Form",
        description: "Tell us about your experince!",
        href: "",
      },
    ],
  },
];

export default routes;
