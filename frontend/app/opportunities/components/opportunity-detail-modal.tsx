"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  MapPin,
  Clock,
  DollarSign,
  Users,
  Calendar,
  ExternalLink,
  Heart,
  Share2,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import { toast } from "sonner"

interface OpportunityDetailModalProps {
  opportunity: any
  isOpen: boolean
  onClose: () => void
  onApply: (opportunityId: string, coverLetter: string) => void
  onSave: (opportunityId: string) => void
  isSaved: boolean
}

export default function OpportunityDetailModal({
  opportunity,
  isOpen,
  onClose,
  onApply,
  onSave,
  isSaved,
}: OpportunityDetailModalProps) {
  const [isApplying, setIsApplying] = useState(false)
  const [coverLetter, setCoverLetter] = useState("")
  const [applicationSubmitted, setApplicationSubmitted] = useState(false)

  const handleApply = async () => {
    setIsApplying(true)
    try {
      await onApply(opportunity.id, coverLetter)
      setApplicationSubmitted(true)
      toast.success("Application submitted successfully!")
      setTimeout(() => {
        setApplicationSubmitted(false)
        onClose()
      }, 2000)
    } catch (error) {
      console.error("Error applying:", error)
      toast.error("Failed to submit application. Please try again.")
    } finally {
      setIsApplying(false)
    }
  }

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "internship":
        return "bg-blue-100 text-blue-800"
      case "job":
        return "bg-green-100 text-green-800"
      case "hackathon":
        return "bg-purple-100 text-purple-800"
      case "challenge":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  if (!opportunity) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{opportunity.title}</DialogTitle>
        </DialogHeader>

        {applicationSubmitted ? (
          <div className="text-center py-12">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-green-900 mb-2">Application Submitted!</h3>
            <p className="text-green-700">Your application has been successfully submitted.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Header Info */}
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <img
                  src={opportunity.logo || "/placeholder.svg"}
                  alt={`${opportunity.company} logo`}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{opportunity.company}</h2>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {opportunity.location}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {opportunity.salary}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Badge className={getTypeColor(opportunity.type)}>{opportunity.type}</Badge>
                {opportunity.remote && <Badge variant="outline">Remote</Badge>}
                {opportunity.featured && (
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">Featured</Badge>
                )}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Calendar className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Deadline</p>
                  <p className="font-semibold">{new Date(opportunity.deadline).toLocaleDateString()}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Users className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Applicants</p>
                  <p className="font-semibold">{opportunity.applicants}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Clock className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Posted</p>
                  <p className="font-semibold">{new Date(opportunity.postedDate).toLocaleDateString()}</p>
                </CardContent>
              </Card>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold mb-3">About this opportunity</h3>
              <p className="text-gray-700 leading-relaxed">{opportunity.description}</p>
            </div>

            {/* Requirements */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Requirements</h3>
              <ul className="space-y-2">
                {opportunity?.requirements?.map((req: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Required Skills</h3>
              <div className="flex flex-wrap gap-2">
                {opportunity?.skills?.map((skill: string, index: number) => (
                  <Badge key={index} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Application Section */}
            {!isApplying && (
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-3">Apply for this opportunity</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="coverLetter">Cover Letter (Optional)</Label>
                    <Textarea
                      id="coverLetter"
                      placeholder="Tell them why you're interested in this opportunity..."
                      value={coverLetter}
                      onChange={(e) => setCoverLetter(e.target.value)}
                      rows={4}
                      className="mt-1"
                    />
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <div>
                        <p className="text-sm text-blue-900 font-medium">Application will use your profile</p>
                        <p className="text-sm text-blue-700 mt-1">
                          Your profile information, resume, and skills will be automatically included with this
                          application.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center justify-between pt-6 border-t">
              <div className="flex space-x-2">
                <Button variant="outline" onClick={() => onSave(opportunity.id)}>
                  <Heart className={`h-4 w-4 mr-2 ${isSaved ? "fill-current text-red-600" : ""}`} />
                  {isSaved ? "Saved" : "Save"}
                </Button>
                <Button variant="outline">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Original
                </Button>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  onClick={handleApply}
                  disabled={isApplying}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                >
                  {isApplying ? "Applying..." : "Apply Now"}
                </Button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
