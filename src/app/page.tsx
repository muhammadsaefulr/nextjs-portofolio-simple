"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Icon } from "@iconify/react"
import { Briefcase, FileJson, GraduationCap, Home, Leaf, Linkedin, Mail, Menu, Moon, Server, Sun, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import AnimatedCursor from "@/components/custom/animated-cursor"
import ProjectCard from "@/components/custom/project-card"
import FloatingNav from "@/components/custom/floatingnav"
import { Card2, Card2Content } from "@/components/ui/card2"
import Footer from "@/components/custom/footer"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const { scrollY } = useScroll()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const opacity = useTransform(scrollY, [0, 200], [1, 0])
  const y = useTransform(scrollY, [0, 200], [0, -50])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const projects = [
    {
      title: "NimeStream - Streaming Anime",
      description: "A web application that allows users to stream anime ",
      image: "/project/nimestream.jpg",
      tags: ["Next.js", "TypeScript", "Cheerio", "NestJS", "Tailwind CSS", "DaisyUI"],
      link: "https://github.com/muhammadsaefulr/NimeStream",
    },
    {
      title: "Gopotek - Apotek POS",
      description: "An point of sale (POS) system for the apotek retail.",
      image: "/project/gopotek.jpg",
      tags: ["NextJS", "ShadcnUI", "Node.js", "PostgreSQL", "TypeScript"],
      link: "https://rawon.msaepul.my.id",
    },
    {
      title: "EScommerce - Simple E-commerce API",
      description: "A simple API for e-commerce that allows users to create, update, and delete products.",
      image: "/project/escommerce.jpg",
      tags: ["Docker", "GIN", "Golang", "PostgreSQL"],
      link: "https://github.com/muhammadsaefulr/escommerce",
    },
  ]

  const experience = [
    {
      company: "PT Ardev Digital Indonesia",
      role: "Wordpress Developer & Digital Marketing Intern",
      duration: "2022 Dec - 2023 Mar",
      years: "4 Months",
      description: "Assisted in building WordPress websites using Elementor, optimized SEO with Yoast, and managed daily content posting via Meta Business to enhance engagement.",
      technologies: ["Wordpress", "Meta Business", "Elementor", "YoastSEO"],
    },
    {
      company: "PT Agriva Teknologi Nusantara",
      role: "Frontend Engineer Intern",
      duration: "2023 Oct - 2024 Jan",
      years: "4 Months",
      description:"Contribute as frontend in project management data",
      technologies: ["React", "Redux", "JavaScript", "CSS", "AntDesign"],
      },
    {
      company: "PT Prawathiya Karsa Pradiptha",
      role: "Java Developer",
      duration: "2024 Oct - 2025 Feb",
      years: "4 Months",
      description:
        "Maintaining Finance Software With Using ZKoss And SpringBoot",
      technologies: ["Java", "Zkoss", "PostgreSQL", "CSS"],
    },
  ]

  const education = [
    {
      institution: "SMK Negeri 2 Kota Bekasi",
      degree: "Rekayasa Perangkat Lunak",
      duration: "2021 - 2024",
      description: "Learning basic programming skills and web development using Laravel, Flutter, Javascript, and PHP",
      courses: ["Advanced Algorithms", "Machine Learning", "Distributed Systems", "Cloud Computing"],
    },
  ]

  const navItems = [
    { icon: Home, label: "Home", href: "#" },
    { icon: GraduationCap, label: "About", href: "#about" },
    { icon: Briefcase, label: "Experience", href: "#experience" },
    { icon: Server, label: "Skills", href: "#skills" },
    { icon: FileJson, label: "Projects", href: "#projects" },
    { icon: Mail, label: "Contact", href: "#contact" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatedCursor />

      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b md:hidden">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-xl font-bold">Saepul</h1>
          </motion.div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)} aria-label="Toggle dark mode">
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(true)} aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </nav>

      <FloatingNav items={navItems} isOpen={sidebarOpen} setIsOpen={() => setSidebarOpen(false)} darkMode={darkMode} setDarkMode={() => setDarkMode(!darkMode)} />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-36 md:py-6">
        <div className="container mx-auto px-4 z-30">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Hi, I'm Saeful <span className="inline-block animate-wave">👋</span>
              </h1>
              <p className="text-xl mb-8">
                Junior software developer, passionate about building simply beautiful and useful products.
              </p>

              <h2 className="text-2xl font-bold mt-12 mb-4">About</h2>
              <p className="text-muted-foreground mb-4">
               Im Intresting to build things that are useful and beautiful. I love to learn new things and build them. I also love to help people and make them happy.
              </p>
              <p className="text-muted-foreground mb-6">
                
              </p>

              <div className="flex gap-4 mt-8">
                <Button asChild>
                  <a href="#contact">Get in touch</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#projects">View my work</a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center md:justify-end"
            >
              <div className="relative hidden w-64 h-64 md:block md:w-80 md:h-80">
                <img
                  src="/epul.jpeg"
                  alt="Saeful profile"
                  className="rounded-full object-cover w-full h-full border-4 border-primary/20"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative">
                  <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                    <img
                      src="/in-work.jpg"
                      alt="John Doe"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold mb-4">Full Stack Developer based in Bekasi, Indonesia</h3>
                <p className="text-muted-foreground mb-6">
                  I'm a passionate developer with expertise in building modern web applications. With over 1 years of
                  experience, I've worked on a variety of projects from data management website to Finance Software.
                </p>
                <p className="text-muted-foreground mb-6">
                Statically typed, compiled language with simple syntax and a rich standard library, ideal for backend development. I focus on technical excellence and great UX, ensuring the applications I build are both powerful and user-friendly.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge>JavaScript</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>GoLang</Badge>
                  <Badge>React</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>PostgreSQL</Badge>
                  <Badge>Java</Badge>
                  <Badge>Java Zkoss</Badge>
                  <Badge>TailwindCSS</Badge>
                </div>
                <Button asChild>
                  <a href="#contact">Let's work together</a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

         <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Experience & Education</h2>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Briefcase className="mr-2 h-6 w-6 text-primary" />
                  Work Experience
                </h3>

                <div className="space-y-4">
                  {experience.map((job, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Card2>
                        <Card2Content className="pt-6">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-bold">{job.role}</h4>
                              <p className="text-muted-foreground">{job.company}</p>
                            </div>
                            <div className="text-right">
                              <span className="text-sm font-medium">{job.duration}</span>
                              <p className="text-xs text-muted-foreground">{job.years}</p>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">{job.description}</p>
                          <div className="flex pt-3 gap-x-2">
                            {job.technologies.map((datas) => (
                             <Badge key={datas}>{datas}</Badge>
                            ))}
                          </div>
                        </Card2Content>
                      </Card2>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <GraduationCap className="mr-2 h-6 w-6 text-primary" />
                  Education
                </h3>

                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Card2>
                        <Card2Content className="pt-6">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-bold">{edu.degree}</h4>
                              <p className="text-muted-foreground">{edu.institution}</p>
                            </div>
                            <div className="text-right">
                              <span className="text-sm font-medium">{edu.duration}</span>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">{edu.description}</p>
                        </Card2Content>
                      </Card2>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">My Personal Project</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" asChild>
                <a href="https://github.com/muhammadsaefulr?tab=repositories" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View more on GitHub
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Tech Stack</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                {
                  name: "Docker",
                  icon: "mdi:docker",
                  color: "#2496ED",
                  description: "Containerization platform for building, shipping, and running applications",
                },
                {
                  name: "TypeScript",
                  icon: "nonicons:typescript-16",
                  color: "#3178C6",
                  description: "Strongly typed programming language that builds on JavaScript",
                },
                {
                  name: "Node.js",
                  icon: "logos:nodejs",
                  color: "#339933",
                  description: "JavaScript runtime built on Chrome's V8 JavaScript engine",
                },
                {
                  name: "Java",
                  icon: "logos:java",
                  color: "#007396",
                  description: "Object-oriented programming language designed for flexibility",
                },
                {
                  name: "Golang",
                  icon: "logos:go",
                  color: "#6DB33F",
                  description: "Statically typed, compiled language with simple syntax and a rich standard library.",
                },
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Card2 className="overflow-hidden h-full">
                      <Card2Content className="pt-6">
                        <div
                          className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                          style={{ backgroundColor: `${tech.color}20` }}>

                          <Icon icon={`${tech.icon}`} width="30" height="30" color={tech.color} />
                          
                        </div>
                        <h3 className="text-lg font-bold mb-2">{tech.name}</h3>
                        <p className="text-sm text-muted-foreground">{tech.description}</p>
                      </Card2Content>
                    </Card2>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>Feel free to reach out through any of these channels</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium">msaeful@proton.me</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Linkedin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">LinkedIn</p>
                        <p className="font-medium">linkedin.com/in/muhammadsaeful</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Github className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">GitHub</p>
                        <p className="font-medium">github.com/muhammadsaefulr</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm text-muted-foreground">
                      I'm currently available for freelance work and full-time positions.
                    </p>
                  </CardFooter>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Send Me a Message</CardTitle>
                    <CardDescription>I'll get back to you as soon as possible</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Name
                          </label>
                          <input
                            id="name"
                            className="w-full px-3 py-2 border rounded-md text-sm"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            className="w-full px-3 py-2 border rounded-md text-sm"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <input
                          id="subject"
                          className="w-full px-3 py-2 border rounded-md text-sm"
                          placeholder="Project Inquiry"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          className="w-full px-3 py-2 border rounded-md text-sm resize-none"
                          placeholder="Tell me about your project..."
                        />
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Send Message</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-8 border-t">
            <Footer/>
      </footer>
    </div>
  )
}

