import axios from 'axios';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';
import { toast } from 'react-toastify';


const Write = () => {

  const state = useLocation().state

  const [value, setValue] = useState( state?.title || '');
  const [title, setTitle] = useState(state?.desc || '');
  const [file, setFile] = useState(null); // beacuse we have is a string
  const [cat, setCat] = useState(state?.cat || "");

  const navigate = useNavigate();

  const upload = async ()=>{
    try {
      const formData = new FormData();
      formData.append("file", file)
      
      const res = await axios.post("/api/upload", formData)
      return res.data;
    } catch (err) {
      console.log(err)
    }
  }

  const handleClick = async e => {
    e.preventDefault()
    const imgUrl = await upload();

    try {
      state ? await axios.put(`/api/posts/${state.id}`, {
        title,desc:value, cat, img:file ? imgUrl : ""
      }) : await axios.post(`/api/posts/`, {
        title,desc:value, cat, img:file ? imgUrl : "", date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
      });
      toast.success("Blog is published😊");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='add'>
      <div className="content">
        <input type="text" value={title} placeholder='Title' onChange={e => setTitle(e.target.value)}/>
        <div className="editorContainer">
        <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{display: "none"}} type="file" name="" id="file"  onChange={e => setFile(e.target.files[0])}/>
          <label htmlFor="file" className='file'>Upload Image</label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
          <input type="radio" checked={cat === "art"} name="cat" id="art" value="art" onChange={e => setCat(e.target.value)} />
          <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
          <input type="radio" checked={cat === "science"} name="cat" id="science" value="science" onChange={e => setCat(e.target.value)} />
          <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
          <input type="radio" checked={cat === "technology"} name="cat" id="technology" value="technology" onChange={e => setCat(e.target.value)} />
          <label htmlFor="technology">Technology</label>
          </div>
          <div className="cat">
          <input type="radio" checked={cat === "cinema"} name="cat" id="cinema" value="cinema" onChange={e => setCat(e.target.value)} />
          <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="cat">
          <input type="radio" checked={cat === "design"} name="cat" id="design" value="design" onChange={e => setCat(e.target.value)} />
          <label htmlFor="design">Design</label>
          </div>
          <div className="cat">
          <input type="radio" checked={cat === "food"} name="cat" id="food" value="food" onChange={e => setCat(e.target.value)} />
          <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write