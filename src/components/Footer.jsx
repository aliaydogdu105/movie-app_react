import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-light text-center">
        <div className="container p-4">
          <section className="p-2">
            <p style={{ fontStyle: "italic" }}>
              <span>&#8921; </span>
              Movies move us like nothing else can, whether they’re scary,
              funny, dramatic, romantic or anywhere in-between. So many titles,
              so much to experience.
            </p>
          </section>
        </div>
        <section className="mb-4">
          <h5>Get connected with me:</h5>
          <a
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#0A66C2" }}
            href="https://www.linkedin.com/in/aliaydogdu/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </section>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "lightgrey" }}
        >
          © 2022
        </div>
      </footer>
    </div>
  );
};

export default Footer;
