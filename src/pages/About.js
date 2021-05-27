import React from "react";
// import img from "../../../images/IMG_33.jpeg"

function About() {
  return (
      <div>
        <div id="about" className="about">
        <div className="container">
             <div className="section-title">
                 <h2>About</h2>
                 <p> I was born in Tijuana, Mexico on February 17th 1995. I grew up there until I moved to San
                        Diego, California at the age of 13 in 2008. I attended Point loma High School all 4 years before
                        moving
                        to Boston, Massachussets to continue my college education.
                        At the University of Massachussets, Boston I studied Social Psychology and Spanish
                        Literature.Also, I
                        was part of the soccer team all 4 years, being captain my senior year. </p>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    {/* <img src={img} className="img-fluid img-thumbnail" id="img2" alt="Omar" /> */}
                </div>
                <div className="col-lg-8 pt-4 pt-lg-0 content">
                    <h3>Full Stack Web Developer</h3>
                    <div className="row">
                    <div className="col-lg-6">
                        <ul>
                            <li><i className="icofont-rounded-right"></i><strong>Website:</strong> www.example.com</li>
                            <li><i className="icofont-rounded-right"></i><strong>Phone:</strong> +1 415 812 8224</li>
                            <li><i className="icofont-rounded-right"></i><strong>City:</strong> Irvine, CA</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <ul>
                            <li><i className="icofont-rounded-right"></i><strong>Degree:</strong> Master</li>
                            <li><i className="icofont-rounded-right"></i><strong>Email:</strong> omartdh@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
         </div>
    </div> 
  </div>
</div>
  );
}

export default About;