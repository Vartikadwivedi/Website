import React from "react";
// import { Card, CardContent } from "../ui/Card";  // Corrected import path
// import { Button } from "../ui/Button";            // Corrected import path
import { Card, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import emotionDetectionImg from "../assets/giphy.gif";
import AIInterviewerImg from "../assets/AI_interviewer.png";
import ResumeRankerImg from "../assets/ResumeRanker.png";

const projects = [
  {
    title: "Emotion Detection App",
    description: "A web app to detect emotions from images using a CNN model.",
    link: "/emotion-detection",
    image: emotionDetectionImg
  },
  {
    title: "AI Voice Interviewer",
    description: "An AI-powered voice-based virtual interviewer built with FastAPI and React.",
    link: "https://github.com/yourusername/ai-voice-interviewer",
    image: AIInterviewerImg
  },
  {
    title: "Resume Ranker",
    description: "A machine learning model that ranks resumes based on job-fit scores.",
    link: "https://github.com/yourusername/resume-ranker",
    image: ResumeRankerImg
  }
];

const Projects = () => {
  return (
    <section className="mb-12 p-8" data-aos="fade-up" data-aos-duration="1000">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <Card key={index} className="shadow-md">
            <CardContent className="p-4">
              <img
                src={project.image}
                alt={project.title}
                // className="mb-4 max-w-full max-h-48 mx-auto object-contain rounded-lg"
                className="mb-4 w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-xl font-medium mb-2">{project.title}</h3>
              <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">View Project</Button>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
