import { useState } from "react";

function AddPost(props) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addPost(title, body);
    setTitle("");
    setBody("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-dark rounded-4 p-4 m-auto w-100"
    >
      <h2 className="text-center mt-0 mb-3">Add new a Card</h2>
      <div className="d-flex mb-4">
        <label htmlFor="title" className="fs-4 me-4 fw-bold">
          Title
        </label>
        <input
          name="title"
          type="text"
          value={title}
          className="form-control border border-dark"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="d-flex mb-4">
        <label htmlFor="body" className="fs-4 me-4 fw-bold">
          Body
        </label>
        <textarea
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="form-control border border-dark"
        ></textarea>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="submit"
          className="btn btn-success justify-content-center"
        >
          Add Card
        </button>
      </div>
    </form>
  );
}

export default AddPost;
