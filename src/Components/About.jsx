/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/istockphoto-1421052589-612x612.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm an accomplished full-stack software developer with extensive proficiency in advanced programming languages. My professional background demonstrates a strong dedication to continuous learning and a track record of successful contributions to various projects, which have significantly enhanced my skill set and broadened my knowledge base. I derive great satisfaction from employing innovative approaches to design distinct and intuitive user interfaces that embody simplicity and creativity."
/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web design",
  "User experience",
  "Inclusive design",
  "Focus group testing",
  "Graphic design",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
 "I'm passionate about driving innovation and solving problems in new creative ways as a full-stack developer. With a solid foundation in both front-end and back-end development, I constantly seek opportunities to leverage my skills and experience to make technology accessible to all. By combining my expertise in UI/UX design with my comprehensive knowledge of full-stack development, I strive to create seamless and user-friendly experiences that enhance usability and engagement. I am committed to continuously exploring new and better approaches, pushing the boundaries of what is possible, and contributing to the advancement of technology in meaningful ways."
const About = () => {
  return (
    <section className="light" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
