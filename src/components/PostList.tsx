import React from "react";
import { PostContent } from "../lib/posts";
import PostItem from "./PostItem";
import TagLink from "./TagLink";
import Pagination from "./Pagination";
import { TagContent } from "../lib/tags";
import TagButton from "./TagButton";
import Link from "next/link";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
export default function PostList({ posts, tags, pagination }: Props) {
  return (
    <div className={"container"}>
      <div className="nav">
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div>
        <h2>
          so these are all my posts
        </h2>
      </div>
      and here are some categories:
      <ul className={"tag-list"}>
        {tags.map((it, i) => (
          <li key={i}>
            <TagButton tag={it} />
          </li>
        ))}
      </ul>
      <div className={"posts"}>
        <ul className={"post-list"}>
          {posts.map((it, i) => (
            <li key={i}>
              <PostItem post={it} />
            </li>
          ))}
        </ul>
        <Pagination
          current={pagination.current}
          pages={pagination.pages}
          link={{
            href: (page) => (page === 1 ? "/posts" : "/posts/page/[page]"),
            as: (page) => (page === 1 ? null : "/posts/page/" + page),
          }}
        />
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          margin: 0 auto;
          max-width: 1200px;
          width: 100%;
          padding: 0 1.5rem;
        }
        ul {
          margin: 0;
          padding: 0;
        }
        li {
          margin: 5px;
        }
        .posts {
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
        }
        .post-list {
          flex: 1 0 auto;
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
        .nav {
          font-size: 1rem;
          margin-top: 10px;
        }
        .nav a {
          text-align: center;
          color: #fca311;
          padding: 0px 20px;
          text-decoration: underline;
        }

        @media (min-width: 769px) {
          .categories {
            display: block;
          }
        }
      `}</style>
    </div>
  );
}
