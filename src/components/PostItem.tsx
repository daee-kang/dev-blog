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
        <div style={{ padding: '1rem' }}>
          <Date date={parseISO(post.date)} />
        </div>


        <style jsx>
          {`
            a {
              background-color: #fff;
              color: #222;
              display: inline-block;
              margin: .5em 0;
              border-radius: .5em;
              width: 100%;
              transition: all .2s ease;
              position: relative;
            }

            a:hover {
              transform: scale(1.02);
              -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.21);
              -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.21);
              box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.21);
            }

            h2 {
              font-family: 'Concert One', cursive;
              margin: 0;
              font-weight: 500;
              padding: 1rem;
            }
          `}
        </style>
      </a>
    </Link>
  );
}
