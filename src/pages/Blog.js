import React, { Component } from "react";
import { Container } from "../components/Grid";
import { FeatBlog } from "../components/BlogCards";
import blogs from "../data/blogs.json";

class Blog extends Component {
  state = {
    blog: {}
  };
  
  componentDidMount() {
    const id = parseInt(this.props.match.params.id);
    console.log(id);

    const blog = blogs.filter(blog => blog.id === id);
    this.setState({ blog: blog });
    
  }
  render() {
    return (
      <Container fluid>
        <FeatBlog
          headline={this.state.blog.headline}
          image={this.state.blog.image}
        >
       {/*  {this.state.blog.body.map(cont => (
            <p>{cont}</p>
          ))} */}
        </FeatBlog>
      </Container>
    );
  }
}

export default Blog;
