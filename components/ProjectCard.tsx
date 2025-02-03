"use client";
import Image from 'next/image';
import { Project } from "@/types/index";

export const ProjectCard = ({ project }: { project: Project }) => (
  <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
    <Image 
      src={project.image || "/placeholder.svg"} 
      alt={project.title} 
      className="w-full h-48 object-cover" 
      width={600}
      height={192}
    />
    <div className="p-6" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-secondary)' }}>
      <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
      <p className="mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, index) => (
          <span key={index} className="px-2 py-1 text-sm rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

