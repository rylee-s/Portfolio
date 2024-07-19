import rails from "../../assets/svgs/ruby.svg";
import hotwire from "../../assets/svgs/hotwire.svg";
import turbo from "../../assets/svgs/turbo.svg";
import tailwind from "../../assets/svgs/tailwind.svg";
import stimulus from "../../assets/svgs/stimulus.svg";
import typescript from "../../assets/svgs/typescript.svg";
import node from "../../assets/svgs/node.svg";
import heroku from "../../assets/svgs/heroku.svg";
import postgresql from "../../assets/svgs/postgresql.svg";
import redis from "../../assets/svgs/redis.svg";
import react from "../../assets/svgs/react.svg";
import ghActions from "../../assets/svgs/gh-actions.svg";
import axios from "../../assets/svgs/axios.svg";
import hbAPI from "../../assets/svgs/hb-api.svg";

const svgMap: { [key: string]: string } = {
  hbAPI,
  axios,
  react,
  rails,
  hotwire,
  turbo,
  heroku,
  postgresql,
  redis,
  tailwind,
  stimulus,
  typescript,
  node,
  ghActions,
};

export function Shield({
  type,
  alt,
  className,
}: {
  type: string;
  alt: string;
  className?: string;
}) {
  const src = svgMap[type];
  return src ? (
    <img src={src} alt={alt} className={className} />
  ) : (
    <div>{alt}</div>
  );
}
