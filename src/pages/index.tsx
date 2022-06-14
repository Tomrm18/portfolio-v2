import React from 'react';

import { Layout, Sidebar, Education, Skills, Interests, About } from '../components';

import config from '../../config';

import Experience from '../components/Experience';

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

      <Skills />

      <hr className="m-0" />

      <Interests />

    </div>
  </Layout>
);

export default IndexPage;
