import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { BlogCard } from "../components/BlogCards";

class Blogs extends Component {
/*   state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };
 */

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <BlogCard 
              avatar="https://via.placeholder.com/50"
              headline="Headline"
            />
          </Col>
          <Col size="md-6">
            <BlogCard 
                avatar="https://via.placeholder.com/50"
                headline="Headline"
              />
{/*             {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
 */}          </Col>
        </Row>
      </Container>
    );
  }
}

export default Blogs;
