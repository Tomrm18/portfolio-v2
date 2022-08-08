import React from 'react';

import { Layout, Sidebar, Education, Skills, Interests, About, Extracurriculars, Experience } from '../components';

import config from '../../config';


const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div className="container-fluid p-0">

      <About config={config} />

      <hr className="m-0" />

      <Experience experience={config.experience} />

      <hr className="m-0" />

      <Education education={config.education} />

      <hr className="m-0" />

      <Extracurriculars clubs={config.extracurriculars.studentClubs} personalProjects={config.extracurriculars.personProjects} />

      <hr className="m-0" />

      <Skills />

      <hr className="m-0" />

      <Interests interests={config.interests} />

    </div>
  </Layout>
);

export default IndexPage;
