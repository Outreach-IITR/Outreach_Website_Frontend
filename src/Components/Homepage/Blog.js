import React from 'react'
import person_ref from './Assets/person_ref.png'
import './Blog.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

class Blog extends React.Component {
    render() {
        return (
            <><div id="Blogsection">
            <div id="Blog_first_section" data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine">
                        <h1>
                            Blogs
                        </h1>
                        <div id="blog_undertext"><p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        </div>
                        
                    </div>
                    
                    <div id="Blogboxes" data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine">
                    <div id="blog_mobile1">
                    <div id="blogbox1">
                        <div id="blogbox_content"><h2>
                            Article
                        </h2>
                        <p>
                            Lorem elit porta <br/> cras vulputate <br/>massa sed <br/>ullamcorper arcu <br/>enim.
                        </p>
                        <div id="blog_writer">
                            <img alt="img" src={person_ref}/>
                            <p>Name</p>
                        </div>
                        </div>
                        
                        
                    </div>
                    <div id="blogbox2">
                    <div id="blogbox_content"><h2>
                            Article
                        </h2>
                        <p>
                            Lorem elit porta <br/> cras vulputate <br/>massa sed <br/>ullamcorper arcu <br/>enim.
                        </p>
                        <div id="blog_writer">
                            <img alt="img" src={person_ref}/>
                            <p>Name</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div id="blog_mobile2">
                    <div id="blogbox3">
                    <div id="blogbox_content"><h2>
                            Article
                        </h2>
                        <p>
                            Lorem elit porta <br/> cras vulputate <br/>massa sed <br/>ullamcorper arcu <br/>enim.
                        </p>
                        <div id="blog_writer">
                            <img alt="img" src={person_ref}/>
                            <p>Name</p>
                        </div>
                        </div>
                    </div>
                    <div id="blogbox4">
                    <div id="blogbox_content"><h2>
                            Article
                        </h2>
                        <p>
                            Lorem elit porta <br/> cras vulputate <br/>massa sed <br/>ullamcorper arcu <br/>enim.
                        </p>
                        <div id="blog_writer">
                            <img alt="img" src={person_ref}/>
                            <p>Name</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    
                    <div id="blogbox5">
                    <div id="blogbox_content"><h2>
                            Article
                        </h2>
                        <p>
                            Lorem elit porta <br/> cras vulputate <br/>massa sed <br/>ullamcorper arcu <br/>enim.
                        </p>
                        <div id="blog_writer">
                            <img alt="img" src={person_ref}/>
                            <p>Name</p>
                        </div>
                        </div>
                    </div>
                 </div>   

                  
                
                
                
            </div></>
        )
    }}
    export default Blog;