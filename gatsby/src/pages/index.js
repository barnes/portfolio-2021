import React from "react"
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from "styled-components";
import "@fontsource/inter"
import Header from "../components/Header";
import Project from "../components/Project";


const ProjectGrid = styled.div`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fill, 45%);
`;

export default function Index({ data }) {
  const projects = data.projects.nodes;
  return (
    <>
      <Header/>
      <ProjectGrid>
        {projects.map((project) => (
          <>
          <Project data={project}/>
          </>
        ))}
      </ProjectGrid>
    </>
    
  )
}

export const query = graphql`
  query {
  projects: allSanityProject {
    nodes {
      id
      description
      title
      image {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
      link
      github
      date
    }
    }
    
  }
`;


