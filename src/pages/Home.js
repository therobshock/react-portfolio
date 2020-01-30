import React, { Component } from "react";
import { FeatBlog } from "../components/BlogCards";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import blogs from "../data/blogs.json"
import "./style.css";

class Home extends Component {
  state = {
    blogs
  };

  render() {
    return (
      <Container 
        fluid
        flex="d-flex justify-content-center align-items-center"
        style={{
          boxSizing: 'border-box',
          height: '100%',
        }}
      >
        <FeatBlog
          image={this.state.blogs[0].image}
          headline={this.state.blogs[0].headline}
          >
            {this.state.blogs[0].body.map((cont, index) => (
              <p key={index}>{cont}</p>
            ))}
          </FeatBlog>
          
          
      </Container>
    );
  }
}

export default Home;
