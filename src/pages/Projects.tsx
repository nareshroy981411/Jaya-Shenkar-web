import React from "react"
import { Link } from "react-router-dom"
import {
  Building2,
  Factory,
  Zap,
  MapPin,
  Users,
  Target,
} from "lucide-react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import HeroSection from "@/components/common/HeroSection"
import SectionHeader from "@/components/common/SectionHeader"
import StickyContactButton from "@/components/common/StickyContactButton"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Hindupur Integrated Industrial Park",
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
    title: 'Bayyavaram Pulp & Paper Mill',
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


// Autoplay plugin for keen-slider
function AutoplayPlugin(slider: any) {
  let timeout: ReturnType<typeof setTimeout>
  let mouseOver = false

  function clearNextTimeout() {
    clearTimeout(timeout)
  }

  function nextTimeout() {
    clearTimeout(timeout)
    if (mouseOver) return
    timeout = setTimeout(() => {
      slider.next()
    }, 2500)
  }

  slider.on("created", () => {
    slider.container.addEventListener("mouseover", () => {
      mouseOver = true
      clearNextTimeout()
    })
    slider.container.addEventListener("mouseout", () => {
      mouseOver = false
      nextTimeout()
    })
    nextTimeout()
  })

  slider.on("dragStarted", clearNextTimeout)
  slider.on("animationEnded", nextTimeout)
  slider.on("updated", nextTimeout)
}

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <StickyContactButton />

      <HeroSection
        title="Our Projects: Building India's Industrial Future"
        // subtitle="Discover our portfolio of world-class industrial parks, sustainable paper mills, and robust power infrastructure projects across India."
        // backgroundImage="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        backgroundImage="/power/thermal-power-1.jpg"
        // buttons={[
        //   { text: "View All Projects", href: "#projects" },
        //   {
        //     text: "Investment Opportunities",
        //     href: "/investors",
        //     variant: "outline",
        //   },
        // ]}
      />

      <section id="projects" className="section-padding">
        <div className="container-width">
          <SectionHeader
            subtitle="Project Portfolio"
            // title="Strategic Developments Across Multiple Sectors"
            title={<span className="text-lg md:text-xl lg:text-2xl font-bold block">Strategic Developments Across Multiple Sectors</span>}

            description="Our diverse project portfolio spans industrial development, sustainable manufacturing, and power infrastructure, creating comprehensive ecosystems for growth."
            centered
          />

          <div className="space-y-12">
            {projects.map((project, index) => {
              const [sliderRef] = useKeenSlider<HTMLDivElement>(
                {
                  loop: true,
                  slides: { perView: 1 },
                },
                [AutoplayPlugin]
              )

              return (
                <Link
                  key={index}
                  to={project.href}
                  className={`group flex flex-col md:flex-row gap-8 border-b pb-10 rounded-xl p-6 text-white transition-shadow duration-200 hover:shadow-2xl cursor-pointer ${gradientBackgrounds[index % gradientBackgrounds.length]}`}
                  // className="bg-white rounded-2xl shadow-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden min-h-[420px] border-2 border-transparent hover:border-[gold] cursor-pointer"
                  style={{ textDecoration: "none" }}
                >
                  <div className="md:w-1/2 space-y-4">
                    <div className="flex items-center justify-between">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${project.theme === "industrial"
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

                    <h3 className="text-2xl font-semibold">{project.title}</h3>

                    <div className="space-y-2 text-sm text-muted-foreground">
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

                    <Button asChild variant="outline" className="mt-4 text-black pointer-events-none opacity-70">
                      <span>Learn More</span>
                    </Button>
                  </div>
                  {/* Right: Carousel */}
                  <div className="md:w-1/2">
                    <div
                      ref={sliderRef}
                      className="keen-slider rounded-xl overflow-hidden"
                    >
                      {project.images.map((img, i) => (
                        <div
                          key={i}
                          className="keen-slider__slide flex items-center justify-center"
                        >
                          <img
                            src={img}
                            alt={`${project.title} ${i + 1}`}
                            className="w-full h-60 object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Projects
