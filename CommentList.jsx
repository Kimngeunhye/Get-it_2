import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name:"κΉμν",
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