export interface UserProfile {
  id: string
  userId: string
  // Step 1: Basic Details
  profilePicture?: string
  firstName: string
  lastName: string
  age?: number
  dateOfBirth?: Date
  address?: string
  city?: string
  state?: string
  country?: string
  phone?: string

  // Step 2: Educational Details
  education: EducationDetail[]

  // Step 3: Professional Details
  skills: string[]
  preferredJobRoles: string[]
  bio?: string
  currentRole?: string
  experience?: string

  // Step 4: Social Links
  linkedinUrl?: string
  githubUrl?: string
  leetcodeUrl?: string
  portfolioUrl?: string
  twitterUrl?: string

  // Step 5: Resume
  resumeUrl?: string
  resumeFileName?: string

  isProfileComplete: boolean
  createdAt: Date
  updatedAt: Date
}

export interface EducationDetail {
  id: string
  institution: string
  degree: string
  fieldOfStudy: string
  startDate: Date
  endDate?: Date
  isCurrentlyStudying: boolean
  grade?: string
  description?: string
}

export interface ProfileFormData {
  // Step 1
  profilePicture?: File
  firstName: string
  lastName: string
  age?: number
  dateOfBirth?: string
  address?: string
  city?: string
  state?: string
  country?: string
  phone?: string

  // Step 2
  education: EducationDetail[]

  // Step 3
  skills: string[]
  preferredJobRoles: string[]
  bio?: string
  currentRole?: string
  experience?: string

  // Step 4
  linkedinUrl?: string
  githubUrl?: string
  leetcodeUrl?: string
  portfolioUrl?: string
  twitterUrl?: string

  // Step 5
  resume?: File
}
