import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import axios from "axios";


// const paragraphStyle = {
//   WebkitLineClamp: 2,
//   WebkitBoxOrient: 'vertical',
//   overflow: 'hidden',
//   display: '-webkit-box'
// }

const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search;

  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const res = await axios.get(`/api/posts${cat}`);
        setPosts(res.data);
      }catch{
        console.log(err);
      }
    }
    fetchData()
  },[cat]);

  // const posts = [{
  //   id: 1,
  //   title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptates reiciendis delectus tenetur dolorem! spernatur rerum, iusto eum, dolorem praesentium eius consectetur accusantium",
  //   img: "https://images.pexels.com/photos/2820966/pexels-photo-2820966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // },
  // {
  //   id: 2,
  //   title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptates reiciendis delectus tenetur dolorem! Aspernatur rerum, iusto eum, dolorem praesentium eius consectetur accusantium quisquam magni fugit asperiores doloremque",
  //   img: "https://images.pexels.com/photos/2474835/pexels-photo-2474835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  // },
  // {
  //   id: 3,
  //   title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptates reiciendis delectus tenetur dolorem! Aspernatur rerum, iusto eum,",
  //   img: "https://images.pexels.com/photos/8268029/pexels-photo-8268029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  // },];


  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent
  }

  return (
    <div className='home'>
      <div className="posts">
        {posts.map( post =>(
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`../upload/${post.img}`} alt="" />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}> 
                <h1>{post.title}</h1>
              </Link>
                <p>{getText(post.desc)}</p>
                <Link className='link' to={`/post/${post.id}`}>
                <button>Read More</button>
                </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home