"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Upload, User } from "lucide-react"
import type { ProfileFormData } from "@/lib/types"

interface BasicDetailsStepProps {
  data: ProfileFormData
  updateData: (data: Partial<ProfileFormData>) => void
}

export default function BasicDetailsStep({ data, updateData }: BasicDetailsStepProps) {
  const [previewUrl, setPreviewUrl] = useState<string>("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      updateData({ profilePicture: file })
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
    }
  }

  const handleInputChange = (field: keyof ProfileFormData, value: string | number) => {
    updateData({ [field]: value })
  }

  return (
    <div className="space-y-6">
      {/* Profile Picture */}
      <div className="flex flex-col items-center space-y-4">
        <Avatar className="h-24 w-24">
          <AvatarImage src={previewUrl || "/placeholder.svg"} />
          <AvatarFallback>
            <User className="h-12 w-12" />
          </AvatarFallback>
        </Avatar>
        <div>
          <Label htmlFor="profile-picture" className="cursor-pointer">
            <Button variant="outline" className="flex items-center space-x-2" asChild>
              <span>
                <Upload className="h-4 w-4" />
                <span>Upload Profile Picture</span>
              </span>
            </Button>
          </Label>
          <Input id="profile-picture" type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
        </div>
      </div>

      {/* Basic Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            value={data.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            placeholder="Enter your first name"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            value={data.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            placeholder="Enter your last name"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="age">Age</Label>
          <Input
            id="age"
            type="number"
            value={data.age || ""}
            onChange={(e) => handleInputChange("age", Number.parseInt(e.target.value) || 0)}
            placeholder="Enter your age"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="dateOfBirth">Date of Birth</Label>
          <Input
            id="dateOfBirth"
            type="date"
            value={data.dateOfBirth || ""}
            onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            value={data.phone || ""}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            placeholder="Enter your phone number"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            value={data.city || ""}
            onChange={(e) => handleInputChange("city", e.target.value)}
            placeholder="Enter your city"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="state">State</Label>
          <Input
            id="state"
            value={data.state || ""}
            onChange={(e) => handleInputChange("state", e.target.value)}
            placeholder="Enter your state"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="country">Country</Label>
          <Input
            id="country"
            value={data.country || ""}
            onChange={(e) => handleInputChange("country", e.target.value)}
            placeholder="Enter your country"
          />
        </div>
      </div>

      {/* Address */}
      <div className="space-y-2">
        <Label htmlFor="address">Full Address</Label>
        <Textarea
          id="address"
          value={data.address || ""}
          onChange={(e:any) => handleInputChange("address", e.target.value)}
          placeholder="Enter your complete address"
          rows={3}
        />
      </div>
    </div>
  )
}
