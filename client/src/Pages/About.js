import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div className="about">
      About
      <h1>Your Name Here</h1>
      <h2>Job Title Here</h2>
      {/* Elevator pitch here */}
      <p style={{ alignSelf: "flex-end" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus auctor
        condimentum elit, eu sagittis diam dapibus porttitor. Nulla facilisi.
        Aenean porta molestie lacus eu lobortis. Sed commodo ligula eros, et
        semper lacus vulputate ut. Vestibulum tincidunt ex eget molestie
        vehicula. Mauris aliquam tincidunt justo a malesuada. Nam molestie lorem
        vitae eros porta dictum. Cras posuere mattis dui id fringilla. Nam
        pellentesque ultricies nibh eu feugiat. Ut pellentesque placerat nisi,
        vitae consectetur risus tempus sed.
      </p>
    </div>
  );
};