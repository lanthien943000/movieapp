import React from "react";
import { Container } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

function EndPage() {
  return (
    <div className="footer_container">
      <Container maxWidth="lg">
        <div className="footer_1">
          <div className="title_sub">
            <h1>Subscribe for Updates</h1>
            <p>
              Quisque turpis lectus, vestibulum vel neque a, rutrum luctus odio.
              Quisque est purus,
              <br /> elementum ut enim eu, sagittis venenatis sem. Pellentesque
              leo enim, <br />
              varius eget felis sed, porttitor posuere dolor.
            </p>
          </div>
        </div>
      </Container>
      <div className="bg_bottom"></div>
      <Container maxWidth="lg">
        <div className="footer_2">
          <div className="footer_netflix">
            <h1>NETFLIX</h1>
            <ul>
              <li>
                <FacebookIcon id="icon_facebook" />
              </li>
              <li>
                <InstagramIcon id="icon_facebook" />
              </li>
              <li>
                <GitHubIcon id="icon_facebook" />
              </li>
              <li>
                <TwitterIcon id="icon_facebook" />
              </li>
            </ul>
          </div>
          <div className="footer_pages">
            <h3>PAGES</h3>
            <p>Home</p>
            <p>About Us</p>
            <p>Studio</p>
            <p>Contact Us</p>
          </div>
          <div className="footer_pages">
            <h3>OUR STUDIO</h3>
            <p>Services</p>
            <p>Our Works</p>
            <p>Netflix Team</p>
            <p>History</p>
          </div>
          <div className="footer_pages">
            <h3>NetFlix STUDIO</h3>
            <p>The Noxe Film Studio</p>
            <p>15 Le Thanh Ton, HCM city, VietNam</p>
            <p>California, USA</p>
          </div>
        </div>
      </Container>
      <p
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          textAlign: "center",
        }}
      >
        © CoderSchool 2022. All Rights Reserved. Designed by Nhat Nguyen.
      </p>
    </div>
  );
}

export default EndPage;
