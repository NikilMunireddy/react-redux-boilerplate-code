import React from 'react'
import PropTypes from 'prop-types'
import { getPosts } from '../actions/posts'
import { connect } from 'react-redux'

const Posts = ({ getPosts, posts }) => {
    return (
        <div>
            <h1> Posts </h1>
            <br/>
            <h3> Click the below button to get all posts </h3>
            <input type="submit" value="GET POSTS" onClick={getPosts} />
           { posts.data.map((post)=>(
               <div>
                   <h5>{post.id} &nbsp;&nbsp; {post.title}</h5>
                    <p>{post.body}</p>
               </div>
           ))}
        </div>
    )
}

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
}

const mapStateToProps = state =>({
    posts: state.posts
})


export default connect(mapStateToProps, { getPosts })(Posts)
