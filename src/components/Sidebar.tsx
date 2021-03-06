import React, { useState } from "react"
import config from '../../config';
import avatar from "../assets/images/avatar.jpg";

import Scrollspy from 'react-scrollspy';
import { Scroll } from './Scroll';

type tabItem = {
  content: string;
  href: string
}

export const Sidebar = () => {

  const tabItems: tabItem[] = [
    { content: 'About', href: 'about' },
    { content: 'Experience', href: 'experience' },
    { content: 'Education', href: 'education' },
    { content: "Extracurriculars", href: "extracurriculars" },
    { content: 'Skills', href: 'skills' },
    { content: "Interests", href: "interests" }
  ]

  const [tabs, setTabs] = useState(tabItems);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <a className="navbar-brand" href="#page-top">
        <span className="d-block d-lg-none">
          {config.firstName} {config.lastName}
        </span>
        <span className="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src={avatar}
            alt=""
          />
        </span>
      </a>
      <button
        className={`navbar-toggler navbar-toggler-right ${
          isCollapsed ? 'collapsed' : ''
        }`}
        type="button"
        data-toggle="collapse"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`}
        id="navbarSupportedContent"
      >
        <Scrollspy
          items={tabs.map((s) => s.href)}
          currentClassName="active"
          offset={-300}
          className="navbar-nav"
        >
          {tabs.map((tab, i) => {
            const { href, content } = tab;
            return (
              <li className="nav-item" key={href}>
                <Scroll type="id" element={href}>
                  <a className="nav-link" href={`#${href}`}>
                    {content}
                  </a>
                </Scroll>
              </li>
            );
          })}
        </Scrollspy>
      </div>
    </nav>
  );
}