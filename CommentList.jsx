import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name:"김은혜",
        comment:"Wow",
    },
    {
        name: "Lee",
        comment:"Good",
    },
];



function CommentList(props){
    return (
       <div>
        {commentList.map((Comment) => {
            return (
                <Comment name = {comment.name} comment = {comment.comment}/>
            )
        })}
       </div>
    );
}

export default CommentList;