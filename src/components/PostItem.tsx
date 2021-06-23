import { PostContent } from "../lib/posts";
import Date from "./Date";
import Link from "next/link";
import { parseISO } from "date-fns";

type Props = {
  post: PostContent;
};
export default function PostItem({ post }: Props) {
  return (
    <Link href={"/posts/" + post.slug}>
      <a>
        <h2>{post.title}</h2>
        <Date date={parseISO(post.date)} />

        <style jsx>
          {`
            a {
              color: #222;
              display: inline-block;
              padding: 1.5em;
              margin: .5em;
              border-radius: 1em;
              width: 100%;
              -webkit-box-shadow: -2px 2px 19px -2px rgba(0,0,0,0.15);
              -moz-box-shadow: -2px 2px 19px -2px rgba(0,0,0,0.15);
              box-shadow: -2px 2px 19px -2px rgba(0,0,0,0.15);
              transition: all .2s ease-in-out;
              position: relative;
            }

            a:hover {
              transform: scale(1.05);
            }

            h2 {
              font-family: 'Concert One', cursive;
              margin: 0;
              font-weight: 500;
              margin-bottom: 0.7rem;
            }
          `}
        </style>
      </a>
    </Link>
  );
}
