import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section className="mb-12 p-8">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Mail className="h-5 w-5" />
          <span>vartikadwivedi1805@gmail.com</span>
        </div>
        <div className="flex items-center gap-2">
          <Github className="h-5 w-5" />
          <a href="https://github.com/Vartikadwivedi" target="_blank" rel="noopener noreferrer">
            github.com/Vartikadwivedi
          </a>
        </div> 
        <div className="flex items-center gap-2">
          <Linkedin className="h-5 w-5" />
          <a href="https://www.linkedin.com/in/vartikadwivedii/" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/vartikadwivedii
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
