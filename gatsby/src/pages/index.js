import React from "react"
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from "styled-components";
import "@fontsource/montserrat/200.css"

const ProjectStyles = styled.div`
  font-family: 'Montserrat', sans-serif;
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

const HeaderStyles = styled.div`
  font-family: 'Montserrat', sans-serif;
  align-items: center;
  text-decoration:none;
  background-color:white;
  display:grid;
  grid-template-columns: 15% auto;
  padding-left:50px;
  margin-bottom:50px;
`;

const AboutStyles = styled.div`
  font-family: 'Montserrat', sans-serif;
  padding-left:50px;
  margin: auto;
  padding:20px;
  position:center;
  background-color:white;
  h1{
    font-weight:200;
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
  console.log(projects);
  return (
    <>
    {/* <HeaderStyles>
      <div class="logo">
        <h1>Ryan Barnes</h1>
      </div>
      <div class="nav">
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </HeaderStyles> */}
    <AboutStyles>
      <h1>I'm Ryan. I make stuff with code. </h1>
      <p>I'm passionate about making highly functional websites and applications, and constantly learning new tech.</p>
    </AboutStyles>
    {projects.map((project) => (
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


