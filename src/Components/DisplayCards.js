import React from "react";

function DisplayCards(props) {
  return (
    <div
      className="card d-flex-column border border-dark m-3"
      style={{ height: "25rem", width: "18rem" }}
    >
      <div className="card-body d-flex-column text-center">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.body}</p>
      </div>
      <div className="card-footer bg-white d-flex justify-content-center">
        <button
          href="#"
          className="btn btn-danger"
          onClick={() => props.deletePost(props.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default DisplayCards;
