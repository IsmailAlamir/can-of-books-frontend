import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
{console.log(user)}
  return (
    isAuthenticated && (
        <div style={{  display: "flex",
        justifyContent:" space-around",
        margin: "50px 0px"}}>
        <Card style={{ width: '18rem' , backgroundColor:"#212529" , color:"white"}}   >
        <Card.Img variant="top" src={user.picture} alt={user.name} />
        <Card.Body>
          <Card.Title>{user.nickname}</Card.Title>
          <Card.Text>
          Hi, {user.name}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush" >
          <ListGroup.Item style={{ backgroundColor:"#212529" , color:"white"}}>{user.email?user.email:'no email found'} </ListGroup.Item>
          <ListGroup.Item style={{ backgroundColor:"#212529" , color:"white"}}>{user.sub}</ListGroup.Item>
          <ListGroup.Item style={{ backgroundColor:"#212529" , color:"white"}}>{user.updated_at}</ListGroup.Item>

        </ListGroup>
      </Card>
      </div>
          )
  );
};

export default Profile;



