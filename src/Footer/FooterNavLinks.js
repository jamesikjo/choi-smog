import React from "react";
import { useHistory } from "react-router-dom";
import { Divider, Typography } from "@material-ui/core";

const FooterNavLinks = ({ languageData, footerFont }) => {
  const history = useHistory();
  const { home, aboutUs, coupon, contact } = languageData;

  const navLinks = [
    { title: home, path: "/" },
    { title: aboutUs, path: "/about" },
    { title: coupon, path: "/coupon" },
    { title: contact, path: "/contact" },
  ];

  const handleClick = (path) => {
    history.push(path);
  };
  return (
    <>
      {navLinks.map(({ title, path }, i) => (
        <React.Fragment key={i}>
          <Typography
            variant="body2"
            onClick={() => handleClick(path)}
            style={{ cursor: "pointer" }}
            className={footerFont}
          >
            {title}
          </Typography>
          {i < navLinks.length - 1 && (
            <Divider
              orientation="vertical"
              flexItem
              style={{
                margin: "0rem 1rem",
              }}
            />
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default FooterNavLinks;
