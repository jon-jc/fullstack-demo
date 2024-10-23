"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  User,
  Mail,
  Briefcase,
  FileText,
  DollarSign,
  Phone,
  Globe,
  Calendar,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

export default function ContactForm() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    projectType: "",
    budget: "",
    timeline: 3,
    startDate: "",
    contactMethod: "email",
    message: "",
    services: [] as string[],
    newsletter: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" });
  };

  const handleSelectChange = (value: string, name: string) => {
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleCheckboxChange = (checked: boolean, name: string) => {
    if (checked) {
      setFormData({ ...formData, services: [...formData.services, name] });
    } else {
      setFormData({
        ...formData,
        services: formData.services.filter((service) => service !== name),
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.projectType)
      newErrors.projectType = "Project type is required";
    if (!formData.budget) newErrors.budget = "Budget range is required";
    if (!formData.message) newErrors.message = "Project details are required";
    if (formData.services.length === 0)
      newErrors.services = "Please select at least one service";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      toast({
        title: "Form Submitted Successfully",
        description:
          "We've received your message and will get back to you soon!",
      });
      setIsFormVisible(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        website: "",
        projectType: "",
        budget: "",
        timeline: 3,
        startDate: "",
        contactMethod: "email",
        message: "",
        services: [],
        newsletter: false,
      });
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      {!isFormVisible ? (
        <Button onClick={() => setIsFormVisible(true)} className="px-8 py-6">
          Get Started
        </Button>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-black backdrop-blur-md p-8 rounded-2xl shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 mask-image-gradient-to-b" />
            <div className="relative">
              <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Lets Bring Your Vision to Life
              </h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="flex items-center space-x-2 text-lg"
                    >
                      <User className="w-5 h-5" />
                      <span>Name</span>
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`transition-all duration-300 focus:ring-2 focus:ring-primary text-lg py-6 ${
                        errors.name ? "border-red-500" : ""
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm">{errors.name}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="flex items-center space-x-2 text-lg"
                    >
                      <Mail className="w-5 h-5" />
                      <span>Email</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`transition-all duration-300 focus:ring-2 focus:ring-primary text-lg py-6 ${
                        errors.email ? "border-red-500" : ""
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="company"
                      className="flex items-center space-x-2 text-lg"
                    >
                      <Briefcase className="w-5 h-5" />
                      <span>Company</span>
                    </Label>
                    <Input
                      id="company"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={handleChange}
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary text-lg py-6"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="website"
                      className="flex items-center space-x-2 text-lg"
                    >
                      <Globe className="w-5 h-5" />
                      <span>Website</span>
                    </Label>
                    <Input
                      id="website"
                      placeholder="https://yourwebsite.com"
                      value={formData.website}
                      onChange={handleChange}
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary text-lg py-6"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="project-type"
                      className="flex items-center space-x-2 text-lg"
                    >
                      <FileText className="w-5 h-5" />
                      <span>Project Type</span>
                    </Label>
                    <Select
                      onValueChange={(value: string) =>
                        handleSelectChange(value, "projectType")
                      }
                    >
                      <SelectTrigger
                        id="project-type"
                        className={`transition-all duration-300 focus:ring-2 focus:ring-primary text-lg py-6 ${
                          errors.projectType ? "border-red-500" : ""
                        }`}
                      >
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
                    {errors.projectType && (
                      <p className="text-red-500 text-sm">
                        {errors.projectType}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="budget"
                      className="flex items-center space-x-2 text-lg"
                    >
                      <DollarSign className="w-5 h-5" />
                      <span>Budget Range</span>
                    </Label>
                    <Select
                      onValueChange={(value: string) =>
                        handleSelectChange(value, "budget")
                      }
                    >
                      <SelectTrigger
                        id="budget"
                        className={`transition-all duration-300 focus:ring-2 focus:ring-primary text-lg py-6 ${
                          errors.budget ? "border-red-500" : ""
                        }`}
                      >
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
                    {errors.budget && (
                      <p className="text-red-500 text-sm">{errors.budget}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-4">
                  <Label className="flex items-center space-x-2 text-lg">
                    <Clock className="w-5 h-5" />
                    <span>Project Timeline (in months)</span>
                  </Label>
                  <Slider
                    defaultValue={[3]}
                    max={24}
                    step={1}
                    onValueChange={(value: number[]) =>
                      setFormData({ ...formData, timeline: value[0] })
                    }
                  />
                  <p className="text-center text-lg font-semibold">
                    {formData.timeline} months
                  </p>
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="start-date"
                    className="flex items-center space-x-2 text-lg"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Preferred Start Date</span>
                  </Label>
                  <Input
                    id="start-date"
                    type="date"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary text-lg py-6"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="flex items-center space-x-2 text-lg">
                    <FileText className="w-5 h-5" />
                    <span>Services Required</span>
                  </Label>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "UI/UX Design",
                      "Frontend Development",
                      "Backend Development",
                      "Mobile App Development",
                      "DevOps",
                      "Quality Assurance",
                    ].map((service) => (
                      <div
                        key={service}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={service}
                          checked={formData.services.includes(service)}
                          onCheckedChange={(checked: boolean) =>
                            handleCheckboxChange(checked as boolean, service)
                          }
                        />
                        <label
                          htmlFor={service}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {service}
                        </label>
                      </div>
                    ))}
                  </div>
                  {errors.services && (
                    <p className="text-red-500 text-sm">{errors.services}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label className="flex items-center space-x-2 text-lg">
                    <Phone className="w-5 h-5" />
                    <span>Preferred Contact Method</span>
                  </Label>
                  <RadioGroup
                    defaultValue="email"
                    className="flex space-x-4"
                    onValueChange={(value) =>
                      handleSelectChange(value, "contactMethod")
                    }
                  >
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
                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="flex items-center space-x-2 text-lg"
                  >
                    <FileText className="w-5 h-5" />
                    <span>Project Details</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project requirements and goals"
                    value={formData.message}
                    onChange={handleChange}
                    className={`min-h-[150px] transition-all duration-300 focus:ring-2 focus:ring-primary text-lg ${
                      errors.message ? "border-red-500" : ""
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked: boolean) =>
                      setFormData({
                        ...formData,
                        newsletter: checked as boolean,
                      })
                    }
                  />
                  <label
                    htmlFor="newsletter"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Subscribe to our newsletter for updates and tech insights
                  </label>
                </div>
                <motion.div
                  className="flex justify-end space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsFormVisible(false)}
                    className="px-6 py-4 text-lg"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground px-6 py-4 text-lg"
                  >
                    <Send className="mr-2 h-5 w-5" /> Send Message
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
