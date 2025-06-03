import { useEffect, useState } from "react"

export default function UseEffect_Example1(){
    const [count, setCount] = useState(1);
    const [posts, setPosts] = useState([]);
    //mỗi khi component được render lại sẽ chạy lại logic useEffect

    //mỗi khi state thay đổi cả hàm function component chạy lại, rồi chạy lại vòng đời render ra jsx rồi chạy vào useEffect
    useEffect(()=>{
        // fetch("https://jsonplaceholder.typicode.com/posts")
        //     .then(response => response.json())
        //     .then(json => setPosts(json))
    });
    
    return(
        <>
            {/* <div>{count}</div>
            <button onClick={()=>setCount(count + 1)}>Click me</button> */}
            {posts.map((post, index)=>{
                return (
                    <div key={index}>
                        {post.title}
                    </div>
                )
            })}
        </>
    )
}