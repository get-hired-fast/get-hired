"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Globe, Twitter, Code } from "lucide-react"
import type { ProfileFormData } from "@/lib/types"

interface SocialLinksStepProps {
  data: ProfileFormData
  updateData: (data: Partial<ProfileFormData>) => void
}

export default function SocialLinksStep({ data, updateData }: SocialLinksStepProps) {
  const handleInputChange = (field: keyof ProfileFormData, value: string) => {
    updateData({ [field]: value })
  }

  const socialLinks = [
    {
      field: "linkedinUrl" as keyof ProfileFormData,
      label: "LinkedIn Profile",
      placeholder: "https://linkedin.com/in/yourprofile",
      icon: <Linkedin className="h-5 w-5 text-blue-600" />,
      description: "Your professional LinkedIn profile",
    },
    {
      field: "githubUrl" as keyof ProfileFormData,
      label: "GitHub Profile",
      placeholder: "https://github.com/yourusername",
      icon: <Github className="h-5 w-5 text-gray-800" />,
      description: "Showcase your code repositories",
    },
    {
      field: "leetcodeUrl" as keyof ProfileFormData,
      label: "LeetCode Profile",
      placeholder: "https://leetcode.com/yourusername",
      icon: <Code className="h-5 w-5 text-orange-600" />,
      description: "Your coding practice profile",
    },
    {
      field: "portfolioUrl" as keyof ProfileFormData,
      label: "Portfolio Website",
      placeholder: "https://yourportfolio.com",
      icon: <Globe className="h-5 w-5 text-green-600" />,
      description: "Your personal portfolio or website",
    },
    {
      field: "twitterUrl" as keyof ProfileFormData,
      label: "Twitter Profile",
      placeholder: "https://twitter.com/yourusername",
      icon: <Twitter className="h-5 w-5 text-blue-400" />,
      description: "Your professional Twitter account",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-lg font-semibold mb-2">Connect Your Online Presence</h3>
        <p className="text-gray-600">Add your social profiles to showcase your professional presence</p>
      </div>

      <div className="grid gap-6">
        {socialLinks.map((link) => (
          <Card key={link.field} className="border-l-4 border-l-blue-500">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">{link.icon}</div>
                <div className="flex-1 space-y-2">
                  <div>
                    <Label htmlFor={link.field} className="text-base font-medium">
                      {link.label}
                    </Label>
                    <p className="text-sm text-gray-600">{link.description}</p>
                  </div>
                  <Input
                    id={link.field}
                    type="url"
                    value={(data[link.field] as string) || ""}
                    onChange={(e) => handleInputChange(link.field, e.target.value)}
                    placeholder={link.placeholder}
                    className="mt-2"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">!</span>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-blue-900">Pro Tip</h4>
            <p className="text-sm text-blue-700 mt-1">
              Having a strong online presence increases your chances of getting noticed by recruiters. Make sure your
              profiles are up-to-date and professional.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
