

import React from "react";
import Card  from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';
import {AiFillDislike, AiFillLike, AiOutlineNumber} from 'react-icons/ai'
import {BiMedal} from 'react-icons/bi'
function VotingCard({ item,currComment, changeVoteCount, addComment, changeCurrComment, index}) {

  return (
    <Card className="text-center" style={{ width: "20rem" }}>
      <Card.Img variant="top" src={`${item.img}`} />
        <Card.Header><strong>Vote count: {item.votes}</strong></Card.Header>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Title><AiOutlineNumber/>{index + 1}<span>{
            index === 0 ? <BiMedal style={{color:'gold'}}/>
            : index === 1 ? <BiMedal style={{color:'silver'}}/>
            : index === 2 ? <BiMedal style={{color:'brown'}}/>
            : ""
            }</span></Card.Title>
        <Button className='mx-1' value='👍' variant="info" onClick={(e) => changeVoteCount(item.name, e.target.value)}>
        <AiFillLike/>
        </Button>
        <Button className='mx-1' value='👎' variant="info" onClick={(e) => changeVoteCount(item.name, e.target.value)}>
          <AiFillDislike/>
        </Button>

        <InputGroup className="my-3">
    <FormControl
      placeholder="Comment Here"
      aria-label="Comment"
      defaultValue={""}
      onBlur={(e) => changeCurrComment(e.target.value)}
    />
    <InputGroup.Append>
      <Button variant="outline-secondary" onClick={() => addComment(item.name,currComment)}>Add Comment</Button>
    </InputGroup.Append>
  </InputGroup>
      

  <ListGroup>
      {item.comments.map((comment, index )=> <ListGroup.Item key={index}>{comment}</ListGroup.Item>)}
    </ListGroup>



      </Card.Body>
    </Card>
  );
}
export default VotingCard;