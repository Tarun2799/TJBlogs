import React from 'react'

const Menu = () => {

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
    <div className='menu'>
        <h1>Other posts you may like</h1>
        {posts.map(post=>(
            <div className="post" key={post.id}>
                <img src={post.img} alt="" />
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>
        ))}
    </div>
  )
}

export default Menu