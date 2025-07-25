import React, { useEffect, useState } from "react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import HeroSection from "@/components/common/HeroSection"
import SectionHeader from "@/components/common/SectionHeader"
import StickyContactButton from "@/components/common/StickyContactButton"
import ProjectCard from "@/components/projects/ProjectCard"
// import Loader from "@/components/ui/Loader"

const projects = [
  {
    title: "Hindupur Integrated Industrial Park (Upcoming)",
    location: "Anantapur District, Andhra Pradesh",
    area: "1,800 acres (1,000 acres SEZ, 800 acres DTA)",
    distance: "110 km from Bengaluru",
    sector: "Industrial Park & SEZ",
    theme: "industrial",
    href: "/business/industrial/hindupur",
    images: [
      "/SEZ/sez_4.jpg",
      "/SEZ/sez_2.jpeg",
      "/SEZ/Sez_3.webp",
    ],
  },
  {
    title: "Odisha Pharma City",
    location: "Titilagarh, Balangir District, Odisha",
    area: "1,800 acres",
    jobs: "35,000+ direct/indirect jobs",
    sector: "Pharma Park",
    theme: "pharma",
    href: "/business/industrial/odisha",
    images: [
      "/SEZ/pharma_1.png",
      "/SEZ/pharma_2.png",
      "/carousels/odishaB.jpg",
    ],
  },
  {
    title: 'Jaya Shankar Paper And Pulp',
    location: 'West Godavari District, Andhra Pradesh',
    area: '271 acres in SEZ',
    capacity: '1,200 t/day Carton Board',
    sector: 'Pulp & Paper',
    theme: 'paper',
    href: '/business/paper/bayyavaram',
    images: [
      "/paper&pulp/image1.webp",
      "/paper&pulp/papers.jpg",
      "/paper&pulp/Packaging.jpg",
    ]
  },
  {
    title: 'Power & Infrastructure Projects',
    description: 'Multiple 200 MW thermal power plants and infrastructure development',
    capacity: '400 MW+ Total Capacity',
    sector: 'Power & Infrastructure',
    theme: 'power',
    href: '/business/power',
    images: [
      "/power/thermal_power.jpg",
      "/power/solar_power.png",
      "/power/tunnel-1.png",
    ]
  },
  {
    title: 'Assam Bamboo & Agro Forestry Based Pulp and Paper Investment',
    location: 'Assam',
    area: '271 acres in SEZ',
    capacity: '1,200 t/day Carton Board',
    sector: 'Pulp',
    theme: 'pulp',
    href: '/business/pulp/assam-agroforestry',
    images: [
      "/paper&pulp/pulp.jpg",
      "/paper&pulp/paper_pulp.jpg",
      "/paper&pulp/paper_bamboo.jpg",
    ]
  },
]
const gradientBackgrounds = [
  "bg-gradient-to-r from-[#43cea2] to-[#185a9d]", // Teal-blue
  "bg-gradient-to-r from-[#a4d4e3] to-[#a4d4e3]", // Light blue
  "bg-gradient-to-r from-[#99f2c8] to-[#1f4037] ", // Forest green
  "bg-gradient-to-r from-[#ffb62f] to-[#ed0000]", // Forest green
  "bg-gradient-to-r from-[#bbb7a3] to-[#89ff89]", // Orange-green
]
const heroSlides = [
  {
    title: "Our Projects",
    description: "Explore our industrial parks, paper mills, and power projects across India",
    backgroundImage: "/images/p1.jpg",
    theme: "power"
  },
  {
    title: "Our Projects",
    description: "Explore our industrial parks, paper mills, and power projects across India",
    backgroundImage: "/images/t4.jpg",
    theme: "power"
  },
  {
    title: "Our Projects",
    description: "Explore our industrial parks, paper mills, and power projects across India",
    backgroundImage: "/images/p3.jpg",
    theme: "power"
  },
  {
    title: "Our Projects",
    description: "Explore our industrial parks, paper mills, and power projects across India",
    backgroundImage: "/images/t5.jpg",
    theme: "power"
  },
  {
    title: "Our Projects",
    description: "Explore our industrial parks, paper mills, and power projects across India",
    backgroundImage: "/images/t2.jpg",
    theme: "power"
  },
]

const Projects = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);
  // if (loading) return <Loader />;
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <StickyContactButton />
      <HeroSection slides={heroSlides} />
      <section id="projects" className="section-padding">
        <div className="container-width">
          <SectionHeader
            subtitle="Project Portfolio"
            title="Strategic Developments Across Multiple Sectors"
            description="Our diverse project portfolio spans industrial development, sustainable manufacturing, and power infrastructure, creating comprehensive ecosystems for growth."
            centered
          />
          <div className="space-y-10 md:space-y-12">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} gradient={gradientBackgrounds[index % gradientBackgrounds.length]} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Projects
