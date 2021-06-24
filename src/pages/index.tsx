import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";
import config from "../lib/config";
import { listPostContent, PostContent } from "../lib/posts";
import PostItem from "../components/PostItem";
import { listTags } from "../lib/tags";
import { ParticleBG } from "../components/ParticleBG";
import Link from "next/link";

type Props = {
  posts: PostContent[]
};
export default function Index({ posts }: Props) {
  return (
    <Layout noNav>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div style={{ position: 'fixed', width: '100vw', height: '100vh' }}>
        <ParticleBG />
      </div>

      <div className="flexContainer">
        <div className="container boxed" style={{ flex: 1 }}>
          <div>
            <h1 style={{ fontSize: '5rem' }}>
              dev blog<span className="fancy">.</span>
            </h1>
            <span className="handle">@daee-kang</span>
            <SocialList />
          </div>
        </div>

        <div className="container" style={{ flex: 3 }}>
          <div>
            <h1 className="articleTitle">
              my recent posts:
            </h1>
            <div>
              {posts.map((post, i) => (
                <li key={i}>
                  <PostItem post={post} />
                </li>
              ))}
            </div>
            <Link href={"/posts"}>
              <h1 className="more">
                view all
              </h1>
            </Link>
          </div>
        </div>

      </div>

      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }
        .flexContainer {
          width: 1000px;
          margin: auto;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          z-index: 100;
        }
        .articleTitle {
          font-size: 2.5rem;
          width: 100%;
          padding: 0 0 0 20px;
        }
        .more {
          font-size: 1.5rem;
          text-align: right;
          color: #219ebc;
          text-decoration: underline;
          cursor: pointer;
        }
        .boxed {
          border: 1px solid black;
          background-color: #f8f8f8;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #219ebc;
        }
        .handle {
          font-family: 'Concert One', cursive;
          display: inline-block;
          margin-top: -5em;
          margin-bottom: 2em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = listPostContent(1, config.posts_per_page);

  return {
    props: {
      posts
    },
  };
}