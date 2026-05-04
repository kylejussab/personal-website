class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="footer-rights">
          <img src="assets/footer-icon.png" />
          <p>© 2024 Kyle Jussab.</p>
          <p>A promise kept to the dreams of my 14-year-old self.</p>
        </div>

        <div class="footer-contact">
          <p>CONTACT</p>

          <a href="mailto:kylejussab@gmail.com" target="_blank">
            <p>Email</p>
            <img src="assets/open-in-new.svg" />
          </a>

          <a href="https://www.linkedin.com/in/kylejussab/" target="_blank">
            <p>LinkedIn</p>
            <img src="assets/open-in-new.svg" />
          </a>

          <a href="resume.pdf" target="_blank">
            <p>Resume</p>
            <img src="assets/open-in-new.svg" />
          </a>

          <p>Last updated by Kyle on May 4, 2026, 12:16 PM PDT</p>
        </div>
      </footer>
    `;
  }
}

customElements.define("custom-footer", CustomFooter);
