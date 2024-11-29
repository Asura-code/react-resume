import { ways } from "../data";
import Posters from "./Posters";

export default function Whoami() {
  return (
    <section>
      <h3>Whoami</h3>

      <ul>
        {ways.map((way) => (
          <Posters key={way.title} {...way} />
        ))}
        {/* <Posters title={ways[0].title} description={ways[0].description} />
          <Posters {...ways[1]} />
          <Posters {...ways[2]} />
          <Posters {...ways[3]} /> */}
      </ul>
    </section>
  );
}
