// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Agrov React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Agrov",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/creatingTim/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/creatingtim",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/creatingtimofficial",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
  ],
  menus: [
    {
      name: "company",
      items: [
        { name: "about us", href: "https://www.creating-tim.com/presentation" },
        { name: "freebies", href: "https://www.creating-tim.com/templates/free" },
        { name: "premium tools", href: "https://www.creating-tim.com/templates/premium" },
        { name: "blog", href: "https://www.creating-tim.com/blog" },
      ],
    },
    {
      name: "resources",
      items: [
        { name: "illustrations", href: "https://iradesign.io/" },
        { name: "bits & snippets", href: "https://www.creating-tim.com/bits" },
        { name: "affiliate program", href: "https://www.creating-tim.com/affiliates/new" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "https://www.creating-tim.com/contact-us" },
        { name: "knowledge center", href: "https://www.creating-tim.com/knowledge-center" },
        { name: "custom development", href: "https://services.creating-tim.com/" },
        { name: "sponsorships", href: "https://www.creating-tim.com/sponsorships" },
      ],
    },
    {
      name: "legal",
      items: [
        { name: "terms & conditions", href: "https://www.creating-tim.com/terms" },
        { name: "privacy policy", href: "https://www.creating-tim.com/privacy" },
        { name: "licenses (EULA)", href: "https://www.creating-tim.com/license" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Material Kit by{" "}
      <MKTypography
        component="a"
        href="https://www.creating-tim.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        creatingeeee Tim
      </MKTypography>
      .
    </MKTypography>
  ),
};
