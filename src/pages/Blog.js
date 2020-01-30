import React, { Component } from "react";
import { Container } from "../components/Grid";
import { FeatBlog } from "../components/BlogCards";
import blogs from "../data/blogs.json";

class Blog extends Component {
  state = {
    blog: {},
    body: []
  };
  
  componentDidMount() {
<<<<<<< HEAD
    const id = parseInt(this.props.match.params.id);
    console.log(id);

    const blog = blogs.filter(blog => blog.id === id);
    this.setState({ blog: blog });
=======
    const id = this.props.match.params.id;
    var blog = blogs.filter(blog => blog.id == id);
    
    this.setState({ blog: blog[0], body: blog[0].body });
>>>>>>> 317b4ecada9540cffbfabc2b19847f4694c89780
    
  }

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
          headline={this.state.blog.headline}
          image={this.state.blog.image}
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
