import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      show : false
    }
  }
  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  componentDidMount = () => {
    axios
    .get(`http://localhost:3000/books`)
    .then(result =>{
      console.log(result.data);
      this.setState({
        books : result.data,
        show : true
      })
    })
    .catch(err=>{
      console.log(err);
    })
  }
  render() {
    /* TODO: render all the books in a Carousel */
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {this.state.books.length ? (<Carousel>{
          this.state.books.map(Element => {
            return (
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{Element.title}</h3>
          <p>{Element.description}</p>
          <h3>{Element.status}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    )
          })
         } </Carousel>) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}
export default BestBooks;
