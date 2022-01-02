import Post from './Post'

function Posts() {
    //dummy data
    const posts = [
        {
            id: '123',
            username: '__juan_and_only_',
            userImg: 'profilePic.JPG',
            img: 'profilePic.JPG',
            caption: 'Understandable Have a nice day!',

        },
        {
            id: '123',
            username: '__juan_and_only_',
            userImg: 'profilePic.JPG',
            img: 'profilePic.JPG',
            caption: 'AYO!',
            
        },
        {
            id: '123',
            username: '__juan_and_only_',
            userImg: 'profilePic.JPG',
            img: 'profilePic.JPG',
            caption: 'AYO!',
            
        },
    ]

    return (
        <div>
            {posts.map((post) => (
                <Post 
                    key={post.id}
                    id = {post.id}
                    username = {post.username}
                    userImg = {post.userImg}
                    img = {post.img}
                    caption = {post.caption}
                />
            ))}
        </div>
    );
}

export default Posts
