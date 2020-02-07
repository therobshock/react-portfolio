import React, { Component } from "react";
import { Container } from "../components/Grid";
import { FeatBlog } from "../components/BlogCards";
import blogs from "../data/blogs.json";

class Blog extends Component {
  constructor(props){
    super(props);
    this.state = {
      blog: {},
      body: []
    };
  }
  
  componentDidMount() {
    const id = this.props.match.params.id;
    var blog = blogs.filter(blog => blog.id == id);
    
    this.setState({ blog: blog[0], body: blog[0].body });
    
  }

  render() {
    return (
      <Container 
        fluid
        flex="d-flex justify-content-center align-items-center"
        style={{
          boxSizing: 'border-box',
          height: '100%',
          paddingTop: '10%'
        }}
      >
        <FeatBlog
          headline={this.state.blog.headline}
          image={ require(`../images/blog-images/Rob-Shock-BW.png`)}
        >
            {this.state.body.map((cont, index) =>(
                <p key={index}>{cont}</p>
            ))}
        </FeatBlog>
      </Container>
    );
  }
}

export default Blog;
