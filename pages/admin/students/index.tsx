import React, { useState, useEffect } from "react";
import AdminLayout from "../../../components/AdminLayout";
import Sidebar from "../../../components/Sidebar";

export default function students() {
  const [students, setStudents] = useState<any>([]);
  const [editStu, setEditStu] = useState<any>();
  const [delId, setDelID] = useState<any>();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState<number>();

  useEffect(() => {
    var requestOptions = {
      method: "GET",
    };
    fetch("http://localhost:3001/users", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      setStudents(result), console.log(result);
    })
    .catch((error) => console.log("error", error));
  }, [])

  const findStu = (id: any) => {
    const item = students.find((stu: any) => stu._id === id);

    setEditStu(item);
  };

  // const editStud = (id: any) => {
  //   const newStu = students.map((stu: any) => (stu._id == id ? {id} : stu))

  //   setStudents(newStu)
  // }

  //const index = students.findIndex((stu: any) => stu._id === editStu.id);
  // students[index].first_name = firstName;
  // students[index].last_name = lastName;
  // students[index].username = userName;
  // students[index].age = age;

  // const editStudent = (title, _id) => {
  //   const newStu = students.map((stu:any) => (stu._id === _id ? {title, _id}: stu))

  //   setStudents(newStu);
  // }

  const deleteStu = async (id: any) => {
    try {
      var requestOptions = {
        method: "DELETE",
      };

      fetch(`http://localhost:3001/users/${id}`, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));

      students.splice(
        students.findIndex((stu: any) => stu._id === id),
        1
      );
    } catch (error) {
      alert("Could not delete");
    }
  };

  
  //   interface students {
  //     id: number;
  //     first_name: string;
  //     aliases: string[];
  //     occupation: string;
  //     gender: string;
  //     height: {ft: number; in: number;}
  //     hair: string;
  //     eyes: string;
  //     powers: string[]
  // }

  return (
    <>
      <Sidebar />
      <AdminLayout title="students">
        <div className="container">
          <div className="row">
            <table className="table table-hover table-responsive">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                  <th>Age</th>
                  <th>Action</th>
                </tr>
              </thead>
              {students.map((stu: any) => (
                <tbody>
                  <tr id="d1">
                    <td>{stu._id}</td>
                    <td id="f1">{stu.first_name}</td>
                    <td id="l1">{stu.last_name}</td>
                    <td id="m1">{stu.username}</td>
                    <td id="m1">{stu.age}</td>
                    <td>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#edit"
                        data-uid="1"
                        className="update btn btn-warning btn-sm"
                        onClick={() => findStu(stu._id)}
                      >
                        <span className="glyphicon glyphicon-pencil"></span>
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#delete"
                        data-uid="1"
                        className="delete btn btn-danger btn-sm"
                        value={stu._id}
                        onClick={(e: any) => setDelID(e.target.value)}
                      >
                        <span className="glyphicon glyphicon-trash"></span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>
        <div id="edit" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              <div className="modal-body">
                <input
                  id="ln"
                  type="text"
                  className="form-control"
                  name="id"
                  value={userName}
                  placeholder="Username"
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                />
                <input
                  id="fn"
                  type="text"
                  className="form-control"
                  name="fname"
                  value={firstName}
                  placeholder="First Name"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
                <input
                  id="mn"
                  type="text"
                  className="form-control"
                  name="lname"
                  value={lastName}
                  placeholder="Last Name"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
                <input
                  id="mn"
                  type="number"
                  className="form-control"
                  name="age"
                  value={age}
                  placeholder="Age"
                  onChange={(e: any) => {
                    setAge(e.target.value);
                  }}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  id="up"
                  className="btn btn-warning"
                  data-dismiss="modal"
                >
                  Update
                </button>
                <button
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div id="delete" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
                <h4 className="modal-title">Delete Data</h4>
              </div>
              <div className="modal-body">
                <strong>Are you sure you want to delete this data?</strong>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  id="del"
                  className="btn btn-danger"
                  data-dismiss="modal"
                  onClick={() => deleteStu(delId)}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="btn btn-default"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
}
