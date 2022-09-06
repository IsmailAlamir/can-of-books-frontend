import React from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import UpdateForm from "./UpdateForm";
class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      show: false,
      showUp: false,
      crtBook: {}
    };
  }
  addBook = (event) => {
    event.preventDefault();
    const obj = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value,
    };



    // console.log(obj);
    axios


      .post(`${process.env.REACT_APP_URL}books`, obj)
      .then((result) => {
        this.setState({
          books: result.data,
        });
        this.handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  deleteBook = (id) => {

    axios
      .delete(`${process.env.REACT_APP_URL}deleteBook/${id}`)
      .then((result) => {
        this.setState({
          books: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleClose = () => {
    this.setState({
      show: false,
      showUp: false
    });
  };

  handleShow = () => {
    this.setState({
      show: true,
    });
  };


  openForm = (Element) => {
    this.setState({
      showUp: true,
      crtBook: Element
    });
  }


  handleUpdate = (event) => {
    event.preventDefault();
    console.log("hi")
    const id = this.state.crtBook._id;
    let obj = {
      title: event.target.title.value,
      description: event.target.description.value,

      status: event.target.status.value,
    }
    axios
      .put(`${process.env.REACT_APP_URL}book/${id}`, obj)
      .then((result) => {
        console.log(result.data);
        this.setState({
          books: result.data,
        });
        this.handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  componentDidMount = () => {

    axios
      .get(`${process.env.REACT_APP_URL}books`)
      .then((result) => {
        console.log(result.data);
        this.setState({
          books: result.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    /* TODO: render all the books in a Carousel */
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <div>
          {" "}
          <Button variant="primary" onClick={this.handleShow}>
            Add Book
          </Button>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={this.addBook}>
                <Form.Group
                  className="mb-3"
                  name="title"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>title</Form.Label>
                  <Form.Control type="text" name="title" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                  name="description"
                >
                  <Form.Label>description</Form.Label>
                  <Form.Control as="textarea" rows={3} name="description" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>status</Form.Label>
                  <Form.Select name="status" id="status">
                    <option value="Life Changing">Life Changing</option>
                    <option value="Favorite Five">Favorite Five</option>
                    <option value="Recommended To Me">Recommended To Me</option>
                  </Form.Select>
                  <Button variant="primary" type="submit">
                    Save Changes
                  </Button>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        {this.state.books.length ? (<div>
          <Carousel>
            {this.state.books.map((Element) => {
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
                    <Button
                      variant="danger"
                      onClick={() => this.deleteBook(Element._id)}
                       style={{ margin :'10px' }}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="warning"
                      onClick={() => this.openForm(Element)}
                    >
                      update
                    </Button>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}{" "}
          </Carousel>
          <UpdateForm
            showUp={this.state.showUp}
            handleClose={this.handleClose}
            handleUpdate={this.handleUpdate}
            crtBook={this.state.crtBook}
          />
        </div>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    );
  }
}


export default BestBooks;
