import React, { useEffect, useState } from "react";
import styles from "../../public/styles/content.module.css";
import Author from "./Author";
import Copyright from "./Copyright";
import Date from "./Date";
import Layout from "./Layout";
import BasicMeta from "./meta/BasicMeta";
import JsonLdMeta from "./meta/JsonLdMeta";
import OpenGraphMeta from "./meta/OpenGraphMeta";
import TwitterCardMeta from "./meta/TwitterCardMeta";
import { SocialList } from "./SocialList";
import TagButton from "./TagButton";
import { getAuthor } from "../lib/authors";
import { getTag } from "../lib/tags";
import { useRouter } from 'next/router'
import Link from "next/link";
import { useRef } from "react";

type Props = {
  title: string;
  date: Date;
  slug: string;
  tags: string[];
  author: string;
  description?: string;
  children: React.ReactNode;
};
export default function PostLayout({
  title,
  date,
  slug,
  author,
  tags,
  description = "",
  children,
}: Props) {
  const keywords = tags.map(it => getTag(it).name);
  const authorName = getAuthor(author).name;

  const titleRef = useRef(null);
  const [isTitleVisible, setIsTitleVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      setIsTitleVisible(entry.isIntersecting);
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    });

    if (titleRef.current) observer.observe(titleRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    }
  }, [titleRef])

  return (
    <Layout>
      <BasicMeta
        url={`/posts/${slug}`}
        title={title}
        keywords={keywords}
        description={description}
      />
      <TwitterCardMeta
        url={`/posts/${slug}`}
        title={title}
        description={description}
      />
      <OpenGraphMeta
        url={`/posts/${slug}`}
        title={title}
        description={description}
      />
      <JsonLdMeta
        url={`/posts/${slug}`}
        title={title}
        keywords={keywords}
        date={date}
        author={authorName}
        description={description}
      />
      <div className={"container"}>
        <article>
          <header>
            <div className="post-nav">
              <Link href="/">
                <a>Home</a>
              </Link>
              /
              <Link href="/posts">
                <a>Posts</a>
              </Link>
            </div>
            <h1 className="title">{title}</h1>
            <div className={"metadata"}>
              <div>
                <Date date={date} />
              </div>
              <div>
                <Author author={getAuthor(author)} />
              </div>
            </div>
            <ul className={"tag-list"} ref={titleRef}>
              {tags.map((it, i) => (
                <li key={i}>
                  <TagButton tag={getTag(it)} />
                </li>
              ))}
            </ul>
          </header>
          <div className={styles.content}>{children}</div>

        </article>
        <footer>
          <div className={"social-list"}>
            <SocialList />
          </div>
          <Copyright />
        </footer>
        <button className={`jumpback ${!isTitleVisible ? 'visible' : 'invisible'}`} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ☝
        </button>
      </div>
      <style jsx>
        {`
            .container {
              display: block;
              max-width: 50rem;
              width: 100%;
              margin: 0 auto;
              padding: 0 1.5rem;
              box-sizing: border-box;
              z-index: 0;
            }
            header {
              margin: 0 -25px;
              padding: 30px;
              background: #023047;
              border-radius: 0 0 25px 25px;
              -webkit-box-shadow: 2px 4px 5px -1px rgba(0,0,0,0.42); 
              box-shadow: 2px 4px 5px -1px rgba(0,0,0,0.42);
            }
            .metadata div {
              display: inline-block;
              margin-right: 0.5rem;
            }
            article {
              flex: 1 0 auto;
            }
            h1 {
              margin: 0 0 0.5rem;
              font-size: 2.5rem;
            }
            .title {
              color: #e5e5e5;
              text-shadow: 2px 2px 2px #e03a3a;
              font-style: italic;
            }
            .tag-list {
              list-style: none;
              text-align: left;
              margin: 1rem 0 0 0;
              padding: 0;
            }
            .tag-list li {
              display: inline-block;
              margin-left: 0.5rem;
            }
            .social-list {
              margin-top: 3rem;
              text-align: center;
            }
            .post-nav {
              font-size: 1rem;
              margin-bottom: 10px;
            }
            .post-nav a {
              text-align: center;
              color: #fca311;
              padding: 0px 20px;
              text-decoration: underline;
            }

            .jumpback {
              position: fixed;
              background-color: #fff;
              top: 30px;
              right: 30px;
              height: 100px;
              border-radius: 30px;
              width: 60px;
              font-size: 2rem;
              border: none;
              -webkit-box-shadow: 0px 2px 7px -2px rgba(0,0,0,0.51);
              -moz-box-shadow: 0px 2px 7px -2px rgba(0,0,0,0.51);
              box-shadow: 0px 2px 7px -2px rgba(0,0,0,0.51);
              transition:all 0.2s ease-in-out;
              z-index: 100;
            }
            .jumpback:hover {
              -webkit-box-shadow: 0px 2px 12px -2px rgba(0,0,0,0.51);
              -moz-box-shadow: 0px 2px 12px -2px rgba(0,0,0,0.51);
              box-shadow: 0px 2px 12px -2px rgba(0,0,0,0.51);
            }
            .visible {
              display: block;
              opacity: 100%;
              bottom: 30px;
            }
            .invisible {
              opacity: 0%;
              display: hidden;
              bottom: -30px;
            }

            @media (min-width: 769px) {
              .container {
                display: flex;
                flex-direction: column;
              }
            }
          `}
      </style>
      <style global jsx>
        {`
          /* Generated with http://k88hudson.github.io/syntax-highlighting-theme-generator/www */
          /* http://k88hudson.github.io/react-markdocs */
          /**
          * @author k88hudson
          *
          * Based on prism.js default theme for JavaScript, CSS and HTML
          * Based on dabblet (http://dabblet.com)
          * @author Lea Verou
          */
          /*********************************************************
          * General
          */
          pre[class*="language-"],
          code[class*="language-"] {
            color: #ffd166;
            font-size: 16px;
            text-shadow: none;
            font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
            direction: ltr;
            text-align: left;
            white-space: pre;
            word-spacing: normal;
            word-break: normal;
            line-height: 1.5;
            -moz-tab-size: 4;
            -o-tab-size: 4;
            tab-size: 4;
            -webkit-hyphens: none;
            -moz-hyphens: none;
            -ms-hyphens: none;
            hyphens: none;
          }
          pre[class*="language-"]::selection,
          code[class*="language-"]::selection,
          pre[class*="language-"]::mozselection,
          code[class*="language-"]::mozselection {
            text-shadow: none;
            background: #ffffff;
          }
          @media print {
            pre[class*="language-"],
            code[class*="language-"] {
              text-shadow: none;
            }
          }
          pre[class*="language-"] {
            padding: 2em;
            margin: 10px -15px;
            border-radius: 10px;
            overflow: auto;
            background: #272f3c;
            -webkit-box-shadow: 2px 4px 5px -1px rgba(0,0,0,0.42); 
            box-shadow: 2px 4px 5px -1px rgba(0,0,0,0.42);
          }
          @media (max-width: 770px) {
            pre[class*="language-"] {
            padding: 2em;
            margin: 10px -30px;
            border-radius: 0px;
            overflow: auto;
            background: #272f3c;
            -webkit-box-shadow: 0; 
            box-shadow: 0;
          }
          }
          :not(pre) > code[class*="language-"] {
            padding: .1em .3em;
            border-radius: .3em;
            color: #db0000;
            background: #ffb8b8;
          }
          /*********************************************************
          * Tokens
          */
          .namespace {
            opacity: .7;
          }
          .token.comment,
          .token.prolog,
          .token.doctype,
          .token.cdata {
            color: #7d7d7d;
          }
          .token.punctuation {
            color: #f55151;
          }
          .token.property,
          .token.tag,
          .token.boolean,
          .token.number,
          .token.constant,
          .token.symbol,
          .token.deleted {
            color: #f7f7f7;
          }
          .token.selector,
          .token.attr-name,
          .token.string,
          .token.char,
          .token.builtin,
          .token.inserted {
            color: #06d6a0;
          }
          .token.operator,
          .token.entity,
          .token.url,
          .language-css .token.string,
          .style .token.string {
            color: #ffffff;
          }
          .token.atrule,
          .token.attr-value,
          .token.keyword {
            color: #05b4ff;
          }
          .token.function {
            color: #2ec4b6;
          }
          .token.regex,
          .token.important,
          .token.variable {
            color: #0fff2b;
          }
          .token.important,
          .token.bold {
            font-weight: bold;
          }
          .token.italic {
            font-style: italic;
          }
          .token.entity {
            cursor: help;
          }
          /*********************************************************
          * Line highlighting
          */
          pre[data-line] {
            position: relative;
          }
          pre[class*="language-"] > code[class*="language-"] {
            position: relative;
            z-index: 1;
          }
          .line-highlight {
            position: absolute;
            left: 0;
            right: 0;
            padding: inherit 0;
            margin-top: 1em;
            background: #5e5a5c;
            box-shadow: inset 5px 0 0 #38e8ff;
            z-index: 0;
            pointer-events: none;
            line-height: inherit;
            white-space: pre;
          }
          `}
      </style>
    </Layout>
  );
}
