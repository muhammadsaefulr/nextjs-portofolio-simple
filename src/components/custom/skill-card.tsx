"use client"

import { useEffect, useState } from "react"
import { motion, useAnimation } from "framer-motion"

interface Skill {
  name: string
  level: number
}

interface SkillBarProps {
  skill: Skill
  index: number
}

export default function SkillBar({ skill, index }: SkillBarProps) {
  const controls = useAnimation()
  
  const barVariants = {
    hidden: { width: 0 },
    visible: {
      width: `${skill.level}%`,
      transition: {
        duration: 1,
        delay: index * 0.2,
        ease: "easeInOut",
      },
    },
  }

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium">{skill.name}</span>
        <span className="text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-3 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial="hidden"
          animate={controls}
          variants={barVariants}
        />
      </div>
    </div>
  )
}

