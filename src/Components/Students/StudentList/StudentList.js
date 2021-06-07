import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import StudentForm from "../StudentForm/StudentForm";
import getRandomInt from "../../../Functions/Random/random";

export default function StudentsList({
  students,
  addStudent,
  onPikingStudent,
  studentToShow,
}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [wantSortList, setWantSortList] = useState(false);

  const handleSort = () => setWantSortList(true);
  const canceleSort = () => setWantSortList(false);

  return (
    <>
      <h1
        className="text-center font-weight-bolder"
        style={{ fontFamily: '"Playfair Display", serif', fontSize: "10vh" }}
      >
        Students Center
      </h1>
      <div className="container">
        <div className="row justify-content-center mt-4">
          <ol className=" m-3 col-3 list-group list-group-numbered">
            <div>
              <Button
                variant="secondary"
                onClick={handleShow}
                className="mt-4 mx-1"
              >
                Add Student
              </Button>
              {!wantSortList ? (
                <Button
                  variant="warning"
                  onClick={handleSort}
                  className="mt-4 mx-1"
                >
                  Sort by Name
                </Button>
              ) : (
                <Button
                  variant="warning"
                  onClick={canceleSort}
                  className="mt-4 mx-1"
                >
                  Stop Sorting
                </Button>
              )}
            </div>
            {(!wantSortList
              ? students
              : (students = students.sort((a, b) => {
                  if (a.username < b.username) {
                    return -1;
                  }
                  if (a.username > b.username) {
                    return 1;
                  }
                  return 0;
                }))
            ).map((item, index) => {
              return (
                <>
                  <li
                    key={index}
                    onClick={() => onPikingStudent(index)}
                    className="mt-2 list-group-item text-center rounded list-group-item-action"
                  >
                    {item.username}
                  </li>
                </>
              );
            })}
            {
              <Modal show={show} onHide={handleClose} className="">
                <Modal.Header
                  closeButton
                  className="position-absolute border-0"
                ></Modal.Header>
                <StudentForm
                  addStudent={addStudent}
                  handleClose={handleClose}
                />
              </Modal>
            }
          </ol>
          {studentToShow === -1 ? (
            ""
          ) : (
            // <Card
            //   className="m-5 col-9 align-self-start"
            //   style={{ maxHeight: "75vh", maxWidth: "75vh" }}
            // >
            //   <Card.Body className="d-block">
            //     <Card.Title
            //       className="text-center font-weight-bold font-italic"
            //       style={{ fontSize: "5vh" }}
            //     >
            //       {students[studentToShow].username}
            //     </Card.Title>
                

<div class="st m-5 col-4 align-self-start">
  <div class="avatar-flip">
    <img className='student' src={`https://randomuser.me/api/portraits/${students[studentToShow].gender === 'Male'? 'men':'women'}/${getRandomInt(99,10)}.jpg`} height="150" width="150"></img>
    <img className='student' src="https://raw.githubusercontent.com/laudep/code-gif-generator/master/docs/img/generating.gif" height="150" width="150"></img>
  </div>
  <h1 className='student'>{students[studentToShow].username}</h1>
  <div className='d-flex flex-column text-left'>
  <p className='student'><strong>Course:&nbsp;</strong>{" "}{students[studentToShow].course}</p>
  <p className='student'><strong>address:&nbsp;</strong>{" "}{students[studentToShow].address}</p>
  <p className='student'><strong>gender:&nbsp;</strong>{" "}{students[studentToShow].gender}</p>
  <p className='student'><strong>email:&nbsp;</strong>{" "}{students[studentToShow].email}</p>
  </div>
</div>



            //     <div className="border-black  border-top border-bottom">
            //       <strong>Email:&nbsp;</strong> {students[studentToShow].email}
            //     </div>
            //     <div className="border-black  border-top border-bottom">
            //       <strong>Course:&nbsp;</strong>{" "}
            //       {students[studentToShow].course}
            //     </div>
            //     <div className="border-black  border-top border-bottom">
            //       <strong>Address:&nbsp;</strong>{" "}
            //       {students[studentToShow].address}
            //     </div>
            //     <div className="border-black  border-top border-bottom">
            //       <strong>Gender:&nbsp;</strong>{" "}
            //       {students[studentToShow].gender}{" "}
            //     </div>
            //   </Card.Body>
            // </Card>
          )}
        </div>
      </div>
    </>
  );
}
