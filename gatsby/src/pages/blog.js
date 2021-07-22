import React from "react"
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from "styled-components";
import "@fontsource/inter"
import Header from "../components/Header";
import Project from "../components/Project";
import BlockContent from "@sanity/block-content-to-react";

const BlogStyles = styled.div`
  width: 50%;
  margin: auto;
  padding: 2rem;
  align: center;
  h2 {
    font-size:3rem;
    margin-bottom: 0px;
  }
  h3 {
    font-size:1.5rem;
    margin-top:0px;
  }
`;


export default function Index({ data }) {
  const blogs = data.blog.nodes;
  console.log(blogs)
  return (
    <>
      <Header/>
        <BlogStyles>
        <h2>The Blog</h2>
        <h3>A place for experiments, works in progress and rambling thoughts.</h3>
        <hr />
        {blogs.map((blog) => (
            <>
            <h4>{blog.title}</h4> 
            <Img fluid={blog.image.asset.fluid} alt={blog.title} />
            <p>Test</p>
            <BlockContent blocks={blog.text}  />
            </>
          ))}
        </BlogStyles>
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
        text {
          _key
          _type
          style
          list
          _rawChildren
          children {
            _key
            _type
            text
          }
        }
    }
    }
    
  }
`;


