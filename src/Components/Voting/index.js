import React, { useEffect, useState } from "react";
import  Container from "react-bootstrap/Container";
import  Col  from "react-bootstrap/Col";
import  Row from "react-bootstrap/Row";
import VotingData from "../../DAL/Voting/data";
import VotingCard from "./VotingCard";

function Voting() {
    let [items, setItems] = useState([]);
    let [currComment, setCurrComment]= useState('')
    
    function changeCurrComment(comment) {
        setCurrComment(comment)
    }

    useEffect(() => {
        setItems(VotingData);
      }, []);

      function changeVoteCount(objName, upOrDown) {
        items = items.map((item) => {
          if (item.name === objName) {
              if(upOrDown === '👍'){
                  item.votes += 1;
              }else if(upOrDown === '👎'){
                  item.votes -= 1;
              }
          }
          return item;
        });
        setItems(items);
      }

      function addComment(objName,comment) {
        items = items.map((item) => {
            if (item.name === objName && comment) {
              item.comments.push(comment);
              setCurrComment('')
            }
            return item;
          });
          setItems(items);
        }
      
    
    return<>
            <h1 className='mx-auto text center'>Voting App</h1>

        <Row className='bg-dark text-center mb-lg-4'>
            <Col className="text-white">Your Favorite Hero</Col>
            </Row>
        <Container>
            <Row>
            {items.sort((a ,b) => a.votes - b.votes).reverse().map((item, index) => {
                return(
                <Col>
                <VotingCard
                index={index} 
                item={item} 
                currComment={currComment}
                changeCurrComment={(comment) => changeCurrComment(comment)}
                addComment={(objName,comment) => addComment(objName,comment)}
                changeVoteCount={(objName, upOrDown) => changeVoteCount(objName, upOrDown)}/>
                </Col>
                )
            })}
            </Row>
            
            
        </Container>

    </>
}

export default Voting