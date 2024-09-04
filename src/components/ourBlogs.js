import React, { useState } from "react"
import { BlogsData } from "../data/blogsData"
import '../styles/blogs.css'

export default function OurBlogs() {

    const [blogs, setBlogs] = useState(BlogsData)

    const blogsMap = blogs.map((item, index) => {
        let i
        if(index === 0){
            i = 1
        } else if(index === 1) {
            i = 2
        } else if(index === 2) {
            i = 3
        }
        return (
            <div key={item.id} className="blogs-child"> 
                <div className="pic-container"> 
                    <img src={item.image} className={`blog${i}`}/> 
                </div>
                <h3 className="blog-title">{item.title}</h3>
                <div className="blog-publisher">{item.publisher}</div>
                <div className="blog-comment">{item.comment}</div>  
                <button className="blog-button">Read More</button>                   
            </div>
        )
    })

    return (
                <div className="blogs-container">
                    <div className="our-blogs">our <span className="our-blogs-child">blogs </span> </div>
                    <div className="blogs-grid">
                        {blogsMap}
                    </div>
                </div>
    )
}