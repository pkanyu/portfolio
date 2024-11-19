'use client'

import { motion } from "framer-motion"
import { Github, Instagram, Linkedin, Twitter, GhostIcon as SnapchatGhost } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Component() {
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

  return (
    <div className="min-h-screen bg-[#e8e3d9] p-4 md:p-8">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={item} className="col-span-full flex justify-between items-center bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-lg">
          <h1 className="text-2xl font-bold text-gray-800">Portfolio</h1>
          <Button variant="outline" className="bg-white text-black hover:bg-grey-100">Contact me</Button>
        </motion.div>

        {/* Main Title Section */}
        <motion.div
          variants={item}
          className="col-span-1 lg:col-span-2 bg-white/90 p-8 rounded-xl shadow-lg"
        >
          <div>
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
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-32 bg-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300" />
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
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Github className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Twitter className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <SnapchatGhost className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  )
}