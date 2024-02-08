import {useEffect, useState} from "react";
import BlogPost from "../../components/Blog/BlogPost.jsx";
import './Blog.css'
import useFetch from "../../hooks/useFetch.jsx";

const Blog = () => {
    const {data: posts, loading, error} = useFetch('https://jsonplaceholder.org/posts');

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Something went wrong: {error.message}</div>
    }


    return (
        <div className="container">
            <h1 className="blog-title">Blog</h1>
            <div className="blog-posts">
                {posts.map((post) => (
                    <BlogPost key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}

export default Blog