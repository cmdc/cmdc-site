import Image from "next/image";
import IndexLayout from "../components/Layouts/IndexLayout";

const Home = () => {
  return (
    <IndexLayout>
      <div className={""}>
        <main className={""}>
          <h1 className={""}>
            Welcome to <a href="">cmdc</a>
          </h1>

          <p className={""}>
            the best way to code is search a thing already done, and play like
            Lego game <code className={""}>pages/index.js</code>
          </p>

          <div className={""}>
            <a href="" className={""}>
              <h2>Documentation &rarr;</h2>
              <p>
                Find in-depth information about COMING SOON features and API.
              </p>
            </a>

            <a href="" className={""}>
              <h2>Learn &rarr;</h2>
              <p>
                Learn about COOMING SOON in an interactive course with quizzes!
              </p>
            </a>

            <a href="" className={""}>
              <h2>Examples &rarr;</h2>
              <p>
                Discover and deploy boilerplate example COOMING SOON projects.
              </p>
            </a>

            <a href="" className={""}>
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your COOMING SOON site to a public URL with
                Vercel.
              </p>
            </a>
          </div>
        </main>

        <footer className={""}>
          <a href="" target="_blank" rel="noopener noreferrer">
            Powered by{" "}
            <span className={""}>
              <Image src="/cmdc.svg" alt="cmdc Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    </IndexLayout>
  );
};

export default Home;
