import { Github, Linkedin, Mail } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

export default function Footer() {
  return (
    <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <p className="text-muted-foreground">© {new Date().getFullYear()} Muhammad Saeful Rahmat. Made With ❤</p>
      <div className="flex gap-4 mt-4 md:mt-0">
        <Button variant="ghost" size="icon" asChild>
          <a href="https://github.com/muhammadsaefulr" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a href="https://linkedin.com/in/muhammadsaeful" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a href="mailto:msaeful@proton.me" aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </div>
  </div>
  )
}
