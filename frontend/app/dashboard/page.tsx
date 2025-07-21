"use client"

import { useUser } from "@clerk/nextjs"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Code, Trophy, Bell, Search, Plus, TrendingUp, Calendar, MapPin, Clock, User } from "lucide-react"
import Link from "next/link"
import { Value } from "@radix-ui/react-select"

export default function Dashboard() {
  const { user } = useUser()
  const [hasProfile, setHasProfile] = useState<boolean | null>(null)
  const [applications, setApplications] = useState([]);
  const [loadingApps, setLoadingApps] = useState(true);
  const [profile, setProfile] = useState(null);
  const [saved,setSaved] = useState([])

  useEffect(() => {
    fetch("/api/saved-opportunities")
    .then(res => res.json())
    .then(setSaved)
  }, [])

  useEffect(() => {
    fetch('/api/profile')
    .then(res => res.json())
    .then(setProfile)
  }, [])

  useEffect(() => {
    const fetchApplications = async () => {
      setLoadingApps(true);
      try {
        const res = await fetch('/api/applications');
        if (res.ok) {
          setApplications(await res.json());
        }
      } catch (e) {
        console.error("Error fetching applications:", e);
      } finally {
        setLoadingApps(false);
      }
    }
    fetchApplications();
  }, []);

  useEffect(() => {
    const checkProfile = async () => {
      try {
        const response = await fetch("/api/profile")
        if (response.ok) {
          const profile = await response.json()
          setHasProfile(!!profile && profile.isProfileComplete)
        } else {
          setHasProfile(false)
        }
      } catch (error) {
        console.error("Error checking profile:", error)
        setHasProfile(false)
      }
    }

    if (user) {
      checkProfile()
    }
  }, [user])

  const interviewsScheduled = applications.filter((app: any) => app.interviewDate).length;

  const recentOpportunities = [
    {
      title: "Software Engineering Intern",
      company: "Google",
      type: "Internship",
      location: "Mountain View, CA",
      deadline: "2024-02-15",
      status: "Applied",
    },
    {
      title: "React Developer",
      company: "Meta",
      type: "Job",
      location: "Menlo Park, CA",
      deadline: "2024-02-20",
      status: "Pending",
    },
    {
      title: "AI/ML Hackathon",
      company: "OpenAI",
      type: "Hackathon",
      location: "San Francisco, CA",
      deadline: "2024-02-10",
      status: "Interested",
    },
  ]

  const stats = [
    { label: "Applications Sent", value: loadingApps ? "..." : applications.length, icon: <Briefcase className="h-5 w-5" /> },
    { label: "Interviews Scheduled", value: loadingApps ? "..." : interviewsScheduled, icon: <Calendar className="h-5 w-5" /> },
    { label: "Profile Views", value: (profile && "profileViews" in profile) ? (profile as any).profileViews : "...", icon: <TrendingUp className="h-5 w-5" /> },
    { label: "Saved Opportunities", value: saved.length, icon: <Bell className="h-5 w-5" /> },
  ]

  if (hasProfile === null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="sticky top-0 z-50 px-4 lg:px-6 h-16 flex items-center backdrop-blur-sm bg-white/90 border-b border-white/20 shadow-sm">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Trophy className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Helpr
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/dashboard" className="text-blue-600 font-medium">
              Dashboard
            </Link>
            <Link href="/opportunities" className="text-gray-600 hover:text-blue-600 transition-colors">
              Opportunities
            </Link>
            <Link href="/profile" className="text-gray-600 hover:text-blue-600 transition-colors">
              Profile
            </Link>
            <Link href="/saved-opportunities" className="text-gray-600 hover:text-blue-600 transition-colors">
              Saved Opportunities
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {user?.firstName || "User"}! 👋</h1>
          <p className="text-gray-600">Here's what's happening with your career journey today.</p>
        </div>

        {/* Profile Creation CTA */}
        {!hasProfile && (
          <Card className="mb-8 border-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <User className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Complete Your Profile</h3>
                    <p className="text-blue-100">
                      Create your professional profile to get personalized job recommendations and auto-apply features.
                    </p>
                  </div>
                </div>
                <Link href="/create-profile">
                  <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">Create Profile</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className="h-12 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white">
                    {stat.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <Card className="border-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Find New Opportunities</h3>
                <Search className="h-6 w-6" />
              </div>
              <p className="text-blue-100 mb-4">Discover internships and jobs that match your profile.</p>
              <Button className="bg-white text-blue-600 hover:bg-gray-100">Browse Now</Button>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Update Profile</h3>
                <Plus className="h-6 w-6" />
              </div>
              <p className="text-purple-100 mb-4">Keep your profile updated to get better matches.</p>
              <Link href={hasProfile ? "/profile" : "/create-profile"}>
                <Button className="bg-white text-purple-600 hover:bg-gray-100">
                  {hasProfile ? "Edit Profile" : "Create Profile"}
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-0 bg-gradient-to-r from-green-500 to-teal-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Auto-Apply</h3>
                <Trophy className="h-6 w-6" />
              </div>
              <p className="text-green-100 mb-4">Let AI apply to opportunities for you automatically.</p>
              <Button className="bg-white text-green-600 hover:bg-gray-100" disabled={!hasProfile}>
                {hasProfile ? "Set Up" : "Complete Profile First"}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Opportunities */}
        <Card className="border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Recent Opportunities</span>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOpportunities.map((opportunity, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white">
                      {opportunity.type === "Internship" && <Briefcase className="h-6 w-6" />}
                      {opportunity.type === "Job" && <Code className="h-6 w-6" />}
                      {opportunity.type === "Hackathon" && <Trophy className="h-6 w-6" />}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{opportunity.title}</h4>
                      <p className="text-sm text-gray-600">{opportunity.company}</p>
                      <div className="flex items-center space-x-4 mt-1">
                        <div className="flex items-center text-xs text-gray-500">
                          <MapPin className="h-3 w-3 mr-1" />
                          {opportunity.location}
                        </div>
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="h-3 w-3 mr-1" />
                          Due {opportunity.deadline}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge
                      variant={opportunity.status === "Applied" ? "default" : "secondary"}
                      className={opportunity.status === "Applied" ? "bg-green-100 text-green-800" : ""}
                    >
                      {opportunity.status}
                    </Badge>
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
