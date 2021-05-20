import React, { useState } from "react";

import "./Note.css";

export default function Note(props) {
  const { id, title, body } = props;
  const [post, setPost] = useState({
    id: id,
    title: title,
    body: body
  });

  return (
    <div className="post">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
