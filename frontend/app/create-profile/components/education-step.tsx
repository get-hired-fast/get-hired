"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Plus, Trash2, GraduationCap } from "lucide-react"
import type { ProfileFormData, EducationDetail } from "@/lib/types"

interface EducationStepProps {
  data: ProfileFormData
  updateData: (data: Partial<ProfileFormData>) => void
}

export default function EducationStep({ data, updateData }: EducationStepProps) {
  const addEducation = () => {
    const newEducation: EducationDetail = {
      id: Date.now().toString(),
      institution: "",
      degree: "",
      fieldOfStudy: "",
      startDate: new Date(),
      isCurrentlyStudying: false,
    }
    updateData({ education: [...data.education, newEducation] })
  }

  const removeEducation = (id: string) => {
    updateData({ education: data.education.filter((edu) => edu.id !== id) })
  }

  const updateEducation = (id: string, field: keyof EducationDetail, value: any) => {
    updateData({
      education: data.education.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu)),
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <GraduationCap className="h-6 w-6 text-blue-600" />
          <h3 className="text-lg font-semibold">Educational Background</h3>
        </div>
        <Button onClick={addEducation} className="flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Add Education</span>
        </Button>
      </div>

      {data.education.length === 0 ? (
        <Card className="border-dashed border-2 border-gray-300">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <GraduationCap className="h-12 w-12 text-gray-400 mb-4" />
            <p className="text-gray-500 text-center mb-4">No education added yet</p>
            <Button onClick={addEducation} variant="outline">
              Add Your First Education
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {data.education.map((edu, index) => (
            <Card key={edu.id} className="border-l-4 border-l-blue-500">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg">Education #{index + 1}</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeEducation(edu.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Institution *</Label>
                    <Input
                      value={edu.institution}
                      onChange={(e) => updateEducation(edu.id, "institution", e.target.value)}
                      placeholder="University/School name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Degree *</Label>
                    <Input
                      value={edu.degree}
                      onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                      placeholder="Bachelor's, Master's, etc."
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Field of Study *</Label>
                    <Input
                      value={edu.fieldOfStudy}
                      onChange={(e) => updateEducation(edu.id, "fieldOfStudy", e.target.value)}
                      placeholder="Computer Science, Engineering, etc."
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Grade/GPA</Label>
                    <Input
                      value={edu.grade || ""}
                      onChange={(e) => updateEducation(edu.id, "grade", e.target.value)}
                      placeholder="3.8 GPA, First Class, etc."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Start Date *</Label>
                    <Input
                      type="date"
                      value={edu.startDate ? new Date(edu.startDate).toISOString().split("T")[0] : ""}
                      onChange={(e) => updateEducation(edu.id, "startDate", new Date(e.target.value))}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>End Date</Label>
                    <Input
                      type="date"
                      value={edu.endDate ? new Date(edu.endDate).toISOString().split("T")[0] : ""}
                      onChange={(e) =>
                        updateEducation(edu.id, "endDate", e.target.value ? new Date(e.target.value) : undefined)
                      }
                      disabled={edu.isCurrentlyStudying}
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`currently-studying-${edu.id}`}
                    checked={edu.isCurrentlyStudying}
                    onCheckedChange={(checked:any) => updateEducation(edu.id, "isCurrentlyStudying", checked)}
                  />
                  <Label htmlFor={`currently-studying-${edu.id}`}>I am currently studying here</Label>
                </div>
                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea
                    value={edu.description || ""}
                    onChange={(e:any) => updateEducation(edu.id, "description", e.target.value)}
                    placeholder="Relevant coursework, achievements, activities..."
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
