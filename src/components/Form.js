import React from "react";

export default function Form() {
    const styles = {
        width:"650px",
         height:"410px",
          style:"border:0",
           allowfullscreen:"",
           loading:"lazy"
    };

  return (
    <main>
    <div className="contact" >
      <section> <h3>Get In Touch</h3>
        <div class="showcase-form">
            
    <form name="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
      
        <label htmlFor="name">
        <input type="text" id="name" name="name"placeholder="Name" required />
        </label> <br />

        <label >
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  required
                />
              </label>
     
    
        <label htmlFor="email">
        <input type="email" name="email" placeholder="Email" required />
        </label> <br />

        <label>
                Your Role : {""}
                <select name="role[]" multiple>
                  <option value="Team Lead">Team Lead</option>
                  <option value="Full Stack Developer">Full Stack Developer</option>
                  <option value="Front-End Developer">Front-End Developer</option>
                  <option value="Software Engineer">Software Engineer</option>
                </select>
              </label>
              <br />

              <div class="field">
                <input type="file" name="myfile" id="myfile" placeholder="Upload file" />
              </div>

              {/* spam filtering */}
              <div class="field">
                <div data-netlify-recaptcha="true"></div>
              </div>

      <p>
        <label htmlFor="message">
        <textarea id="message" name="message" required></textarea>
        </label> <br />
      </p>
      <p>
      <input type="submit" value="Send" class="btn" />
      </p>
    </form>
    </div>
        </section>

        <section>
        
        <div className="location card">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.8666592099808!2d-73.94411018451345!3d40.74295947932856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2592e9fcf1a65%3A0x7e37044e79db712a!2s47-10%20Austell%20Pl%202nd%20floor%2C%20Long%20Island%20City%2C%20NY%2011101!5e0!3m2!1sen!2sus!4v1639111475214!5m2!1sen!2sus" style={styles} ></iframe>
        </div>
        <div class="social">
          <a href="https://github.com/">
            <i class="fab fa-github fa-2x"></i>
          </a>
          <a href="https://www.facebook.com/">
            <i class="fab fa-facebook fa-2x"></i>
          </a>
          <a href="https://www.instagram.com/">
            <i class="fab fa-instagram fa-2x"></i>
          </a>
          <a href="https://twitter.com/home">
            <i class="fab fa-twitter fa-2x"></i>
          </a>
        </div>
      </section>
</div>
</main>
  );
}