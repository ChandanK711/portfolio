import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaPython, FaJs } from "react-icons/fa";


function About(){
    return(
    <div className="about-section">
     <h2>About Me</h2><br/>
     <p>
       I'm <strong>Ch. Chandan Kumar</strong>, currently pursuing my B.Tech at 
       <strong> Andhra University College of Engineering</strong>.
     </p>
     <p>
      I am interested in and excited to learn new skills, always looking to explore and grow as a developer.
     </p><br/>
     <p>Here are the technologies I'm familiar with</p><br/>
     <div className="skills">
        <div className="skill1"><FaHtml5 size={50} color="#e34c26" /></div>
        <div className="skill2"><FaCss3Alt size={50} color="#1572B6" /></div>
        <div className="skill3"><FaPython size={50} color="#3776AB" /></div>
        <div className="skill4"><FaJs size={50} color="#f0db4f"/></div>
        <div className="skill5"><FaReact size={50} color="#61DBFB"  /></div>
     </div>

    </div>
   

    )
}

export default About