"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { X, Plus, Briefcase } from "lucide-react"
import type { ProfileFormData } from "@/lib/types"

interface ProfessionalStepProps {
  data: ProfileFormData
  updateData: (data: Partial<ProfileFormData>) => void
}

export default function ProfessionalStep({ data, updateData }: ProfessionalStepProps) {
  const [newSkill, setNewSkill] = useState("")
  const [newJobRole, setNewJobRole] = useState("")

  const addSkill = () => {
    if (newSkill.trim() && !data.skills.includes(newSkill.trim())) {
      updateData({ skills: [...data.skills, newSkill.trim()] })
      setNewSkill("")
    }
  }

  const removeSkill = (skill: string) => {
    updateData({ skills: data.skills.filter((s) => s !== skill) })
  }

  const addJobRole = () => {
    if (newJobRole.trim() && !data.preferredJobRoles.includes(newJobRole.trim())) {
      updateData({ preferredJobRoles: [...data.preferredJobRoles, newJobRole.trim()] })
      setNewJobRole("")
    }
  }

  const removeJobRole = (role: string) => {
    updateData({ preferredJobRoles: data.preferredJobRoles.filter((r) => r !== role) })
  }

  const handleInputChange = (field: keyof ProfileFormData, value: string) => {
    updateData({ [field]: value })
  }

  const popularSkills = [
    "JavaScript",
    "Python",
    "React",
    "Node.js",
    "Java",
    "C++",
    "SQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Git",
    "TypeScript",
    "Vue.js",
    "Angular",
    "Express.js",
    "Machine Learning",
    "Data Analysis",
    "UI/UX Design",
    "Project Management",
  ]

  const popularJobRoles = [
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Data Scientist",
    "Product Manager",
    "UI/UX Designer",
    "DevOps Engineer",
    "Mobile Developer",
    "Machine Learning Engineer",
    "Data Analyst",
    "QA Engineer",
  ]

  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-2 mb-6">
        <Briefcase className="h-6 w-6 text-blue-600" />
        <h3 className="text-lg font-semibold">Professional Information</h3>
      </div>

      {/* Current Role & Experience */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="currentRole">Current Role</Label>
          <Input
            id="currentRole"
            value={data.currentRole || ""}
            onChange={(e) => handleInputChange("currentRole", e.target.value)}
            placeholder="e.g., Student, Software Engineer, etc."
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="experience">Experience Level</Label>
          <Input
            id="experience"
            value={data.experience || ""}
            onChange={(e) => handleInputChange("experience", e.target.value)}
            placeholder="e.g., Fresher, 2+ years, etc."
          />
        </div>
      </div>

      {/* Bio */}
      <div className="space-y-2">
        <Label htmlFor="bio">Professional Bio</Label>
        <Textarea
          id="bio"
          value={data.bio || ""}
          onChange={(e:any) => handleInputChange("bio", e.target.value)}
          placeholder="Tell us about yourself, your interests, and career goals..."
          rows={4}
        />
      </div>

      {/* Skills */}
      <div className="space-y-4">
        <Label className="text-base font-semibold">Skills</Label>
        <div className="flex space-x-2">
          <Input
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            placeholder="Add a skill"
            onKeyPress={(e) => e.key === "Enter" && addSkill()}
          />
          <Button onClick={addSkill} type="button">
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        {/* Popular Skills */}
        <div>
          <p className="text-sm text-gray-600 mb-2">Popular skills:</p>
          <div className="flex flex-wrap gap-2">
            {popularSkills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="cursor-pointer hover:bg-blue-50"
                onClick={() => {
                  if (!data.skills.includes(skill)) {
                    updateData({ skills: [...data.skills, skill] })
                  }
                }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Selected Skills */}
        {data.skills.length > 0 && (
          <div>
            <p className="text-sm font-medium mb-2">Your skills:</p>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill) => (
                <Badge key={skill} className="bg-blue-100 text-blue-800">
                  {skill}
                  <X className="h-3 w-3 ml-1 cursor-pointer" onClick={() => removeSkill(skill)} />
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Preferred Job Roles */}
      <div className="space-y-4">
        <Label className="text-base font-semibold">Preferred Job Roles</Label>
        <div className="flex space-x-2">
          <Input
            value={newJobRole}
            onChange={(e) => setNewJobRole(e.target.value)}
            placeholder="Add a preferred job role"
            onKeyPress={(e) => e.key === "Enter" && addJobRole()}
          />
          <Button onClick={addJobRole} type="button">
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        {/* Popular Job Roles */}
        <div>
          <p className="text-sm text-gray-600 mb-2">Popular roles:</p>
          <div className="flex flex-wrap gap-2">
            {popularJobRoles.map((role) => (
              <Badge
                key={role}
                variant="outline"
                className="cursor-pointer hover:bg-purple-50"
                onClick={() => {
                  if (!data.preferredJobRoles.includes(role)) {
                    updateData({ preferredJobRoles: [...data.preferredJobRoles, role] })
                  }
                }}
              >
                {role}
              </Badge>
            ))}
          </div>
        </div>

        {/* Selected Job Roles */}
        {data.preferredJobRoles.length > 0 && (
          <div>
            <p className="text-sm font-medium mb-2">Your preferred roles:</p>
            <div className="flex flex-wrap gap-2">
              {data.preferredJobRoles.map((role) => (
                <Badge key={role} className="bg-purple-100 text-purple-800">
                  {role}
                  <X className="h-3 w-3 ml-1 cursor-pointer" onClick={() => removeJobRole(role)} />
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
