import { Component } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
class Profile extends Component {
  render() {
    /* TODO: render information about the developers */
    return (
    
      <div style={{  display: "flex",
      justifyContent:" space-around",
      margin: "50px 0px"}}>
      <Card style={{ width: '18rem' , backgroundColor:"#212529" , color:"white"}}   >
      <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/109903994?v=4" />
      <Card.Body>
        <Card.Title>Abdallah Mosa</Card.Title>
        <Card.Text>
        Hi, I'm Ismail Al Amir from Jordan , Full-stack developer
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush" >
        <ListGroup.Item style={{ backgroundColor:"#212529" , color:"white"}}>JavaScript </ListGroup.Item>
        <ListGroup.Item style={{ backgroundColor:"#212529" , color:"white"}}>Python</ListGroup.Item>
        <ListGroup.Item style={{ backgroundColor:"#212529" , color:"white"}}>Java</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://github.com/IsmailAlamir">GitHub</Card.Link>
        <Card.Link href="https://www.linkedin.com/in/isalamir/">linkedin</Card.Link>
      </Card.Body>
    </Card>
    </div>
    
      )
  }
};
export default Profile;
