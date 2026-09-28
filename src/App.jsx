import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const API = "http://localhost:3000/blogs";
  const [myList, setMyList] = useState([]);
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [id, setId] = useState(null);

  const getData = () => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setMyList(data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const blog = {
      title,
      img,
      author,
      date,
    };

    if (!id) {
      fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
      })
        .then((response) => response.json())
        .then(() => {
          getData();
          clearForm();
        });
    } else {
      fetch(`${API}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
      })
        .then((response) => response.json())
        .then(() => {
          getData();
          clearForm();
        });
    }
  };

  const handleDelete = (id) => {
    fetch(`${API}/${id}`, {
      method: "DELETE",
    }).then(() => {
      getData();
    });
  };

  const handleEdit = (blog) => {
    setId(blog.id);
    setTitle(blog.title);
    setImg(blog.img);
    setAuthor(blog.author);
    setDate(blog.date);
  };

  const clearForm = () => {
    setId(null);
    setTitle("");
    setImg("");
    setAuthor("");
    setDate("");
  };

  return (
    <div className="main-layout">
      <div className="left-side">
        <div className="form-container">
          <h2>{id ? "Edit Blog" : "Add Blog"}</h2>
          <form onSubmit={handleClick}>
            <input type="text" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
            <input type="text" value={img} placeholder="Image URL" onChange={(e) => setImg(e.target.value)} />
            <input type="text" value={author} placeholder="Author" onChange={(e) => setAuthor(e.target.value)} />
            <input type="text" value={date} placeholder="Date" onChange={(e) => setDate(e.target.value)} />
            <button type="submit" className="add-btn"> {id ? "Edit" : "Add"} </button>
            {id && (
              <button type="button" onClick={clearForm} className="cancel-btn"> Cancel </button>
            )}
          </form>
        </div>
      </div>
      <div className="right-side">
        <div className="blog-grid">
          {myList.map((element, index) => (
            <div className="blog-item" key={element.id} >
              <div className="blog-card">
                <img src={element.img} alt={element.title} className="blog-image" />
                <div className="blog-body">
                  <h6 className="blog-number">
                    Blog : {index + 1}
                  </h6>
                  <h4 className="blog-title">
                    {element.title}
                  </h4>
                  <h6 className="blog-author">
                    AUTHOR : {element.author}
                  </h6>
                  <p className="blog-date">
                    DATE : {element.date}
                  </p>
                </div>
                <div className="card-buttons">
                  <button onClick={() => handleDelete(element.id)} className="delete-btn" > Delete</button>
                  <button onClick={() => handleEdit(element)} className="edit-btn">Edit</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;