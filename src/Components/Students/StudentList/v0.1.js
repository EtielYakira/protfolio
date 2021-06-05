// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
// import Modal from 'react-bootstrap/Modal'
// import {useState} from 'react'
// import StudentForm from '../StudentForm/StudentForm'

// export default function StudentsList({students,addStudent}) {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

    
//     return <div>
//     {/* <h1 className='text-center'>Students Center</h1>
//                     <Button variant="primary" onClick={handleShow} className='position-fixed mt-4'>
//                         Add <br></br>  Student
//                     </Button> */}
    
//     {/* <div className="d-flex m-3 flex-wrap justify-content-center"> */}
//     {
//         students
//         // .sort((a, b) =>{
//         //     if(a.username < b.username) { return -1; }
//         //     if(a.username > b.username) { return 1; }
//         //     return 0;
//         // })
//         .map((item) => {
//             return <>
//             {/* <Card key={item.username} className='m-1 col-lg-2 mb-5 mr-3' style={{ width: '13rem' }}>
//                 <div className='border mt-1'>
//                  <Card.Img variant="top" src="https://www.ispringsolutions.com/ispring_content/content/images/articles/user-roles-in-ispring-lms/users.png" className='rounded p-1'/>
//                  </div>
//                  <Card.Title>Card Title</Card.Title>
//                  <Card.Body>
//                 <div className="row border-black  border-top border-bottom"><strong>Username:&nbsp;</strong> {item.username}</div>
//                 <div className="row border-black  border-top border-bottom"><strong>Email:&nbsp;</strong> {item.email}</div>
//                 <div className="row border-black  border-top border-bottom"><strong>Course:&nbsp;</strong> {item.course}</div>
//                 <div className="row border-black  border-top border-bottom"><strong>Address:&nbsp;</strong> {item.address}</div>
//                 <div className="row border-black  border-top border-bottom"><strong>Gender:&nbsp;</strong>  {item.gender} </div>

//                 </Card.Body>
//             </Card> */}
//             <li>{item.username}</li>
//             </>
//         })
//     }
//                 {/* <Card className='m-1 col-lg-2 mb-5 mr-3' style={{ width: '12rem' }}>
//                 <Card.Img variant="top" src="https://www.ispringsolutions.com/ispring_content/content/images/articles/user-roles-in-ispring-lms/users.png" className='rounded p-1'/>
//                  <Card.Body>
//                     <Button variant="primary" onClick={handleShow}>
//                         Add Student
//                     </Button>
//                     <Modal show={show} onHide={handleClose} className=""  >
//                     <Modal.Header closeButton className="position-absolute border-0" >
//                     </Modal.Header>
//                     <StudentForm addStudent={addStudent} handleClose={handleClose} />
                        
//                     </Modal>
//                 </Card.Body>
//             </Card> */}


//     {/* </div> */}
//     </div>
// }