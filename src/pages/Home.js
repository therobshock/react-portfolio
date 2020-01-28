import React, { Component } from "react";
import { FeatBlog, BlogParagraph } from "../components/BlogCards";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import blogs from "../data/blogs.json"
import "./style.css";

class Home extends Component {
  state = {
    blogs
  };

  /* componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  }; */

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
            {this.state.blogs[0].body.map(cont => (
              <p>{cont}</p>
            ))}
          </FeatBlog>
          
          
      </Container>
    );
  }
}

export default Home;
