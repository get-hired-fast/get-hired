"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, FileText, Check, X } from "lucide-react"
import type { ProfileFormData } from "@/lib/types"

interface ResumeStepProps {
  data: ProfileFormData
  updateData: (data: Partial<ProfileFormData>) => void
}

export default function ResumeStep({ data, updateData }: ResumeStepProps) {
  const [dragActive, setDragActive] = useState(false)

  const handleFileChange = (file: File) => {
    if (file && file.type === "application/pdf") {
      updateData({ resume: file })
    } else {
      alert("Please upload a PDF file only.")
    }
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0])
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileChange(e.target.files[0])
    }
  }

  const removeResume = () => {
    updateData({ resume: undefined })
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-lg font-semibold mb-2">Upload Your Resume</h3>
        <p className="text-gray-600">Upload your latest resume to complete your profile</p>
      </div>

      {!data.resume ? (
        <Card
          className={`border-2 border-dashed transition-colors ${
            dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <CardContent className="flex flex-col items-center justify-center py-12">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Upload className="h-8 w-8 text-blue-600" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Upload your resume</h4>
            <p className="text-gray-600 text-center mb-6">Drag and drop your resume here, or click to browse</p>
            <Label htmlFor="resume-upload" className="cursor-pointer">
              <Button
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                asChild
              >
                <span>Choose File</span>
              </Button>
            </Label>
            <input id="resume-upload" type="file" accept=".pdf" onChange={handleInputChange} className="hidden" />
            <p className="text-xs text-gray-500 mt-4">PDF files only, max 10MB</p>
          </CardContent>
        </Card>
      ) : (
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-green-900">{data.resume.name}</h4>
                  <p className="text-sm text-green-700">{(data.resume.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <Button variant="ghost" size="sm" onClick={removeResume} className="text-red-500 hover:text-red-700">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Resume Tips */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h4 className="text-sm font-medium text-yellow-900 mb-2">Resume Tips</h4>
        <ul className="text-sm text-yellow-800 space-y-1">
          <li>• Keep your resume updated with latest experiences</li>
          <li>• Use a clean, professional format</li>
          <li>• Highlight relevant skills and achievements</li>
          <li>• Keep it concise (1-2 pages recommended)</li>
          <li>• Save as PDF to preserve formatting</li>
        </ul>
      </div>
    </div>
  )
}
