import React from "react"
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from "styled-components";
import "@fontsource/inter"
import Header from "../components/Header";
import Project from "../components/Project";

const ProjectStyles = styled.div`
  font-family: 'Inter', sans-serif;
  background-color:#FEC5BB;
  margin:50px 50px;
  display: grid;
  grid-template-columns: 50% auto;
  align-items: center;
  .date {
    font-style: italic;
    font-size:12px;
    border-bottom: 2px dashed #FEC5BB;

  }
  h1{ 
    font-weight: 200;
    border-bottom: 5px solid #FEC5BB
  }
  text-decoration:none;
  ul{
    list-style: none;
    
  }
  ul li {
    display: block;
    background-color:#FEC5BB;
    width: 100px;
    padding: 10px;
    margin: 20px;
    text-align: center;
  }
  
`;


const ProjectLeft = styled.div`
  display:grid;
  padding:1rem 2rem;
`;

const ProjectRight = styled.div`
  align-items:center;
  padding:1rem 2rem;
  background-color: white;
  height: 100%;
  
`;

export default function Index({ data }) {
  const projects = data.projects.nodes;
  return (
    <>
    <Header/>
    {projects.map((project) => (
      <>
      <Project data={project}/>
      <ProjectStyles key="{project.id}">
        <ProjectLeft>
          <Img fluid={project.image.asset.fluid} />
        </ProjectLeft>
        <ProjectRight>
          <span class="date">{project.date}</span>
          <a href={project.link}><h1>{project.title}</h1></a>
          <p>{project.description}</p> 
          <ul>
            <li><a href={project.github}>Github</a></li>
            <li><a href={project.link}>Link</a></li>
          </ul>
        </ProjectRight>
      </ProjectStyles>
      </>
    ))}
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


