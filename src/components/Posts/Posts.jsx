import React, { useState } from "react";
import Post from "../Post/Post";
import styles from './posts.module.css' 

const Posts = (props) => {
    // const { posts } = props;
    const [posts, setPosts] =useState(props.posts)
    const [newPost, setNewPost] = useState("");

    //это функция формы на клик
    const addPost = (event) => {
        event.preventDefault()
        const postObject = {
            id: posts.lenght + 1,
            title: newPost,
            published: Math.random() > 0.5 
        }
        setPosts(posts.concat(postObject)) //[{}, {}, {}] .concat({}) -> [{}, {}, {}, {}]
        setNewPost('')
    };

    //функция на веддение букв
    // const handlePostChange = (event) => {
    //     // console.log(event.target.value) //то что пользователь водит в input
    //     setNewPost(event.target.value)
    // }

    return  (
        <div>
            {posts.map((post) => {
                return (
                    <Post key={post.id} post={post} /> //вытащили в в Post.jsx
                );
            })}

            <form className={styles.forms} onSubmit={addPost}>  {/* чтобы слушать форму вешаем onSubmit */}
                <input
                    type="text"
                    className={styles.formInput}
                    value={newPost}
                    onChange={(event) => setNewPost(event.target.value)}
                />
                <input
                 type="submit" 
                 className={styles.formBtn}
                 value="Создать пост" />
            </form>
        </div>
    );
};

export default Posts;
