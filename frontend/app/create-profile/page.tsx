"use client"

import { useState } from "react"
import { useUser } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import BasicDetailsStep from "./components/basic-details-step"
import EducationStep from "./components/education-step"
import ProfessionalStep from "./components/professional-step"
import SocialLinksStep from "./components/social-links-step"
import ResumeStep from "./components/resume-step"
import type { ProfileFormData } from "@/lib/types"

const steps = [
  { id: 1, title: "Basic Details", description: "Personal information" },
  { id: 2, title: "Education", description: "Educational background" },
  { id: 3, title: "Professional", description: "Skills and experience" },
  { id: 4, title: "Social Links", description: "Online presence" },
  { id: 5, title: "Resume", description: "Upload your resume" },
]

export default function CreateProfile() {
  const { user } = useUser()
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<ProfileFormData>({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    skills: [],
    preferredJobRoles: [],
    education: [],
  })

  const progress = (currentStep / steps.length) * 100

  const updateFormData = (stepData: Partial<ProfileFormData>) => {
    setFormData((prev) => ({ ...prev, ...stepData }))
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      console.log("🚀 Starting profile submission...")
      console.log("📝 Form data:", formData)

      // Upload files first
      let profilePictureUrl = ""
      let resumeUrl = ""
      let resumeFileName = ""

      if (formData.profilePicture) {
        console.log("📸 Uploading profile picture...")
        const profilePicFormData = new FormData()
        profilePicFormData.append("file", formData.profilePicture)

        const profilePicResponse = await fetch("/api/upload", {
          method: "POST",
          body: profilePicFormData,
        })

        if (!profilePicResponse.ok) {
          const errorText = await profilePicResponse.text()
          throw new Error(`Profile picture upload failed: ${errorText}`)
        }

        const profilePicResult = await profilePicResponse.json()
        profilePictureUrl = profilePicResult.url
        console.log("✅ Profile picture uploaded:", profilePictureUrl)
      }

      if (formData.resume) {
        console.log("📄 Uploading resume...")
        const resumeFormData = new FormData()
        resumeFormData.append("file", formData.resume)

        const resumeResponse = await fetch("/api/upload", {
          method: "POST",
          body: resumeFormData,
        })

        if (!resumeResponse.ok) {
          const errorText = await resumeResponse.text()
          throw new Error(`Resume upload failed: ${errorText}`)
        }

        const resumeResult = await resumeResponse.json()
        resumeUrl = resumeResult.url
        resumeFileName = resumeResult.filename
        console.log("✅ Resume uploaded:", resumeUrl)
      }

      // Prepare profile data
      const profileData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        age: formData.age || null,
        dateOfBirth: formData.dateOfBirth || null,
        address: formData.address || null,
        city: formData.city || null,
        state: formData.state || null,
        country: formData.country || null,
        phone: formData.phone || null,
        skills: formData.skills || [],
        preferredJobRoles: formData.preferredJobRoles || [],
        bio: formData.bio || null,
        currentRole: formData.currentRole || null,
        experience: formData.experience || null,
        linkedinUrl: formData.linkedinUrl || null,
        githubUrl: formData.githubUrl || null,
        leetcodeUrl: formData.leetcodeUrl || null,
        portfolioUrl: formData.portfolioUrl || null,
        twitterUrl: formData.twitterUrl || null,
        profilePicture: profilePictureUrl || null,
        resumeUrl: resumeUrl || null,
        resumeFileName: resumeFileName || null,
        education: formData.education || [],
      }

      console.log("💾 Saving profile data:", profileData)

      const response = await fetch("/api/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profileData),
      })

      const responseText = await response.text()
      console.log("📡 API Response:", responseText)

      if (response.ok) {
        console.log("🎉 Profile saved successfully!")
        router.push("/profile")
      } else {
        let errorMessage = "Failed to save profile"
        try {
          const errorData = JSON.parse(responseText)
          errorMessage = errorData.details || errorData.error || errorMessage
        } catch (e) {
          errorMessage = responseText || errorMessage
        }
        throw new Error(errorMessage)
      }
    } catch (error) {
      console.error("❌ Error saving profile:", error)
      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred"
      alert(`Failed to save profile: ${errorMessage}`)
    } finally {
      setIsLoading(false)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <BasicDetailsStep data={formData} updateData={updateFormData} />
      case 2:
        return <EducationStep data={formData} updateData={updateFormData} />
      case 3:
        return <ProfessionalStep data={formData} updateData={updateFormData} />
      case 4:
        return <SocialLinksStep data={formData} updateData={updateFormData} />
      case 5:
        return <ResumeStep data={formData} updateData={updateFormData} />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Your Profile</h1>
          <p className="text-gray-600">Let's build your professional profile step by step</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep > step.id
                      ? "bg-green-500 text-white"
                      : currentStep === step.id
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {currentStep > step.id ? <Check className="h-5 w-5" /> : step.id}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-full h-1 mx-4 ${currentStep > step.id ? "bg-green-500" : "bg-gray-200"}`} />
                )}
              </div>
            ))}
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Step Content */}
        <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Step {currentStep}: {steps[currentStep - 1].title}
                </h2>
                <p className="text-gray-600 mt-1">{steps[currentStep - 1].description}</p>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">{renderStep()}</CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button variant="outline" onClick={prevStep} disabled={currentStep === 1} className="flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>

          {currentStep === steps.length ? (
            <Button
              onClick={handleSubmit}
              disabled={isLoading}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex items-center"
            >
              {isLoading ? "Creating Profile..." : "Complete Profile"}
              <Check className="h-4 w-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={nextStep}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex items-center"
            >
              Next
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
