import React, { Component } from "react";
import { FeatBlog } from "../components/BlogCards";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Container } from "../components/Grid";
import "./style.css";

class Home extends Component {
  state = {

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
          avatar="https://via.placeholder.com/100"
          headline="Headline"
          content="content content content"
        />
      </Container>
    );
  }
}

export default Home;
