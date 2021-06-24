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
              background-color: #fff;
              color: #222;
              display: inline-block;
              padding: 1.5em;
              border-radius: .5em;
              margin: .5em;
              width: 100%;
              -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.21);
              -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.21);
              box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.21);
              transition: all .2s ease;
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
