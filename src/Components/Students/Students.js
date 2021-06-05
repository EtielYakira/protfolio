import StudentsList from "./StudentList/StudentList";
import { useState } from "react";
import studentsData from "../../DAL/Students/data";

function Students() {
  const [students, setStudents] = useState(studentsData);
  const [studentToShow, setStudentToShow] = useState(-1);
  let addStudent = (studentDetailObj) => {
    setStudents([...students, studentDetailObj]);
  };

  const onPikingStudent = (key) => {
    setStudentToShow(key);
  };

  return (
    <>
      <StudentsList
        students={students}
        addStudent={addStudent}
        onPikingStudent={onPikingStudent}
        studentToShow={studentToShow}
      />
    </>
  );
}

export default Students;
