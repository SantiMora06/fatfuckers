import  Santi  from "../assets/file.jpeg"
import  Omid  from "../assets/OMID.png"




const About = () => {
    return (
        <>
            <div className="AbouUs">
                <div className="Omid">
                    <img src={Omid} />
                    <h1>Omid Jahromi</h1>
                    <p>and I am a doctoral researcher in the field of engineering from Iran.
                        Currently, I am attending the Ironhack bootcamp to develop my skills and
                        transition into a full-stack developer role. With a solid foundation in engineering
                        and a passion for technology, I am excited to combine my research expertise with new
                        programming and development skills. For more info click <a href="https://www.linkedin.com/in/omidesmaeelipoor/">HERE</a> </p>
                </div>
                <div className="Santi">
                    <img src={Santi} />
                    <h1>Santiago Mora</h1>
                    <p>On my late 20s, nature lover and close to be FullStack Web Developer. Born and grown in Canary Islands,
                        with experience working or studying in Great Britain, Poland and Romania. For more info click <a href="https://www.linkedin.com/in/santi-mora/">HERE</a>
                    </p>
                </div>
            </div>

        </>
    );
}

export default About;