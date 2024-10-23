"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Code,
  Server,
  Shield,
  FileText,
  Zap,
  Send,
  CheckCircle,
  Users,
  Briefcase,
  Smartphone,
  BarChart3,
  Truck,
  Stethoscope,
  Glasses,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const aboutRef = useRef<HTMLElement>(null);
  const expertiseRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Here you would typically send the form data to your server
    toast({
      title: "Form submitted!",
      description: "We'll get back to you soon.",
    });
    setIsFormOpen(false);
  };

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const portfolioItems = [
    {
      title: "E-commerce Platform",
      description:
        "A scalable, feature-rich online marketplace built with React and Node.js, processing over 10,000 transactions daily.",
      icon: <Code className="h-8 w-8 mb-4 text-blue-400" />,
    },
    {
      title: "Mobile Banking App",
      description:
        "A secure, user-friendly mobile banking application developed for iOS and Android using React Native.",
      icon: <Smartphone className="h-8 w-8 mb-4 text-green-400" />,
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description:
        "An intelligent analytics platform using machine learning algorithms to provide real-time business insights.",
      icon: <BarChart3 className="h-8 w-8 mb-4 text-purple-400" />,
    },
    {
      title: "IoT Fleet Management System",
      description:
        "A comprehensive IoT solution for real-time tracking and management of large vehicle fleets.",
      icon: <Truck className="h-8 w-8 mb-4 text-yellow-400" />,
    },
    {
      title: "Telemedicine Platform",
      description:
        "A HIPAA-compliant telemedicine solution enabling secure video consultations and electronic health records management.",
      icon: <Stethoscope className="h-8 w-8 mb-4 text-red-400" />,
    },
    {
      title: "Augmented Reality Training App",
      description:
        "An innovative AR application for industrial training, improving learning outcomes and reducing on-site accidents.",
      icon: <Glasses className="h-8 w-8 mb-4 text-indigo-400" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center fixed top-0 left-0 right-0 bg-gray-900 z-50">
        <div className="text-2xl font-bold">Full Stack Studios</div>
        <nav className="hidden md:flex space-x-6">
          <button
            onClick={() => scrollToSection(aboutRef)}
            className="hover:text-blue-400 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection(expertiseRef)}
            className="hover:text-blue-400 transition-colors"
          >
            Expertise
          </button>
          <button
            onClick={() => scrollToSection(servicesRef)}
            className="hover:text-blue-400 transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection(portfolioRef)}
            className="hover:text-blue-400 transition-colors"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection(testimonialsRef)}
            className="hover:text-blue-400 transition-colors"
          >
            Testimonials
          </button>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <ChevronDown
            className={`h-6 w-6 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </header>

      {isMenuOpen && (
        <motion.nav
          className="md:hidden bg-gray-800 py-4 fixed top-20 left-0 right-0 z-40"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="hover:text-blue-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection(expertiseRef)}
              className="hover:text-blue-400 transition-colors"
            >
              Expertise
            </button>
            <button
              onClick={() => scrollToSection(servicesRef)}
              className="hover:text-blue-400 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection(portfolioRef)}
              className="hover:text-blue-400 transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection(testimonialsRef)}
              className="hover:text-blue-400 transition-colors"
            >
              Testimonials
            </button>
          </div>
        </motion.nav>
      )}

      <main className="pt-20">
        <section className="container mx-auto px-4 py-20 text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Where Imagination Meets Innovation
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            From concept to market-ready product, we craft seamless applications
            across web, mobile, and desktop platforms.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button size="lg" onClick={() => setIsFormOpen(!isFormOpen)}>
              Get Started
            </Button>
          </motion.div>
        </section>

        <AnimatePresence>
          {isFormOpen && (
            <motion.section
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-gray-800 p-8 rounded-lg w-full max-w-2xl"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
              >
                <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your Name" required />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" placeholder="Your Company" />
                  </div>
                  <div>
                    <Label htmlFor="project-type">Project Type</Label>
                    <Select required>
                      <SelectTrigger id="project-type">
                        <SelectValue placeholder="Select a project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-development">
                          Web Development
                        </SelectItem>
                        <SelectItem value="mobile-app">Mobile App</SelectItem>
                        <SelectItem value="desktop-application">
                          Desktop Application
                        </SelectItem>
                        <SelectItem value="full-stack">
                          Full Stack Solution
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select required>
                      <SelectTrigger id="budget">
                        <SelectValue placeholder="Select a budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10k-25k">
                          $10,000 - $25,000
                        </SelectItem>
                        <SelectItem value="25k-50k">
                          $25,000 - $50,000
                        </SelectItem>
                        <SelectItem value="50k-100k">
                          $50,000 - $100,000
                        </SelectItem>
                        <SelectItem value="100k+">$100,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Preferred Contact Method</Label>
                    <RadioGroup defaultValue="email" className="flex space-x-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="email" id="contact-email" />
                        <Label htmlFor="contact-email">Email</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="phone" id="contact-phone" />
                        <Label htmlFor="contact-phone">Phone</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div>
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project requirements and goals"
                      required
                    />
                  </div>
                  <div className="flex justify-end space-x-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsFormOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button type="submit">
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </Button>
                  </div>
                </form>
              </motion.div>
            </motion.section>
          )}
        </AnimatePresence>

        <section id="about" ref={aboutRef} className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              About Full Stack Studios
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg mb-6">
                  Full Stack Studios is a premier software development company
                  dedicated to turning innovative ideas into powerful, scalable
                  solutions. With a team of experienced developers, designers,
                  and project managers, we specialize in creating custom
                  applications that drive business growth and enhance user
                  experiences.
                </p>
                <p className="text-lg">
                  Our commitment to quality, attention to detail, and passion
                  for cutting-edge technology sets us apart in the industry.
                  Whether youre a startup looking to disrupt the market or an
                  established enterprise seeking digital transformation, Full
                  Stack Studios has the expertise to bring your vision to life.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-800 p-6 rounded-lg text-center">
                  <Users className="h-12 w-12 mx-auto mb-4 text-blue-400" />
                  <h3 className="text-xl font-semibold mb-2">50+</h3>
                  <p>Expert Developers</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg text-center">
                  <Briefcase className="h-12 w-12 mx-auto mb-4 text-green-400" />
                  <h3 className="text-xl font-semibold mb-2">200+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg text-center">
                  <CheckCircle className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
                  <h3 className="text-xl font-semibold mb-2">98%</h3>
                  <p>Client Satisfaction</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg text-center">
                  <Zap className="h-12 w-12 mx-auto mb-4 text-purple-400" />
                  <h3 className="text-xl font-semibold mb-2">24/7</h3>
                  <p>Support</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="expertise"
          ref={expertiseRef}
          className="bg-gray-800 py-20"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Our Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                className="bg-gray-700 p-6 rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Code className="h-12 w-12 mb-4 text-blue-400" />
                <h3 className="text-2xl font-semibold mb-4">
                  Software Development
                </h3>
                <p>
                  Our team excels in a wide range of programming languages
                  including JavaScript, Python, Java, and C#. Weve successfully
                  delivered complex web applications, mobile apps for iOS and
                  Android, and robust desktop software. Our recent project for a
                  fintech startup involved building a scalable, blockchain-based
                  payment system using Node.js and React.
                </p>
              </motion.div>
              <motion.div
                className="bg-gray-700 p-6 rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Server className="h-12 w-12 mb-4 text-blue-400" />
                <h3 className="text-2xl font-semibold mb-4">
                  Project Management
                </h3>
                <p>
                  Our certified project managers use agile methodologies to
                  ensure smooth project execution. We recently completed a
                  large-scale e-commerce platform migration for a retail giant,
                  delivering the project on time and under budget. Our teams
                  expertise in risk management and stakeholder communication was
                  crucial in navigating the complexities of this project.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="services" ref={servicesRef} className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Our Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="bg-gray-700 p-6 rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Zap className="h-8 w-8 mb-4 text-yellow-400" />
                <h3 className="text-xl font-semibold mb-4">
                  Comprehensive Feature Development
                </h3>
                <p>
                  We recently developed a AI-powered recommendation engine for a
                  streaming service, significantly improving user engagement.
                  Our iterative development process ensured each feature was
                  thoroughly tested and optimized before release.
                </p>
              </motion.div>
              <motion.div
                className="bg-gray-700 p-6 rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Shield className="h-8 w-8 mb-4 text-green-400" />
                <h3 className="text-xl font-semibold mb-4">
                  IT Infrastructure & Server Management
                </h3>
                <p>
                  For a healthcare provider, we designed and implemented a
                  HIPAA-compliant cloud infrastructure, reducing operational
                  costs by 40% while improving system reliability and security.
                  Our 24/7 monitoring ensures optimal performance and rapid
                  response to any issues.
                </p>
              </motion.div>
              <motion.div
                className="bg-gray-700 p-6 rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FileText className="h-8 w-8 mb-4 text-purple-400" />
                <h3 className="text-xl font-semibold mb-4">
                  Thorough Documentation
                </h3>
                <p>
                  We created comprehensive API documentation and user guides for
                  a SaaS platform, resulting in a 50% reduction in support
                  tickets. Our documentation includes interactive examples,
                  video tutorials, and regularly updated changelogs to keep
                  clients informed of all updates and new features.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="bg-background py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
              Our Portfolio
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="h-full bg-card">
                    <CardHeader>
                      {item.icon}
                      <CardTitle>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-card-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" ref={testimonialsRef} className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              What Our Clients Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <p className="text-lg mb-4">
                  Full Stack Studios delivered an exceptional e-commerce
                  platform that exceeded our expectations. Their teams expertise
                  and dedication were evident throughout the entire process. Our
                  online sales have increased by 200% since launch.
                </p>
                <div className="flex items-center">
                  <Image
                    src={`/avatar1.png`}
                    alt="Dave Peterson"
                    className="w-12 h-12 rounded-full mr-4"
                    width={50}
                    height={50}
                  />
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-gray-400">CEO, Fashion Frontier</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <p className="text-lg mb-4">
                  The mobile banking app developed by Full Stack Studios has
                  revolutionized our customer experience. Their attention to
                  security and user experience is unparalleled. Weve seen a 150%
                  increase in mobile transactions since the apps release.
                </p>
                <div className="flex items-center">
                  <Image
                    src={`/avatar1.png`}
                    alt="Micheal Chang"
                    className="w-12 h-12 rounded-full mr-4"
                    width={50}
                    height={50}
                  />
                  <div>
                    <h4 className="font-semibold">Michael Chang</h4>
                    <p className="text-gray-400">CTO, SecureBank</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <p className="text-lg mb-4">
                  The AI-powered analytics dashboard created by Full Stack
                  Studios has transformed our decision-making process. We now
                  have real-time insights that have improved our operational
                  efficiency by 35%. Their teams technical prowess is truly
                  impressive.
                </p>
                <div className="flex items-center">
                  <Image
                    src={`/avatar1.png`}
                    alt="Sarah Patel"
                    className="w-12 h-12 rounded-full mr-4"
                    width={50}
                    height={50}
                  />
                  <div>
                    <h4 className="font-semibold">Emily Rodriguez</h4>
                    <p className="text-gray-400">
                      Data Science Lead, InsightCorp
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <p className="text-lg mb-4">
                  Full Stack Studios IoT fleet management system has been a
                  game-changer for our logistics operations. Weve reduced fuel
                  costs by 25% and improved delivery times by 40%. Their ongoing
                  support and continuous improvements are invaluable to our
                  business.
                </p>
                <div className="flex items-center">
                  <Image
                    src={`/avatar1.png`}
                    alt="David Patel"
                    className="w-12 h-12 rounded-full mr-4"
                    width={50}
                    height={50}
                  />
                  <div>
                    <h4 className="font-semibold">David Patel</h4>
                    <p className="text-gray-400">
                      Operations Manager, GlobalFreight
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Full Stack Studios</h3>
              <p className="text-gray-400">
                Transforming ideas into powerful, scalable solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection(aboutRef)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(expertiseRef)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Expertise
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(servicesRef)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection(portfolioRef)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Portfolio
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">
                123 Tech Street, Silicon Valley, CA 94000
              </p>
              <p className="text-gray-400">contact@fullstackstudios.com</p>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>
              &copy; {new Date().getFullYear()} THIS IS FOR DEMOnSTRATION
              PURPOSES ONLY
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
