import React from "react"
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from "styled-components";
import "@fontsource/inter"
import Header from "../components/Header";
import Project from "../components/Project";




export default function Index({ data }) {
  const blogs = data.blog.nodes;
  console.log(blogs)
  return (
    <>
      <Header/>

      {blogs.map((blog) => (
          <>
          <h1>{blog.title}</h1> 
          </>
        ))}
    </>
    
  )
}

export const query = graphql`
  query {
  blog: allSanityBlog {
    nodes {
      id
      title
      image {
          asset {
            fluid(maxWidth: 800) {
              ...GatsbySanityImageFluid
            }
          }
        }
    }
    }
    
  }
`;


