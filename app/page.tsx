'use client'

import { Github, Instagram, Linkedin, Twitter, MessageCircle, Newspaper } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useEffect, useRef } from 'react'

export default function Component() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error)
      })
    }
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const projects = [
    {
      title: "Maggle World",
      description: "A Harry Potter Fan's Dream Come True!",
      link: "https://maggle-world.vercel.app/",
      bgImage: "/maggle-world.png",
      fallbackBg: "bg-gradient-to-r from-purple-500 to-indigo-500"
    },
    {
      title: "Boss Machine API",
      description: "Complete API Intergration for evil entrepreneur management",
      link: "https://github.com/pkanyu/project-4-boss-machine-start",
      bgImage: "/boss-machine.png",
      fallbackBg: "bg-gradient-to-r from-blue-500 to-cyan-500"
    },
    {
      title: "CloudBusy Innovations",
      description: "SaaS Company Website",
      link: "https://cloudbusyinnovations.vercel.app/",
      bgImage: "/cloudbusy.png",
      fallbackBg: "bg-gradient-to-r from-emerald-500 to-teal-500"
    },
    {
      title: "Reddit Client",
      description: "Custom Reddit Client Interface",
      link: "https://redditis-client.netlify.app/",
      bgImage: "/reddit-client.png",
      fallbackBg: "bg-gradient-to-r from-orange-500 to-red-500"
    }
  ]

  return (
    <div className="min-h-screen bg-[#e8e3d9] p-4 md:p-8 font-mono">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={item} className="col-span-full flex justify-between items-center bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
          <h1 className="text-2xl font-bold text-gray-800">Portfolio</h1>
          <Link href="mailto:petersonkariuki91@gmail.com">
            <Button variant="outline" className="bg-white text-black hover:bg-gray-100">
              Contact me
            </Button>
          </Link>
        </motion.div>

        {/* Main Title Section */}
        <motion.div
          variants={item}
          className="col-span-1 lg:col-span-2 bg-white/90 p-8 rounded-xl shadow-lg overflow-hidden relative"
        >
          <video 
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/Beige White Soft Minimalist Sale Shopping Animated Instagram Post-Portfolio.mp4" type="video/mp4" />
          </video>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Let&apos;s create something</h2>
            <h3 className="text-4xl md:text-6xl font-bold italic text-gray-600">extraordinary</h3>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          variants={item}
          className="col-span-1 aspect-square relative overflow-hidden rounded-xl shadow-lg bg-[#4a4a40]"
        >
          <Image
            src="/profile-photo.jpg"
            alt="Profile"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* About Section */}
        <motion.div variants={item} className="col-span-1 p-8 bg-[#4a4a40] rounded-xl shadow-lg">
          <p className="text-lg text-white leading-relaxed">
            A passionate developer focused on creating intuitive and engaging digital experiences. 
            Specializing in modern web technologies and creative solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div variants={item} className="col-span-1 lg:col-span-2">
          <Card className="h-full p-8 shadow-lg bg-white/90">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Featured Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, i) => (
                <Link href={project.link} key={i} target="_blank" rel="noopener noreferrer">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className={`h-48 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden group ${project.fallbackBg}`}
                  >
                    <Image
                      src={project.bgImage}
                      alt={project.title}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-90 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/70 transition-all duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
                      <h4 className="font-bold text-lg mb-1">{project.title}</h4>
                      <p className="text-sm text-gray-200 group-hover:text-white transition-colors">
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Contact Section */}
        <motion.div variants={item} className="col-span-full">
          <Card className="p-8 shadow-lg bg-white/90">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <h2 className="text-3xl font-bold text-gray-800">Let&apos;s Connect</h2>
              <div className="flex gap-6">
                <Link href="https://github.com/pkanyu" className="text-gray-600 hover:text-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">
                  <Github className="w-6 h-6" />
                </Link>
                <Link href="https://www.instagram.com/piomr_iam/" className="text-gray-600 hover:text-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link href="https://www.linkedin.com/in/peterson-kariuki-83948719b/" className="text-gray-600 hover:text-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-6 h-6" />
                </Link>
                <Link href="https://x.com/P_KKanyuga" className="text-gray-600 hover:text-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-6 h-6" />
                </Link>
                <Link href="https://medium.com/@petersonkariuki91" className="text-gray-600 hover:text-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">
                  <Newspaper className="w-6 h-6" />
                </Link>
                <Link href="https://wa.me/message/7S73OLYAC6ZIO1" className="text-gray-600 hover:text-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}