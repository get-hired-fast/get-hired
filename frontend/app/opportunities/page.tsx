"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "@radix-ui/react-icons"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { useRouter } from "next/navigation"
import { useSearchParams } from "next/navigation"
import OpportunityDetailModal from "./components/opportunity-detail-modal"
import { toast } from "sonner"

const opportunitiesData = [
  {
    id: "1",
    title: "Software Engineer",
    company: "TechCorp",
    type: "Full-time",
    location: "San Francisco, CA",
    salary: "$120,000 - $150,000",
    deadline: "2024-03-15",
    description: "We are looking for a talented software engineer to join our team...",
    skills: ["JavaScript", "React", "Node.js"],
  },
  {
    id: "2",
    title: "Data Scientist",
    company: "DataSolutions",
    type: "Full-time",
    location: "New York, NY",
    salary: "$110,000 - $140,000",
    deadline: "2024-03-20",
    description: "Join our data science team and help us analyze large datasets...",
    skills: ["Python", "Machine Learning", "SQL"],
  },
  {
    id: "3",
    title: "UX Designer",
    company: "DesignCo",
    type: "Contract",
    location: "Remote",
    salary: "$60 - $80/hour",
    deadline: "2024-03-25",
    description: "We need a creative UX designer to improve our user experience...",
    skills: ["UI/UX", "Figma", "Adobe XD"],
  },
  {
    id: "4",
    title: "Project Manager",
    company: "ManageIt",
    type: "Full-time",
    location: "Chicago, IL",
    salary: "$90,000 - $120,000",
    deadline: "2024-03-30",
    description: "Seeking a project manager to oversee our software development projects...",
    skills: ["Project Management", "Agile", "Scrum"],
  },
  {
    id: "5",
    title: "Marketing Specialist",
    company: "MarketNow",
    type: "Full-time",
    location: "Los Angeles, CA",
    salary: "$70,000 - $90,000",
    deadline: "2024-04-05",
    description: "We are hiring a marketing specialist to boost our online presence...",
    skills: ["Digital Marketing", "SEO", "Social Media"],
  },
  {
    id: "6",
    title: "Frontend Developer",
    company: "WebDev Inc.",
    type: "Full-time",
    location: "Austin, TX",
    salary: "$100,000 - $130,000",
    deadline: "2024-04-10",
    description: "Join our team as a Frontend Developer and build amazing user interfaces...",
    skills: ["HTML", "CSS", "React"],
  },
  {
    id: "7",
    title: "Backend Developer",
    company: "ServerSide Solutions",
    type: "Full-time",
    location: "Seattle, WA",
    salary: "$110,000 - $140,000",
    deadline: "2024-04-15",
    description: "We are looking for a Backend Developer to build and maintain our server-side logic...",
    skills: ["Node.js", "Express", "MongoDB"],
  },
  {
    id: "8",
    title: "Mobile App Developer",
    company: "AppMakers",
    type: "Full-time",
    location: "Miami, FL",
    salary: "$90,000 - $120,000",
    deadline: "2024-04-20",
    description: "Join our team as a Mobile App Developer and build innovative mobile applications...",
    skills: ["iOS", "Android", "React Native"],
  },
  {
    id: "9",
    title: "Data Analyst",
    company: "Analytics Inc.",
    type: "Full-time",
    location: "Denver, CO",
    salary: "$80,000 - $110,000",
    deadline: "2024-04-25",
    description: "We are hiring a Data Analyst to analyze and interpret complex data sets...",
    skills: ["SQL", "Excel", "Tableau"],
  },
  {
    id: "10",
    title: "Cybersecurity Analyst",
    company: "SecureTech",
    type: "Full-time",
    location: "Washington, D.C.",
    salary: "$100,000 - $130,000",
    deadline: "2024-04-30",
    description: "Join our team as a Cybersecurity Analyst and protect our systems from cyber threats...",
    skills: ["Cybersecurity", "Network Security", "Penetration Testing"],
  },
]

const locations = [
  "San Francisco, CA",
  "New York, NY",
  "Remote",
  "Chicago, IL",
  "Los Angeles, CA",
  "Austin, TX",
  "Seattle, WA",
  "Miami, FL",
  "Denver, CO",
  "Washington, D.C.",
]

const jobTypes = ["Full-time", "Contract", "Part-time", "Internship"]

const Page = () => {
  const [search, setSearch] = useState("")
  const [locationFilter, setLocationFilter] = useState("All Locations")
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [isRemote, setIsRemote] = useState(false)
  const [salaryRange, setSalaryRange] = useState<number[]>([0, 200000])
  const [opportunities, setOpportunities] = useState(opportunitiesData)
  const [savedOpportunities, setSavedOpportunities] = useState<string[]>([])
  const router = useRouter()
  const searchParams = useSearchParams()

  const [selectedOpportunity, setSelectedOpportunity] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("savedOpportunities")
    if (saved) {
      setSavedOpportunities(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    let filteredOpportunities = opportunitiesData

    if (search) {
      filteredOpportunities = filteredOpportunities.filter((opportunity) =>
        opportunity.title.toLowerCase().includes(search.toLowerCase()),
      )
    }

    if (locationFilter !== "All Locations") {
      filteredOpportunities = filteredOpportunities.filter((opportunity) => opportunity.location === locationFilter)
    }

    if (date) {
      filteredOpportunities = filteredOpportunities.filter((opportunity) => {
        const deadline = new Date(opportunity.deadline)
        const selectedDate = new Date(date)
        return (
          deadline.getFullYear() === selectedDate.getFullYear() &&
          deadline.getMonth() === selectedDate.getMonth() &&
          deadline.getDate() === selectedDate.getDate()
        )
      })
    }

    if (isRemote) {
      filteredOpportunities = filteredOpportunities.filter((opportunity) => opportunity.location === "Remote")
    }

    filteredOpportunities = filteredOpportunities.filter((opportunity) => {
      const salary = Number.parseInt(opportunity.salary.split(" - ")[1].replace(/[^0-9]/g, ""))
      return salary >= salaryRange[0] && salary <= salaryRange[1]
    })

    setOpportunities(filteredOpportunities)
  }, [search, locationFilter, date, isRemote, salaryRange])

  const handleSaveOpportunity = (opportunityId: string) => {
    let updatedSavedOpportunities = [...savedOpportunities]
    if (savedOpportunities.includes(opportunityId)) {
      updatedSavedOpportunities = savedOpportunities.filter((id) => id !== opportunityId)
      toast.success("Opportunity removed from saved list!")
    } else {
      updatedSavedOpportunities = [...savedOpportunities, opportunityId]
      toast.success("Opportunity saved successfully!")
    }

    setSavedOpportunities(updatedSavedOpportunities)
    localStorage.setItem("savedOpportunities", JSON.stringify(updatedSavedOpportunities))
  }

  const handleViewDetails = (opportunity: any) => {
    setSelectedOpportunity(opportunity)
    setIsModalOpen(true)
  }

  const handleApply = async (opportunityId: string, coverLetter: string) => {
    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jobTitle: selectedOpportunity.title,
          company: selectedOpportunity.company,
          jobType: selectedOpportunity.type.toLowerCase(),
          status: "applied",
          deadline: selectedOpportunity.deadline,
          description: selectedOpportunity.description,
          location: selectedOpportunity.location,
          salary: selectedOpportunity.salary,
          jobUrl: `#opportunity-${opportunityId}`,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit application")
      }

      console.log("Application submitted successfully")
    } catch (error) {
      console.error("Error submitting application:", error)
      throw error
    }
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Explore Opportunities</h1>

      {/* Search and Filter Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Input
          type="text"
          placeholder="Search by job title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Select value={locationFilter} onValueChange={setLocationFilter}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All Locations">All Locations</SelectItem>
            {locations.map((location) => (
              <SelectItem key={location} value={location}>
                {location}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={(date) => date > new Date() || date < new Date("2023-01-01")}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Additional Filters */}
      <div className="flex items-center space-x-4 mb-8">
        <div className="flex items-center space-x-2">
          <Checkbox id="remote" checked={isRemote} onCheckedChange={() => setIsRemote(!isRemote)} />
          <Label htmlFor="remote">Remote Only</Label>
        </div>

        <div className="w-1/2">
          <Label>
            Salary Range: ${salaryRange[0]} - ${salaryRange[1]}
          </Label>
          <Slider
            defaultValue={salaryRange}
            max={200000}
            step={10000}
            onValueChange={(value) => setSalaryRange(value)}
          />
        </div>
      </div>

      {/* Opportunities List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {opportunities.map((opportunity) => (
          <div
            key={opportunity.id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{opportunity.title}</h2>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Company:</span> {opportunity.company}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Type:</span> {opportunity.type}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Location:</span> {opportunity.location}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Salary:</span> {opportunity.salary}
            </p>
            <p className="text-gray-600 mb-4">
              <span className="font-semibold">Deadline:</span> {opportunity.deadline}
            </p>
            <div className="flex justify-between items-center">
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                onClick={() => handleViewDetails(opportunity)}
              >
                View Details
              </Button>
              <Button size="sm" variant="outline" onClick={() => handleSaveOpportunity(opportunity.id)}>
                {savedOpportunities.includes(opportunity.id) ? "Unsave" : "Save"}
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Opportunity Detail Modal */}
      <OpportunityDetailModal
        opportunity={selectedOpportunity}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onApply={handleApply}
        onSave={handleSaveOpportunity}
        isSaved={selectedOpportunity ? savedOpportunities.includes(selectedOpportunity.id) : false}
      />
    </div>
  )
}

export default Page
