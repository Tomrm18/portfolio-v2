import React, { useState } from "react"
import config from '../../config';
import avatar from "../assets/images/avatar.jpg";

import Scrollspy from 'react-scrollspy';
import { Scroll } from './Scroll';

type tabItem = {
  content: string;
  href: string;
  hidden: boolean;
}

export const Sidebar = () => {

  const tabItems: tabItem[] = [
    { content: 'Blog', href: 'https://blog.tomrm.dev/', hidden: true },
    { content: 'About', href: 'about', hidden: false  },
    { content: 'Experience', href: 'experience', hidden: false },
    { content: 'Education', href: 'education', hidden: false },
    { content: "Extracurriculars", href: "extracurriculars", hidden: false },
    { content: 'Skills', href: 'skills', hidden: false },
    { content: "Interests", href: "interests", hidden: false }
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
            const { href, content, hidden } = tab;

            if (hidden) {
              return null;
            }
            
            return (
              content == "Blog" ? (
                <li className="nav-item" key={i}>
                  <a className="nav-link" target="_blank" href={href}>
                    <span className="d-none d-lg-block">{content}</span>
                  </a>
                </li>
              ) : 
               (
                <li className="nav-item" key={href}>
                  <Scroll type="id" element={href}>
                    <a className="nav-link" href={`#${href}`}>
                      {content}
                    </a>
                  </Scroll>
                </li>
              )
            )

          })}
        </Scrollspy>
      </div>
    </nav>
  );
}