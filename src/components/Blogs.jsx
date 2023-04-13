import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Card from './Card';
import Spinner from './Spinner';
import "./Blogs.css"

const Blogs = () => {

    const {posts, loading} = useContext(AppContext)

  return (
    <div className='w-11/12 h-screen max-w-[670px] py-8 flex flex-col gap-y-7 mt-[60px] mb-[340px] items-center'>

    {
        loading ? (<Spinner/>):(
            posts.length === 0 ? (
                <div>
                    <p>No Post Found</p>
                </div>
            ) : 
            (
                posts.map((post) => (
                    
                    <div key={post.id}>
                        <p className='font-bold text-lg mt-[2px]'>{post.title}</p>
                        <p className='text-[13px]'>By <span className='italic'>{post.author}</span> on <span className='font-bold underline'>{post.category}</span></p>
                        <p className='text-[13px] mt-[10px]'>Posted on {post.date}</p>
                        <p className='text-[14px] mt-[10px]'>{post.content}</p>
                        <div className='flex gap-x-3 flex-wrap mt-[10px]'>
                            {post.tags.map((tag, index) => {
                                return <span key={index} className='text-blue-800 underline font-bold text-[12px]'>{`#${tag}`}</span>
                            })}
                        </div>
                    </div>

                ))
            )
        )
    }

    </div>
  )
}

export default Blogs;