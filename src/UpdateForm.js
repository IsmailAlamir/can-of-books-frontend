import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
class UpdateForm extends React.Component {
    render() {
        return (
            <div>
                <Modal show={this.props.showUp} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.handleUpdate}>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                            >
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    defaultValue={this.props.crtBook.title}
                                    name="title"
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={3} defaultValue={this.props.crtBook.description} name="description" />
                                <Form.Label>status</Form.Label>
                                <Form.Select name="status" id="status">
                                    <option defaultValue={this.props.crtBook.status}>{this.props.crtBook.status}</option>
                                    <option value="Life Changing">Life Changing</option>
                                    <option value="Favorite Five">Favorite Five</option>
                                    <option value="Recommended To Me">Recommended To Me</option>
                                </Form.Select>
                            </Form.Group>
                            <Button variant="primary" type="submit" >
                                Save Changes
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
export default UpdateForm;
