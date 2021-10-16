import React from 'react'
import person_ref from './Assets/person_ref.png'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
import './Blog.css'
AOS.init();

class Blog extends React.Component {
    render() {
        return (
            <><div id="Blogsection">
            <div id="Blog_first_section" data-aos="fade-up" data-aos-duration="1000">
                        <h1>
                            Blogs
                        </h1>
                        <div id="blog_undertext"><p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        </div>
                        
                    </div>
                    
                    <div id="Blogboxes" >
                    <div id="blog_mobile1">
                    <div id="blogbox1">
                        <div id="blogbox_content"><h2>
                        How is life at IIT Roorkee?
                        </h2>
                        <p>
                        Life at an IIT <br/>is always great, <br/>but at IIT Roorkee…
                        </p>
                        <div id="blog_writer">
                            <img alt="img" src={person_ref}/>
                            <p>Name</p>
                        </div>
                        </div>
                        
                        
                    </div>
                    <div id="blogbox2">
                    <div id="blogbox_content"><h2>
                    What is the amazing point of IIT Roorkee?

                        </h2>
                        <p>
                        IIT Roorkee, oldest <br/>engineering college of<br/> our country, is really…
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
                    How are the clubs in IIT Roorkee?
                        </h2>
                        <p>
                        There are coding clubs,<br/> technical clubs, <br/>cultural clubs…
                        </p>
                        <div id="blog_writer">
                            <img alt="img" src={person_ref}/>
                            <p>Name</p>
                        </div>
                        </div>
                    </div>
                    <div id="blogbox4">
                    <div id="blogbox_content"><h2>
                            Which IIT has the best coding culture?

                        </h2>
                        <p>
                        Whenever someone talks<br/> of coding culture,<br/> the first name that comes…

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
                            How is life for freshers at IIT Roorkee?
                        </h2>
                        <p>
                        To be true absolutely <br/>amazing! I am not <br/>saying this just to brag…
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