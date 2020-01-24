import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import { BlogCard } from "../components/BlogCards";
import blogs from "../data/blogs.json"

class Blogs extends Component {

    state = {
        blogs
    }

    render() {
    return (
      <Container 
        fluid
        flex="d-flex flex-wrap"
        style={{
            paddingTop: "6%",
            boxSizing: "border-box",
            width: "80%"
        }}
      >

          {this.state.blogs.map(blog => (

            <BlogCard 
                id={blog.id}
                key={blog.id}
                image={ /* require('../' + blog.image) */ blog.image }
                headline={blog.headline}
            />
          ))}
    
  
      </Container>
    );
  }
}

export default Blogs;
