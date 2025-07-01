"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  GraduationCap,
  Briefcase,
  LinkIcon,
  FileText,
  Edit,
  Download,
  RefreshCw,
} from "lucide-react";
import Link from "next/link";
import type { UserProfile } from "@/lib/types";

export default function ProfilePage() {
  const { user } = useUser();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/profile");
      if (response.ok) {
        const profileData = await response.json();
        setProfile(profileData);
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <Card className="max-w-md w-full mx-4">
          <CardContent className="text-center py-12">
            <User className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">No Profile Found</h2>
            <p className="text-gray-600 mb-6">
              Create your profile to get started with Helpr
            </p>
            <Link href="/create-profile">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                Create Profile
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="sticky top-0 z-50 px-4 lg:px-6 h-16 flex items-center backdrop-blur-sm bg-white/90 border-b border-white/20 shadow-sm">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <User className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Helpr
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/dashboard"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/opportunities"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Opportunities
            </Link>
            <Link href="/profile" className="text-blue-600 font-medium">
              Profile
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Profile Header */}
        <Card className="mb-8 border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <Avatar className="h-32 w-32">
                  <AvatarImage
                    src={profile.profilePicture || "/placeholder.svg"}
                  />
                  <AvatarFallback className="text-2xl">
                    {profile.firstName[0]}
                    {profile.lastName[0]}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                      {profile.firstName} {profile.lastName}
                    </h1>
                    {profile.currentRole && (
                      <p className="text-xl text-gray-600 mb-2">
                        {profile.currentRole}
                      </p>
                    )}
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-500">
                      {profile.city && profile.state && (
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {profile.city}, {profile.state}
                        </div>
                      )}
                      {profile.phone && (
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 mr-1" />
                          {profile.phone}
                        </div>
                      )}
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-1" />
                        {user?.emailAddresses[0]?.emailAddress}
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2 mt-4 md:mt-0">
                    <Button
                      onClick={fetchProfile}
                      variant="outline"
                      size="sm"
                      className="flex items-center"
                    >
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Refresh
                    </Button>
                    <Link href="/create-profile">
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit Profile
                      </Button>
                    </Link>
                  </div>
                </div>
                {profile.bio && (
                  <p className="text-gray-700 leading-relaxed">{profile.bio}</p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Skills */}
            {profile.skills && profile.skills.length > 0 && (
              <Card className="border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-blue-600" />
                    Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.map((skill, index) => (
                      <Badge key={index} className="bg-blue-100 text-blue-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Preferred Job Roles */}
            {profile.preferredJobRoles &&
              profile.preferredJobRoles.length > 0 && (
                <Card className="border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Briefcase className="h-5 w-5 mr-2 text-purple-600" />
                      Preferred Job Roles
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {profile.preferredJobRoles.map((role, index) => (
                        <Badge
                          key={index}
                          className="bg-purple-100 text-purple-800"
                        >
                          {role}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

            {/* Education */}
            {profile.education && profile.education.length > 0 && (
              <Card className="border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GraduationCap className="h-5 w-5 mr-2 text-green-600" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {profile.education.map((edu, index) => (
                      <div
                        key={index}
                        className="border-l-4 border-l-green-500 pl-4"
                      >
                        <h4 className="font-semibold text-gray-900">
                          {edu.degree} in {edu.fieldOfStudy}
                        </h4>
                        <p className="text-gray-700 font-medium">
                          {edu.institution}
                        </p>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(edu.startDate).getFullYear()} -{" "}
                          {edu.isCurrentlyStudying
                            ? "Present"
                            : edu.endDate
                            ? new Date(edu.endDate).getFullYear()
                            : "Present"}
                        </div>
                        {edu.grade && (
                          <p className="text-sm text-gray-600 mt-1">
                            Grade: {edu.grade}
                          </p>
                        )}
                        {edu.description && (
                          <p className="text-sm text-gray-600 mt-2">
                            {edu.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Social Links */}
            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <LinkIcon className="h-5 w-5 mr-2 text-blue-600" />
                  Social Links
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {profile.linkedinUrl && (
                    <a
                      href={profile.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <LinkIcon className="h-4 w-4 mr-2" />
                      LinkedIn
                    </a>
                  )}
                  {profile.githubUrl && (
                    <a
                      href={profile.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-800 hover:text-gray-600 transition-colors"
                    >
                      <LinkIcon className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  )}
                  {profile.leetcodeUrl && (
                    <a
                      href={profile.leetcodeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-orange-600 hover:text-orange-800 transition-colors"
                    >
                      <LinkIcon className="h-4 w-4 mr-2" />
                      LeetCode
                    </a>
                  )}
                  {profile.portfolioUrl && (
                    <a
                      href={profile.portfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-green-600 hover:text-green-800 transition-colors"
                    >
                      <LinkIcon className="h-4 w-4 mr-2" />
                      Portfolio
                    </a>
                  )}
                  {profile.twitterUrl && (
                    <a
                      href={profile.twitterUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-400 hover:text-blue-600 transition-colors"
                    >
                      <LinkIcon className="h-4 w-4 mr-2" />
                      Twitter
                    </a>
                  )}
                  {!profile.linkedinUrl &&
                    !profile.githubUrl &&
                    !profile.leetcodeUrl &&
                    !profile.portfolioUrl &&
                    !profile.twitterUrl && (
                      <p className="text-gray-500 text-sm">
                        No social links added yet
                      </p>
                    )}
                </div>
              </CardContent>
            </Card>

            {/* Resume */}
            {profile.resumeUrl && (
              <Card className="border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-red-600" />
                    Resume
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <FileText className="h-8 w-8 text-red-600 mr-4 mt-1" />

                    <div className="flex flex-col space-y-2">
                      <div>
                        <p className="font-medium text-gray-900">
                          {profile.resumeFileName || "Resume.pdf"}
                        </p>
                        <p className="text-sm text-gray-500">PDF Document</p>
                      </div>

                      <a
                        href={profile.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="mt-1 w-fit"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Profile Stats */}
            <Card className="border-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardHeader>
                <CardTitle>Profile Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Profile Complete</span>
                    <Badge className="bg-white text-blue-600">
                      {profile.isProfileComplete ? "100%" : "Incomplete"}
                    </Badge>
                  </div>
                  <div className="text-sm opacity-90">
                    {profile.isProfileComplete
                      ? "Your profile is complete and ready to attract opportunities!"
                      : "Complete your profile to get better matches."}
                  </div>
                  <div className="text-xs opacity-75">
                    Last updated:{" "}
                    {new Date(profile.updatedAt).toLocaleDateString()}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
