import './styles.css';

import { PostCard } from "../PostCard";



export const Posts = ({posts}) => (
    <div className="posts">
          {posts.map(post =>(
            <PostCard 
             key={post.id}
              // passando as props separadas
              // title={post.title}
              // body={post.body}
              // id={post.id}
              // cover={post.cover}

              // passando tudo de uma vez
             post={post}
            />

        ))}
    </div>
)