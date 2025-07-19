import React from "react";
import { Link } from "react-router-dom";
import { Building2, Factory, Zap, MapPin, Users, Target } from "lucide-react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  project: any;
  gradient: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, gradient }) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
  });

  return (
    <Link
      to={project.href}
      className={`group flex flex-col md:flex-row gap-6 md:gap-8 border-b pb-8 md:pb-10 rounded-xl p-4 md:p-6 text-white transition-shadow duration-200 hover:shadow-2xl cursor-pointer ${gradient}`}
      style={{ textDecoration: "none" }}
    >
      <div className="md:w-1/2 space-y-3 md:space-y-4">
        <div className="flex items-center justify-between">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              project.theme === "industrial"
                ? "bg-[hsl(var(--industrial-light))] text-[hsl(var(--industrial-primary))]"
                : project.theme === "paper"
                ? "bg-[hsl(var(--paper-light))] text-[hsl(var(--paper-primary))]"
                : project.theme === "power"
                ? "bg-[hsl(var(--power-light))] text-[hsl(var(--power-primary))]"
                : project.theme === "pulp"
                ? "bg-[hsl(var(--industrial-light))] text-[hsl(var(--industrial-primary))]"
                : project.theme === "pharma"
                ? "bg-[hsl(var(--industrial-light))] text-[hsl(var(--industrial-primary))]"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {project.sector}
          </span>
          {project.theme === "industrial" && (
            <Building2 className="w-5 h-5 text-[hsl(var(--industrial-accent))]" />
          )}
          {project.theme === "paper" && (
            <Factory className="w-5 h-5 text-[hsl(var(--paper-accent))]" />
          )}
          {project.theme === "power" && (
            <Zap className="w-5 h-5 text-[hsl(var(--power-accent))]" />
          )}
        </div>
        <h3 className="text-xl md:text-2xl font-semibold">{project.title}</h3>
        <div className="space-y-2 text-xs sm:text-sm text-muted-foreground">
          {project.location && (
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span className="text-black font-semibold">{project.location}</span>
            </div>
          )}
          {project.area && (
            <div className="flex items-center space-x-2">
              <Building2 className="w-4 h-4" />
              <span className="text-black font-semibold">{project.area}</span>
            </div>
          )}
          {project.capacity && (
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4" />
              <span className="text-black font-semibold">{project.capacity}</span>
            </div>
          )}
          {project.distance && (
            <div className="flex items-center space-x-2">
              <Target className="w-4 h-4" />
              <span className="text-black font-semibold">{project.distance}</span>
            </div>
          )}
          {project.jobs && (
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span className="text-black font-semibold">{project.jobs}</span>
            </div>
          )}
        </div>
        <Button asChild variant="outline" size="lg" className="mt-4 text-black pointer-events-none opacity-70 px-8">
          <span>Learn More</span>
        </Button>
      </div>
      <div className="md:w-1/2">
        <div ref={sliderRef} className="keen-slider rounded-xl overflow-hidden">
          {project.images.map((img: string, i: number) => (
            <div key={i} className="keen-slider__slide flex items-center justify-center">
              <img
                src={img}
                alt={`${project.title} ${i + 1}`}
                className="w-full h-44 sm:h-56 md:h-60 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
