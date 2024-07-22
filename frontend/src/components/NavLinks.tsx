import { Tab, Tabs } from "@mui/material";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavLinksProps } from "../types/types";

const NavLinks: FC<NavLinksProps> = ({ direction }) => {
  const [value, setValue] = useState<number>(0);
  const location = useLocation();

  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setValue(0);
        break;
      case "/contact":
        setValue(1);
        break;
      case "/about":
        setValue(2);
        break;
      case "/signup":
        setValue(3);
        break;
      default:
        setValue(0);
        break;
    }
  }, [location.pathname]);

  return (
    <Tabs
      orientation={direction}
      value={value}
      onChange={handleChange}
      role="navigation"
      aria-label="nav tabs"
      sx={{
        marginTop: direction === "vertical" ? "20px" : "0",
        ".MuiTabs-indicator": {
          backgroundColor: "black",
        },
        ".MuiTab-root": {
          textTransform: "capitalize",
          color: "black",
          "&.Mui-selected": {
            color: "black",
          },
          "&:hover": {
            color: "grey",
            transition: "color 0.3s",
          },
        },
      }}
    >
      <Tab label="Home" component={Link} to="/" />
      <Tab label="Contact" component={Link} to="/contact" />
      <Tab label="About" component={Link} to="/about" />
      <Tab label="Sign up" component={Link} to="/signup" />
    </Tabs>
  );
};

export default NavLinks;
