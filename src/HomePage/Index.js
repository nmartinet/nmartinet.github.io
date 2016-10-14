import React from 'react';
import projects from './data.js';
import marked from 'marked';

function ProjectBox({ title, link, desc }) {
  return (
    <div className="project" key={title}>
      <div className="content">
        <header>
          <h3>{title}</h3>
        </header>
        <div className="link">
          <a href={link}>
            repo
          </a>
        </div>
        <div dangerouslySetInnerHTML={ {__html: marked(desc)}}></div>
      </div>
    </div>
  );
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'HomePage';
  }
  render() {
    return (
      <div>
        <header id="page-header">
          <h1>nmartinet.github.io</h1>
        </header>

        <section id="projects">
          <header>
            <h2>Projects</h2>
          </header>
          <div className="container">
            <div id="projects-list">
              {projects.map(ProjectBox)}
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;
