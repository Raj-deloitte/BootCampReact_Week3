import React, { useState } from "react";
import "./Description.css";

const Description = () => {
  const initialWordLimit = 500;
  const [seeMore, setSeeMore] = useState(true);
  const [wordLimit, setWordLimit] = useState(initialWordLimit);
  const toggleSeeMore = () => {
    setSeeMore(!seeMore);
    setWordLimit(seeMore ? null : initialWordLimit);
  };
  const fullText = `<p>
  An Advanced Java Tutorial aimed towards the Developer Who Already
  has Learned the Fundamentals of Java Programming.
</p>
<p>
  In this Advanced Java Programming training course, expert content
  provider Infinite Skills builds on the beginners Java course, and
  goes deeper into programming topics that help you to understand
  these more advanced Java concepts. Designed for the more experienced
  Java developer, you should have a good working knowledge of the Java
  programming language before going through this tutorial.
</p>
<p>Why take this course? </p>
<p>
  This course starts with explaining what programming really is? Have
  you ever wondered how things actually work in a program?
</p>
<p>1. Teaches the foundation of GENERAL programming </p>
<p>
  When you like what you do, it reflects. This is not a job for me, so
  I wake up wanting to code and help my students. Basically you pay
  once, get the course forever and get extra values added all the
  time, you have to love that :)
</p>
<p> 2. New lectures added all the time</p>
<p>
  
  When you like what you do, it reflects. This is not a job for me, so
  I wake up wanting to code and help my students. Basically you pay
  once, get the course forever and get extra values added all the
  time, you have to love that :)
</p>
<p>3. Fun place to be</p>
<p>
  I love making my lectures fun and engaging, so no boring lectures
  here!
</p>
<p>4. The support you get in this course in unmatched</p>
<p>
  have you ever joined a class and received very little support or
  none at all? Well that is not going to happen in this class, because
  I love helping my students.
</p>
<p>
  From ground till sky level this course covers every concept in
  Selenium automation which is a need of current automation industry.
</p>
<p>
  {"*************"}COURSE HIGHLIGHTS {"*******************"}
</p>
<ul>
  <li>
    Selenium IDE / RC /WebDriver with all Advance level concepts
  </li>
  <li>Selenium GRID</li>
  <li>Core Java Basics</li>
  <li>Junit / TestNG, ANT, Repost generation , batch execution</li>
  <li>SVN and MAVEN</li>
  <li>Git, GitHUB</li>
  <li>Continuous Integration - Jenkins / Hudson</li>
  <li>ata Driven Framework</li>
  <li>Hybrid (Keyword + DataDriven) Framework</li>
  <li>Page Object Model with factories</li>
  <li>Cucumber JVM - BDD Framework</li>
  <li>SauceLab INtegration</li>
  <li>Docker</li>
  <li>Mobile Automation Testing Basics</li>
  <li>Selenium 3.0- Appium</li>
  <li>Selenium 3.0- Selendroid</li>
  <li>Selenium 3.0- IOS Driver</li>
  <li>Live Examples and Assignments</li>
</ul>
<p>
  By the conclusion of this training course, you will have a clear
  understanding of each of the topics of Advanced Java
  Programming.....
</p>`;
  const truncatedText =
    wordLimit !== null ? fullText.slice(0, wordLimit) : fullText;
  return (
    <>
      <div className="full_description">
        <h2>Description</h2>
        <div
          className="text_area"
          dangerouslySetInnerHTML={{ __html: truncatedText }}
        />
        {fullText.length > initialWordLimit && (
          <h5 onClick={toggleSeeMore}>{seeMore ? "See More " : "See Less"}</h5>
        )}
      </div>
    </>
  );
};

export default Description;
