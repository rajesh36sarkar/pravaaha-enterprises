'use client'
import { motion } from 'framer-motion'
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaAws, 
  FaDocker, 
  FaFigma 
} from 'react-icons/fa'
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql,
  SiGraphql, 
  SiFirebase, 
  SiRedux, 
  SiJest 
} from 'react-icons/si'

const technologies = [
  { icon: FaReact, name: 'React' },
  { icon: SiNextdotjs, name: 'Next.js' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: FaNodeJs, name: 'Node.js' },
  { icon: SiTailwindcss, name: 'Tailwind' },
  { icon: FaPython, name: 'Python' },
  { icon: SiMongodb, name: 'MongoDB' },
  { icon: SiPostgresql, name: 'PostgreSQL' },
  { icon: SiGraphql, name: 'GraphQL' },
  { icon: FaAws, name: 'AWS' },
  { icon: FaDocker, name: 'Docker' },
  { icon: SiFirebase, name: 'Firebase' },
  { icon: SiRedux, name: 'Redux' },
  { icon: FaFigma, name: 'Figma' },
  { icon: SiJest, name: 'Jest' },
]

const TechMarquee = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-20 py-6 overflow-hidden">
      <div className="relative">
        <motion.div
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="flex gap-12 whitespace-nowrap"
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <tech.icon className="w-6 h-6" />
              <span className="text-sm font-medium">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default TechMarquee