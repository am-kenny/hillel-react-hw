import PropTypes from "prop-types";
import {useContext} from "react";
import {UserContext} from "../../context/UserInfoContext.jsx";
import Button from "../Button/Button.jsx";

const BlogPost = ({ post }) => {
    const {permissions} = useContext(UserContext)

    let deleteButton
    if (!permissions.includes("admin")) {
        deleteButton = null;
    } else {
        deleteButton = <Button onClick={() => {
            console.log(`Emulating delete request for post ${post.id}`)
        }} text={"Delete"}/>
    }

    return (
        <div key={post.id} className="blog-post">
            <div className="post-title-container">
                <h3 className="post-title">{post.title}</h3>
            </div>
                <img src={post.image} alt={post.title} className="post-image" />
            <div className="post-bottom">
                <p className="post-published-at">{post.publishedAt}</p>
                <a className="post-read-link" href="">Read more</a>
            </div>
            {deleteButton}
        </div>
    );
};

BlogPost.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        publishedAt: PropTypes.string.isRequired,
    }).isRequired,
};


export default BlogPost