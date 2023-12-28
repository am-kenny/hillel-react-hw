import {useEffect, useState} from "react";
import BlogPost from "./BlogPost.jsx";
import './Blog.css'

const Blog = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.org/posts')

                if (!res.ok) {
                    throw new Error("Failed to fetch")
                }

                const data = await res.json()
                setPosts(data)
            } catch (e) {
                console.error(e.message)
            }
        }

        getPosts()

    }, []);

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