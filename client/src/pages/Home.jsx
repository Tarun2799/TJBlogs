import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

  const posts = [{
    id: 1,
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptates reiciendis delectus tenetur dolorem! spernatur rerum, iusto eum, dolorem praesentium eius consectetur accusantium",
    img: "https://images.pexels.com/photos/2820966/pexels-photo-2820966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptates reiciendis delectus tenetur dolorem! Aspernatur rerum, iusto eum, dolorem praesentium eius consectetur accusantium quisquam magni fugit asperiores doloremque",
    img: "https://images.pexels.com/photos/2474835/pexels-photo-2474835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptates reiciendis delectus tenetur dolorem! Aspernatur rerum, iusto eum,",
    img: "https://images.pexels.com/photos/8268029/pexels-photo-8268029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },];


  return (
    <div className='home'>
      <div className="posts">
        {posts.map( post =>(
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}> 
                <h1>{post.title}</h1>
              </Link>
                <p>{post.desc}</p>
                <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home