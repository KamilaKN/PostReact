import React from "react";
import styles from './post.module.css';

const Post = (props) => {
    return (
        <div className={styles.post}>
            <p className={styles.title}>{props.post.title}</p>
            <p className={styles.descr}>{props.post.published ? "Опубликовано" : "Не опубликовано"}</p>
        </div>
    );
};

export default Post;
