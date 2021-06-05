import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import StudentForm from "../StudentForm/StudentForm";

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
          <ol className=" m-3 col-3">
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
            <Card
              className="m-5 col-9 align-self-start"
              style={{ maxHeight: "75vh", maxWidth: "75vh" }}
            >
              <Card.Body className="d-block">
                <Card.Title
                  className="text-center font-weight-bold font-italic"
                  style={{ fontSize: "5vh" }}
                >
                  {students[studentToShow].username}
                </Card.Title>
                <div className="border-black  border-top border-bottom">
                  <strong>Email:&nbsp;</strong> {students[studentToShow].email}
                </div>
                <div className="border-black  border-top border-bottom">
                  <strong>Course:&nbsp;</strong>{" "}
                  {students[studentToShow].course}
                </div>
                <div className="border-black  border-top border-bottom">
                  <strong>Address:&nbsp;</strong>{" "}
                  {students[studentToShow].address}
                </div>
                <div className="border-black  border-top border-bottom">
                  <strong>Gender:&nbsp;</strong>{" "}
                  {students[studentToShow].gender}{" "}
                </div>
              </Card.Body>
            </Card>
          )}
        </div>
      </div>
    </>
  );
}
