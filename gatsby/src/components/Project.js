import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image';

const ProjectStyles = styled.div`
  align-items:center;
  padding-left: 5%;
  padding-right: 5%;
  border: 3px solid #212529;
  height: 100%;

  .button {
    background-color: #212529;
    border-radius: 5px;
    padding: 15px 15px;
    margin: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }

  a {
      color: white;
      text-transform: uppercase;
      font-weight:600;
  }

  .image {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }

  h1 {
      font-size: 3rem;
  }

`;

export default function Project({ data }) {
    console.log(data)
    return (
        <ProjectStyles>
                <div><h1>{data.title}</h1></div>
                <div class="image">
                    <Img fluid={data.image.asset.fluid} alt={data.title} />
                </div>
                <p>{data.description}</p>
                {data.github && <a href={data.github} class="button">See On Github</a>}
                {data.link && <a href={data.link} class="button">See Live</a>}
                
        </ProjectStyles>
    )
}

/* <ProjectStyles key="{project.id}">
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
      </ProjectStyles> */
