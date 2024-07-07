import React from 'react';
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

const SinglePost = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/8268029/pexels-photo-8268029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/24461005/pexels-photo-24461005/free-photo-of-model-in-coat-and-boots.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <div className="info">
            <span>sanz</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cupiditate quas libero maxime</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque perferendis ullam eveniet dolorum facilis blanditiis doloribus dolores harum numquam? Sint voluptatem adipisci accusamus aperiam. 
        <br/><br/>Fugit veritatis, nesciunt consequuntur inventore tempore sint odit magnam aperiam optio delectus error porro aliquid ab nobis modi qui culpa accusantium, accusamus quis voluptas amet reprehenderit velit aliquam numquam. <br/><br/>Voluptatem officiis fugiat impedit harum delectus laborum libero cum accusamus natus quae molestias earum nam, excepturi dicta officia tenetur nemo non. Minus dolorum quibusdam et dolorem aut quia tempore blanditiis sequi voluptas enim, dolor provident ut, facilis deleniti corrupti. Culpa tempora animi accusantium aliquid sapiente libero dolore?
        <br/><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quam facere, in totam expedita aspernatur. Alias dicta incidunt voluptatem vitae, nesciunt, quo repellendus eaque quos sit fugit, explicabo rem eos.</p>
      </div>
      <Menu/>
    </div>
  )
}

export default SinglePost;