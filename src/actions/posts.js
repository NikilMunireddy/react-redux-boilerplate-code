import axios from 'axios'
import { GET_POSTS, GET_POSTS_ERROR } from './types';

export const getPosts = () => async dispatch => {

    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts/');
        dispatch({
            type: GET_POSTS,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: GET_POSTS_ERROR,
            payload: err
        })
    }
}