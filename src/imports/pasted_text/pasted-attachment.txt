Build a complete production-ready MERN Stack web application named "InternHub – Internship & Job Opportunity Portal".

Tech Stack:
- MongoDB
- Express.js
- React.js (Vite)
- Node.js
- JWT Authentication
- Redux Toolkit
- Tailwind CSS
- React Router DOM
- Axios
- Multer
- Cloudinary
- Socket.io
- Chart.js/Recharts

Project Goal:
Create a modern internship and job portal where Students can find and apply for internships/jobs, Recruiters can post opportunities and manage applicants, and Admins can manage the entire platform.

----------------------------------------------------
AUTHENTICATION & AUTHORIZATION
----------------------------------------------------

Implement secure JWT Authentication with Role-Based Access Control (RBAC).

Roles:
1. Student
2. Recruiter
3. Admin

Features:
- Register
- Login
- Logout
- Forgot Password
- Reset Password
- Email Verification
- Remember Me
- Protected Routes
- Role-based Middleware
- Account Activation
- Session Persistence

Registration Fields:
- Full Name
- Email
- Password
- Confirm Password
- Role Selection (Student/Recruiter)

Login Fields:
- Email
- Password

----------------------------------------------------
LANDING PAGE
----------------------------------------------------

Create a professional modern landing page inspired by LinkedIn Jobs and Internshala.

Sections:
- Responsive Navbar
- Hero Section
- Featured Jobs
- Featured Internships
- Top Recruiters
- Success Stories
- Statistics Counter
- Testimonials
- FAQ
- Contact Section
- Footer

Navbar Links:
- Home
- Jobs
- Internships
- Companies
- About
- Contact
- Login
- Register

Hero Section:
Headline:
"Find Your Dream Internship and Career Opportunity"

Subheadline:
"Connect with top recruiters and build your future."

Buttons:
- Explore Jobs
- Post Opportunity

----------------------------------------------------
STUDENT MODULE
----------------------------------------------------

Student Dashboard Features:

Sidebar:
- Dashboard
- My Profile
- Resume
- Browse Jobs
- Browse Internships
- Applied Opportunities
- Saved Jobs
- Notifications
- Settings

Student Profile:
- Profile Picture
- Full Name
- Email
- Phone
- College
- Degree
- Branch
- Year of Study
- CGPA
- Skills
- Certifications
- Projects
- Experience
- Bio
- LinkedIn URL
- GitHub URL
- Portfolio URL

Resume Management:
- Upload Resume (PDF)
- Preview Resume
- Download Resume
- Replace Resume

Job Search Features:
- Search Bar
- Advanced Filters
- Location Filter
- Salary Filter
- Skills Filter
- Remote Filter
- Internship Filter
- Experience Filter
- Sort By

Apply Job:
- Cover Letter
- Resume Selection
- Apply Button

Application Status:
- Applied
- Under Review
- Shortlisted
- Interview Scheduled
- Selected
- Rejected

Saved Jobs:
- Bookmark Opportunities
- Remove Bookmark

----------------------------------------------------
RECRUITER MODULE
----------------------------------------------------

Recruiter Dashboard Features:

Sidebar:
- Dashboard
- Company Profile
- Post Job
- Manage Jobs
- Applicants
- Analytics
- Settings

Company Profile:
- Company Name
- Logo
- Website
- Industry
- Description
- Company Size
- Headquarters
- Location

Post Job:
Fields:
- Job Title
- Job Description
- Requirements
- Responsibilities
- Required Skills
- Salary Range
- Location
- Employment Type
- Experience Level
- Deadline
- Number of Openings

Job Types:
- Internship
- Full Time
- Part Time
- Contract
- Remote

Manage Jobs:
- Create
- View
- Edit
- Delete
- Close Position
- Reopen Position

Applicants Management:
View:
- Applicant Details
- Resume
- Cover Letter
- Skills

Actions:
- Shortlist
- Reject
- Schedule Interview
- Select Candidate

Interview Management:
- Schedule Date
- Time
- Meeting Link
- Notes

----------------------------------------------------
ADMIN MODULE
----------------------------------------------------

Admin Dashboard Features:

Sidebar:
- Dashboard
- Students
- Recruiters
- Jobs
- Applications
- Reports
- Analytics
- Settings

Admin Controls:
- View All Users
- Approve Recruiters
- Suspend Recruiters
- Block Users
- Delete Accounts
- Delete Jobs
- Moderate Content
- Manage Reports

Analytics:
- Total Users
- Total Students
- Total Recruiters
- Active Jobs
- Applications
- Hiring Trends

Charts:
- Bar Chart
- Pie Chart
- Line Chart
- Area Chart

----------------------------------------------------
NOTIFICATION SYSTEM
----------------------------------------------------

Real-Time Notifications using Socket.io

Notifications:
- Job Application Submitted
- Application Shortlisted
- Interview Scheduled
- Application Rejected
- Job Posted
- Recruiter Approved
- Admin Announcements

----------------------------------------------------
DATABASE MODELS
----------------------------------------------------

User:
- id
- name
- email
- password
- role
- avatar
- isVerified
- isBlocked
- createdAt

StudentProfile:
- userId
- college
- degree
- branch
- year
- cgpa
- skills
- certifications
- projects
- bio
- linkedin
- github
- portfolio
- resumeUrl

RecruiterProfile:
- userId
- companyName
- logo
- website
- industry
- description
- location

Job:
- recruiterId
- title
- description
- requirements
- responsibilities
- skills
- salary
- location
- type
- experience
- deadline
- openings
- status

Application:
- studentId
- jobId
- resume
- coverLetter
- status
- appliedAt

Notification:
- userId
- title
- message
- isRead

----------------------------------------------------
API REQUIREMENTS
----------------------------------------------------

Authentication APIs
Student APIs
Recruiter APIs
Admin APIs
Job APIs
Application APIs
Notification APIs

Implement:
- Pagination
- Filtering
- Searching
- Sorting
- Validation
- Error Handling

----------------------------------------------------
SECURITY
----------------------------------------------------

Implement:
- JWT Authentication
- Bcrypt Password Hashing
- Helmet
- CORS
- Rate Limiting
- XSS Protection
- MongoDB Sanitization
- Input Validation
- Secure Cookies

----------------------------------------------------
UI/UX REQUIREMENTS
----------------------------------------------------

- Fully Responsive
- Mobile First Design
- Professional Dashboard
- Tailwind CSS
- Dark Mode
- Light Mode
- Skeleton Loaders
- Toast Notifications
- Smooth Animations
- Modern Cards
- Data Tables
- Modal Components
- Pagination Components

----------------------------------------------------
FOLDER STRUCTURE
----------------------------------------------------

Frontend:
- pages
- components
- layouts
- redux
- services
- hooks
- routes
- utils

Backend:
- controllers
- models
- routes
- middleware
- services
- config
- uploads
- utils

----------------------------------------------------
BONUS FEATURES
----------------------------------------------------

- Resume Parsing
- AI Resume Score
- AI Job Recommendation
- OTP Verification
- Google Login
- LinkedIn Login
- Activity Logs
- Bookmark Jobs
- Export Reports to Excel/PDF
- Email Notifications
- Recruiter Approval Workflow
- Admin Audit Logs

Generate complete frontend, backend, MongoDB schemas, REST APIs, authentication middleware, protected routes, dashboards, reusable React components, Redux Toolkit state management, responsive UI, database relationships, validation, security implementation, and deployment-ready code with clean architecture and industry-standard best practices.