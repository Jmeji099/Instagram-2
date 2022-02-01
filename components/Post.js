import { useSession } from "next-auth/react";
import {useState, useEffect} from "react";
import {
    addDoc, 
    collection, 
    serverTimestamp, 
    doc, 
    updateDoc,
    onSnapshot,
    orderBy,
    query,
} from "firebase/firestore";
import { db } from "../firebase";
/* eslint-disable @next/next/no-img-element */
import {
    DotsHorizontalIcon,
    BookmarkIcon,
    ChatIcon,
    EmojiHappyIcon, 
    HeartIcon,
    PaperAirplaneIcon,
} from "@heroicons/react/outline";

import { HeartIcon as HeartIconFilled } from 
'@heroicons/react/solid'; 

function Post({id, username, userImg, img, caption}) {
    const { data: session } = useSession();
    const[comment,setComment] = useState("");
    const[comments, setComments] = useState([]);


    useEffect(() => 
            onSnapshot(
                query(collection(db,'posts', id, 'comments'), orderBy("timestamp", "desc")),
                (snapshot) => {
                    setComments(snapshot.docs);
                }
            ),
    );

    const sendComment = async (e) => {
        e.preventDefault();

        const commentToSend = comment;
        setComment('');
        await addDoc(collection(db, 'posts', id, 'comments'),{
            comment: commentToSend,
            username: session.user.username,
            userImage: session.user.image,
            timestamp: serverTimestamp(),
        })
    }

    return (
        <div className="bg-white my-7 border rounded-sm">
            {/* Top Sections of Post */}
            <div className="flex items-center p-5">
                <img 
                    src={userImg} className="rounded-full h-12 w-12
                    object-contain border p-1 mr-3"alt="profile pic" />
                <p className="flex-1 font-bold">{username}</p>
                <DotsHorizontalIcon className="h-5"/>
            </div> 
            {/* Image Section */}
            <img src={img} className="object-cover w-full"alt="image" />

            {/* Buttons Only Shown while logged in */}
            {session &&  (
            <div className="flex justify-between pt-4 px-4">
                <div className="flex space-x-4">
                    <HeartIcon className="postBtn" />
                    <ChatIcon className="postBtn"/>
                    <PaperAirplaneIcon className="postBtn rotate-45"/>
                </div>
                <BookmarkIcon className="postBtn"/>
            </div>
            )}
            {/* Caption Section */}
            <p className="p-5 truncate">
                <span className="font-bold mr-1">{username} </span> {caption}
            </p>
            {/* comments*/}
                <div>
                </div>

            {/* input box*/}
            {session && (
                <form className="flex items-center p-4">
                <EmojiHappyIcon className="h-7"/>
                <input type="text" 
                        placeholder="Comment" 
                        value={comment}
                        onChange={e=> setComment(e.target.value)}
                        className="border-none flex-1 focus:ring-0 outline-none" 
                        />
                <button className="font-semibold text-blue-400" 
                        disabled={!comment.trim()} 
                        onClick={sendComment} >Post</button>
                </form>

            )}

        </div>
    )
}

export default Post
