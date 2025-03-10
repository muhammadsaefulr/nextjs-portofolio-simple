"use client"

import { motion } from "framer-motion"
import { ExternalLink } from 'lucide-react'
import { Card2, Card2Content, Card2Footer } from "@/components/ui/card2"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card2 className="overflow-hidden h-full flex flex-col">
          <div className="relative overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={project.image || "/placeholder.svg"} 
                alt={project.title} 
                className="w-full aspect-video object-cover object-top"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 hover:opacity-60 transition-opacity duration-300 flex items-end p-4">
              <Button variant="secondary" size="sm" className="gap-1" asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          
          <Card2Content className="flex-grow pt-6">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <Badge key={i} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </Card2Content>
          
          <Card2Footer className="pt-0">
            <Button variant="ghost" className="gap-1 px-0" asChild>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Details
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </Card2Footer>
        </Card2>
      </motion.div>
    </motion.div>
  )
}