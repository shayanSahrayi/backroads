import Title from "./Title.js";
const About=()=>{
    return <>
        <section className="section" id="about">
         <Title title={"About"} subTitle={"us"}/>
      <div className="section-center about-center">
        <div className="about-img">
          <img
            src="./images/about.jpeg"
            className="about-photo"
            alt="awesome beach"
          />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <a href="/ss" className="btn">read more</a>
        </article>
      </div>
    </section>
    </>
}

export default About;