import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Task } from "../../components/Task";
import { TaskInput } from "../../components/TaskInput";

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header></Header>
      {/* <div>
        <h4 className="display-4 fst-italic text-center">Todo List Mock Up</h4>
        <p className="text-secondary text-center">
          This lab teach you how to split react component(s)
        </p>
      </div> */}

      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput></TaskInput>
        {/* <div className="d-flex gap-1">
          <input
            className="form-control"
            placeholder="Insert a task here.."
          ></input>
          <button className="btn btn-primary">Add</button>
        </div> */}

        {/* task */}
        <Task title="Read a book"></Task>

        {/* task */}
        <Task title="Take a shower"></Task>
        {/* <div className="d-flex p-3 gap-2 align-items-center border-bottom">
          <span>Take a shower</span>
          <button className="btn btn-success">Done</button>
          <button className="btn btn-danger">Delete</button>
        </div> */}
        {/* task */}
        <Task title="Sleep"></Task>
        {/* <div className="d-flex p-3 gap-2 align-items-center border-bottom">
          <span>Sleep</span>
          <button className="btn btn-success">Done</button>
          <button className="btn btn-danger">Delete</button>
        </div> */}
      </div>

      {/* //footer section */}
      <Footer
        year="2023"
        fullname="Sirawit Sirabanchongkran"
        studentId="650610810"
      ></Footer>
      {/* <div className="mt-3">
        <p className="text-secondary text-center">
          copyright © 2023 Chayanin Suatap 12345678
        </p>
      </div> */}
    </div>
  );
}
