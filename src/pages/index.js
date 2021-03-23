import React from "react";

import Layout from '../components/Layout';

import FeaturedProjects from '../components/FeaturedProjects';
import AboutComponent from "../components/About";
import AchievementTracker from "../components/AchievementTracker";

export default function Home() {

  return (
    <Layout>
      <header className="hero">
        <h1>Fernando Mendoza</h1>
        <h3>Student + Developer</h3>
      </header>

      <section className="container">
        <h2>My Favourite Projects So Far</h2>
        <FeaturedProjects />
      </section>

      <section>
        <h2>Who am I?</h2>
        <AboutComponent />
      </section>

      <section>
        <h2>Achievements</h2>
        <AchievementTracker />
      </section>
    </Layout>
  );
}
