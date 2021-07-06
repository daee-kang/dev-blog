import React from "react";
import LinkedIn from "../assets/linkedin.svg";
import GitHub from "../assets/github-alt.svg";
import config from "../lib/config";

export function SocialList({ }) {
  return (
    <>
      <div className="social-list">
        <a
          title="LinkedIn"
          href={`https://linkedin.com/in/${config.linkedin_account}`}
          target="_blank"
          rel="noopener"
        >
          <LinkedIn width={24} height={24} fill={"#222"} />
        </a>
        <a
          title="GitHub"
          href={`https://github.com/${config.github_account}`}
          target="_blank"
          rel="noopener"
        >
          <GitHub width={24} height={24} fill={"#222"} />
        </a>
      </div>

      <style jsx>{`
        a {
          display: inline-block;
        }
        a:not(:last-child) {
          margin-right: 2em;
        }
        .social-list {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  );
}
