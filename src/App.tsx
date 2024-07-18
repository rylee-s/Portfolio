import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import { getData } from "./data";
import { Response } from "./assets/data/types";
import EmploymentTree from "./components/EmploymentTree";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Tabs from "./components/Global/Tabs";
import Loading from "./components/Global/Loading";
import Projects from "./components/Projects";

function App() {
  const [data, setData] = useState<Response>();

  useEffect(() => {
    getData().then((res) => {
      setData(res);
    });
  }, []);

  return (
    <>
      {data ? (
        <>
          <NavBar name={data.general.name} />
          <Hero
            typeWriterData={data.general.typewriter}
            bioData={data.general.bio}
          />
          <Tabs
            tabs={[
              {
                name: "Experience",
                component: <EmploymentTree companies={data.experience} />,
              },
              {
                name: "Projects",
                component: <Projects projects={data.projects} />,
              },

              { name: "Skills", component: <Skills skills={data.skills} /> },

              {
                name: "Education",
                component: <Education education={data.education} />,
              },
            ]}
          />
        </>
      ) : (
        <div
          className="inset-0 m-auto mb-20 items-center justify-center transition-opacity duration-300"
          style={{ zIndex: 6000 }}
        >
          <Loading />
        </div>
      )}
      <footer className="fixed bottom-0 left-0 z-20 w-full bg-slate-800 text-center text-lg font-bold text-slate-100 ">
        <p className="inline-block bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600 bg-clip-text text-transparent">
          {"Built with "}
          <span role="img" aria-label="love" className="text-red-100 ">
            ❤️
          </span>
          {" by Rylee"}
        </p>
      </footer>
    </>
  );
}

export default App;
