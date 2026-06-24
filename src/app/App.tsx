import { useState, type ReactNode } from "react";
import {
  Search, MapPin, Briefcase, Building2, Users, TrendingUp, TrendingDown,
  ChevronDown, ChevronUp, ChevronRight, X, Menu, Bell, Settings, LogOut,
  Home, FileText, Bookmark, BarChart2, PlusCircle, List, UserCheck,
  Shield, Eye, Edit2, Trash2, CheckCircle, XCircle, ArrowRight, Upload,
  Download, Globe, GraduationCap, User, Calendar, DollarSign, Star,
  Github, Linkedin, RefreshCw,
} from "lucide-react";
import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from "recharts";

// ─── Mock data ───────────────────────────────────────────────────────────────

const JOBS = [
  { id: 1, title: "Frontend Developer Intern", company: "Razorpay", logo: "R", color: "#3B82F6", location: "Bangalore", remote: false, type: "Internship", salary: "₹25,000/mo", skills: ["React", "TypeScript", "CSS"], deadline: "Jul 20, 2026", posted: "2d ago", applicants: 127 },
  { id: 2, title: "Product Manager", company: "Zomato", logo: "Z", color: "#E53935", location: "Gurugram", remote: false, type: "Full Time", salary: "₹12–18 LPA", skills: ["Roadmapping", "SQL", "Figma"], deadline: "Aug 1, 2026", posted: "1d ago", applicants: 89 },
  { id: 3, title: "Data Science Intern", company: "Flipkart", logo: "F", color: "#F59E0B", location: "Bangalore", remote: false, type: "Internship", salary: "₹20,000/mo", skills: ["Python", "ML", "Pandas"], deadline: "Jul 25, 2026", posted: "3d ago", applicants: 245 },
  { id: 4, title: "Backend Developer", company: "Swiggy", logo: "S", color: "#FF6600", location: "Remote", remote: true, type: "Full Time", salary: "₹10–16 LPA", skills: ["Node.js", "Go", "PostgreSQL"], deadline: "Jul 31, 2026", posted: "4d ago", applicants: 163 },
  { id: 5, title: "UI/UX Design Intern", company: "Meesho", logo: "M", color: "#9333EA", location: "Bangalore", remote: false, type: "Internship", salary: "₹18,000/mo", skills: ["Figma", "Prototyping", "Research"], deadline: "Jul 18, 2026", posted: "1d ago", applicants: 78 },
  { id: 6, title: "DevOps Engineer", company: "CRED", logo: "C", color: "#1E3A5F", location: "Bangalore", remote: false, type: "Full Time", salary: "₹15–22 LPA", skills: ["AWS", "Kubernetes", "CI/CD"], deadline: "Aug 10, 2026", posted: "6d ago", applicants: 52 },
  { id: 7, title: "ML Research Intern", company: "Google", logo: "G", color: "#34A853", location: "Hyderabad", remote: false, type: "Internship", salary: "₹40,000/mo", skills: ["Python", "TensorFlow", "Research"], deadline: "Jul 28, 2026", posted: "1d ago", applicants: 412 },
  { id: 8, title: "iOS Developer", company: "PhonePe", logo: "P", color: "#5F259F", location: "Bangalore", remote: false, type: "Full Time", salary: "₹18–28 LPA", skills: ["Swift", "SwiftUI", "Xcode"], deadline: "Aug 15, 2026", posted: "7d ago", applicants: 67 },
];

const COMPANIES = [
  { name: "Google", industry: "Technology", logo: "G", color: "#34A853", openings: 18 },
  { name: "Microsoft", industry: "Technology", logo: "M", color: "#00A4EF", openings: 24 },
  { name: "Razorpay", industry: "Fintech", logo: "R", color: "#3B82F6", openings: 9 },
  { name: "Swiggy", industry: "Food Tech", logo: "S", color: "#FF6600", openings: 15 },
  { name: "CRED", industry: "Fintech", logo: "C", color: "#1E3A5F", openings: 7 },
  { name: "Zomato", industry: "Food Tech", logo: "Z", color: "#E53935", openings: 11 },
  { name: "Flipkart", industry: "E-commerce", logo: "F", color: "#F59E0B", openings: 20 },
  { name: "Meesho", industry: "E-commerce", logo: "Me", color: "#9333EA", openings: 6 },
];

const MY_APPLICATIONS = [
  { id: 1, job: "Frontend Developer Intern", company: "Razorpay", logo: "R", color: "#3B82F6", appliedDate: "Jun 10, 2026", status: "shortlisted" },
  { id: 2, job: "Product Manager", company: "Zomato", logo: "Z", color: "#E53935", appliedDate: "Jun 5, 2026", status: "under_review" },
  { id: 3, job: "UI/UX Design Intern", company: "Meesho", logo: "M", color: "#9333EA", appliedDate: "Jun 1, 2026", status: "interview_scheduled" },
  { id: 4, job: "Data Analyst", company: "Paytm", logo: "P", color: "#00BAF2", appliedDate: "May 28, 2026", status: "rejected" },
  { id: 5, job: "Backend Developer", company: "Freshworks", logo: "F", color: "#22C55E", appliedDate: "May 20, 2026", status: "selected" },
];

const APPLICANTS = [
  { id: 1, name: "Arjun Sharma", email: "arjun@iit.ac.in", college: "IIT Bombay", job: "Frontend Developer Intern", skills: ["React", "TypeScript"], appliedDate: "Jun 10", status: "shortlisted", cgpa: 9.1 },
  { id: 2, name: "Priya Nair", email: "priya@nit.ac.in", college: "NIT Trichy", job: "Frontend Developer Intern", skills: ["React", "Vue"], appliedDate: "Jun 11", status: "under_review", cgpa: 8.7 },
  { id: 3, name: "Rohan Mehta", email: "rohan@bits.ac.in", college: "BITS Pilani", job: "Backend Developer", skills: ["Node.js", "Python"], appliedDate: "Jun 8", status: "interview_scheduled", cgpa: 9.3 },
  { id: 4, name: "Sneha Rao", email: "sneha@vit.ac.in", college: "VIT Vellore", job: "UI/UX Design Intern", skills: ["Figma", "Adobe XD"], appliedDate: "Jun 14", status: "rejected", cgpa: 8.2 },
  { id: 5, name: "Vikram Singh", email: "vikram@iisc.ac.in", college: "IISc Bangalore", job: "ML Research Intern", skills: ["Python", "TensorFlow"], appliedDate: "Jun 7", status: "selected", cgpa: 9.6 },
];

const ADMIN_STUDENTS = [
  { id: 1, name: "Arjun Sharma", email: "arjun@iit.ac.in", college: "IIT Bombay", applications: 8, joined: "Mar 2026", status: "active" },
  { id: 2, name: "Priya Nair", email: "priya@nit.ac.in", college: "NIT Trichy", applications: 12, joined: "Feb 2026", status: "active" },
  { id: 3, name: "Rohan Mehta", email: "rohan@bits.ac.in", college: "BITS Pilani", applications: 5, joined: "Apr 2026", status: "blocked" },
  { id: 4, name: "Sneha Rao", email: "sneha@vit.ac.in", college: "VIT Vellore", applications: 15, joined: "Jan 2026", status: "active" },
  { id: 5, name: "Vikram Singh", email: "vikram@iisc.ac.in", college: "IISc Bangalore", applications: 3, joined: "May 2026", status: "active" },
];

const ADMIN_RECRUITERS = [
  { id: 1, company: "Razorpay", contact: "hr@razorpay.com", jobs: 9, status: "approved", joined: "Jan 2026" },
  { id: 2, company: "Zomato", contact: "talent@zomato.com", jobs: 11, status: "approved", joined: "Feb 2026" },
  { id: 3, company: "StartupXYZ", contact: "ceo@startupxyz.com", jobs: 2, status: "pending", joined: "Jun 2026" },
  { id: 4, company: "Meesho", contact: "careers@meesho.com", jobs: 6, status: "approved", joined: "Mar 2026" },
  { id: 5, company: "BadActor Inc", contact: "spam@bad.com", jobs: 0, status: "suspended", joined: "Jun 2026" },
];

const TESTIMONIALS = [
  { name: "Ananya Krishnan", role: "SDE Intern at Microsoft", avatar: "AK", text: "InternHub helped me land my dream internship at Microsoft. The application tracking feature saved so much time, and the job recommendations were genuinely spot on.", rating: 5 },
  { name: "Devraj Patel", role: "Product Intern at Razorpay", avatar: "DP", text: "I applied to 30+ opportunities through InternHub and got 8 interview calls. The filters made it super easy to surface only the roles that matched my skills.", rating: 5 },
  { name: "Sanya Gupta", role: "HR Lead at Swiggy", avatar: "SG", text: "As a recruiter, InternHub made it incredibly easy to find quality candidates. We reduced our time-to-hire by 40% using the platform's smart applicant filters.", rating: 5 },
];

const FAQS = [
  { q: "Is InternHub free for students?", a: "Yes, InternHub is completely free for students. Create your profile, upload your resume, and start applying to thousands of opportunities instantly with no hidden costs." },
  { q: "How do I apply to internships?", a: "Browse opportunities using search and filters, click Apply Now on any listing, attach your resume and optional cover letter, and submit. Track your application status from your dashboard in real time." },
  { q: "How are job listings verified?", a: "Every recruiter goes through a verification workflow before their postings go live. Our admin team manually reviews and approves new recruiter accounts to ensure listing quality." },
  { q: "Can I apply to multiple jobs at once?", a: "Absolutely. There is no limit on the number of applications. We recommend customising your cover letter for each role to maximise your chances of getting shortlisted." },
  { q: "How do I know when my application status changes?", a: "You will receive real-time in-app notifications and email updates whenever a recruiter takes action on your application — shortlist, interview schedule, or final decision." },
];

const chartApplications = [
  { month: "Jan", applications: 1200 },
  { month: "Feb", applications: 1800 },
  { month: "Mar", applications: 2400 },
  { month: "Apr", applications: 2100 },
  { month: "May", applications: 3200 },
  { month: "Jun", applications: 3800 },
];

const chartJobTypes = [
  { type: "Internship", count: 4200 },
  { type: "Full Time", count: 6800 },
  { type: "Part Time", count: 1200 },
  { type: "Contract", count: 800 },
  { type: "Remote", count: 2400 },
];

const chartStatus = [
  { name: "Under Review", value: 2840, color: "#F59E0B" },
  { name: "Shortlisted", value: 1420, color: "#5B5BD6" },
  { name: "Selected", value: 680, color: "#10B981" },
  { name: "Rejected", value: 1860, color: "#EF4444" },
  { name: "Interview", value: 530, color: "#8B5CF6" },
];

// ─── Status config ────────────────────────────────────────────────────────────

const STATUS_CFG: Record<string, { label: string; bg: string; text: string }> = {
  applied: { label: "Applied", bg: "bg-blue-50", text: "text-blue-700" },
  under_review: { label: "Under Review", bg: "bg-amber-50", text: "text-amber-700" },
  shortlisted: { label: "Shortlisted", bg: "bg-indigo-50", text: "text-indigo-700" },
  interview_scheduled: { label: "Interview", bg: "bg-purple-50", text: "text-purple-700" },
  selected: { label: "Selected", bg: "bg-green-50", text: "text-green-700" },
  rejected: { label: "Rejected", bg: "bg-red-50", text: "text-red-600" },
  approved: { label: "Approved", bg: "bg-green-50", text: "text-green-700" },
  pending: { label: "Pending", bg: "bg-amber-50", text: "text-amber-700" },
  suspended: { label: "Suspended", bg: "bg-red-50", text: "text-red-600" },
  active: { label: "Active", bg: "bg-green-50", text: "text-green-700" },
  blocked: { label: "Blocked", bg: "bg-red-50", text: "text-red-600" },
  open: { label: "Open", bg: "bg-green-50", text: "text-green-700" },
  closed: { label: "Closed", bg: "bg-gray-100", text: "text-gray-500" },
};

// ─── Utility components ───────────────────────────────────────────────────────

function Badge({ status }: { status: string }) {
  const cfg = STATUS_CFG[status] ?? { label: status, bg: "bg-gray-100", text: "text-gray-500" };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${cfg.bg} ${cfg.text}`}>
      {cfg.label}
    </span>
  );
}

function LogoAvatar({ letter, color, size = "md" }: { letter: string; color: string; size?: "sm" | "md" | "lg" }) {
  const sz = { sm: "w-8 h-8 text-xs", md: "w-10 h-10 text-sm", lg: "w-14 h-14 text-xl" }[size];
  return (
    <div className={`${sz} rounded-xl flex items-center justify-center font-bold text-white flex-shrink-0`} style={{ backgroundColor: color }}>
      {letter[0]}
    </div>
  );
}

function StatCard({ label, value, change, icon: Icon, color }: { label: string; value: string; change?: string; icon: React.ElementType; color: string }) {
  const positive = change?.startsWith("+");
  return (
    <div className="bg-card border border-border rounded-xl p-5">
      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: color + "20" }}>
          <Icon className="w-5 h-5" style={{ color }} />
        </div>
        {change && (
          <span className={`text-xs font-medium flex items-center gap-0.5 ${positive ? "text-green-600" : "text-red-500"}`}>
            {positive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {change}
          </span>
        )}
      </div>
      <p className="text-2xl font-bold text-foreground" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>{value}</p>
      <p className="text-sm text-muted-foreground mt-0.5">{label}</p>
    </div>
  );
}

type Job = typeof JOBS[0];

function JobCard({ job, saved, onSave }: { job: Job; saved?: boolean; onSave?: () => void }) {
  return (
    <div className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-all group">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <LogoAvatar letter={job.logo} color={job.color} />
          <div>
            <h3 className="font-semibold text-foreground text-sm leading-snug">{job.title}</h3>
            <p className="text-muted-foreground text-xs mt-0.5">{job.company}</p>
          </div>
        </div>
        {onSave && (
          <button onClick={onSave} className={`p-1.5 rounded-lg transition-colors ${saved ? "text-accent bg-secondary" : "text-muted-foreground hover:text-foreground"}`}>
            <Bookmark className="w-4 h-4" fill={saved ? "currentColor" : "none"} />
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-1.5 mb-3">
        {job.skills.slice(0, 3).map(s => (
          <span key={s} className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-md">{s}</span>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground mb-4">
        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
        <span className="flex items-center gap-1"><DollarSign className="w-3 h-3" />{job.salary}</span>
        <span className={`px-2 py-0.5 rounded-full font-medium ${job.type === "Internship" ? "bg-blue-50 text-blue-700" : "bg-green-50 text-green-700"}`}>{job.type}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{job.applicants} applicants · {job.posted}</span>
        <button className="text-xs font-medium text-accent hover:text-accent/80 flex items-center gap-1 transition-colors">
          Apply <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}

// ─── Landing page ─────────────────────────────────────────────────────────────

const DISPLAY = { fontFamily: "'Bricolage Grotesque', sans-serif" };

function LandingPage({ onLogin, onRegister }: { onLogin: () => void; onRegister: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg text-foreground" style={DISPLAY}>
                Intern<span className="text-accent">Hub</span>
              </span>
            </div>
            <div className="hidden md:flex items-center gap-7">
              {["Home", "Jobs", "Internships", "Companies", "About"].map(l => (
                <a key={l} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l}</a>
              ))}
            </div>
            <div className="hidden md:flex items-center gap-3">
              <button onClick={onLogin} className="text-sm font-medium text-foreground hover:text-accent transition-colors px-4 py-2">Login</button>
              <button onClick={onRegister} className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">Get Started</button>
            </div>
            <button className="md:hidden p-1" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-white px-4 py-3 space-y-1">
            {["Home", "Jobs", "Internships", "Companies", "About"].map(l => (
              <a key={l} href="#" className="block text-sm text-muted-foreground hover:text-foreground py-2">{l}</a>
            ))}
            <div className="flex gap-2 pt-2">
              <button onClick={onLogin} className="flex-1 text-sm border border-border rounded-lg py-2">Login</button>
              <button onClick={onRegister} className="flex-1 text-sm bg-primary text-white rounded-lg py-2">Get Started</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #2D2B6B 0%, #1a184a 60%, #0f0d30 100%)" }}>
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, rgba(91,91,214,0.4) 0%, transparent 55%), radial-gradient(circle at 10% 80%, rgba(45,43,107,0.6) 0%, transparent 50%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 px-3 py-1.5 rounded-full text-xs mb-6 backdrop-blur-sm border border-white/10">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                Trusted by 50,000+ students across India
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-5" style={DISPLAY}>
                Find Your Dream Internship and Career Opportunity
              </h1>
              <p className="text-white/65 text-lg mb-8 leading-relaxed">
                Connect with top recruiters and build your future. Browse 12,000+ live opportunities from India's leading companies.
              </p>
              <div className="bg-white rounded-xl p-1.5 flex gap-2 shadow-2xl mb-6 max-w-lg">
                <div className="flex-1 flex items-center gap-2 px-3">
                  <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <input type="text" placeholder="Search jobs, companies, skills…" className="flex-1 text-sm bg-transparent outline-none text-foreground placeholder:text-muted-foreground" />
                </div>
                <button className="bg-accent text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors">Search</button>
              </div>
              <div className="flex flex-wrap gap-2 mb-8">
                {["React", "Product Management", "Data Science", "UI/UX", "Backend"].map(t => (
                  <span key={t} className="text-xs text-white/60 bg-white/10 border border-white/10 px-3 py-1 rounded-full cursor-pointer hover:bg-white/20 transition-colors">{t}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors">Explore Jobs</button>
                <button onClick={onRegister} className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-medium border border-white/20 hover:bg-white/20 transition-colors">Post Opportunity</button>
              </div>
              <p className="text-white/35 text-xs mt-4">
                Demo: <button onClick={onLogin} className="underline hover:text-white/60 transition-colors">open login</button> and choose a role to explore dashboards
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=640&h=520&fit=crop&auto=format"
                  alt="Team collaborating in a modern workspace"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                  style={{ backgroundColor: "#1a184a" }}
                />
                <div className="absolute -bottom-5 -left-6 bg-white rounded-xl shadow-xl p-3.5 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">Offer Received!</p>
                    <p className="text-xs text-muted-foreground">Google · SDE Intern</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-3.5">
                  <p className="text-xs text-muted-foreground">New Applications</p>
                  <p className="text-xl font-bold text-foreground" style={DISPLAY}>+248</p>
                  <p className="text-xs text-green-600 flex items-center gap-1"><TrendingUp className="w-3 h-3" /> Today</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "12,400+", label: "Active Opportunities" },
              { value: "50,000+", label: "Registered Students" },
              { value: "3,200+", label: "Partner Companies" },
              { value: "8,600+", label: "Successful Placements" },
            ].map(s => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold text-primary" style={DISPLAY}>{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground" style={DISPLAY}>Featured Opportunities</h2>
              <p className="text-muted-foreground text-sm mt-1">Curated jobs and internships from top companies</p>
            </div>
            <a href="#" className="text-sm text-accent font-medium hover:underline flex items-center gap-1">
              View all <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {JOBS.map(job => <JobCard key={job.id} job={job} />)}
          </div>
        </div>
      </section>

      {/* Top Companies */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-foreground" style={DISPLAY}>Top Hiring Companies</h2>
            <p className="text-muted-foreground text-sm mt-1">Companies that trust InternHub for talent acquisition</p>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
            {COMPANIES.map(co => (
              <div key={co.name} className="bg-card rounded-xl p-4 text-center hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-12 h-12 rounded-xl mx-auto mb-2 flex items-center justify-center font-bold text-white text-lg" style={{ backgroundColor: co.color }}>
                  {co.logo[0]}
                </div>
                <p className="text-xs font-medium text-foreground truncate">{co.name}</p>
                <p className="text-xs text-muted-foreground">{co.openings} openings</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-foreground" style={DISPLAY}>How InternHub Works</h2>
            <p className="text-muted-foreground text-sm mt-1">Get placed in 3 simple steps</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Create Your Profile", desc: "Sign up as a student, complete your profile with skills and education, and upload your resume in under 5 minutes.", icon: User },
              { step: "02", title: "Discover & Apply", desc: "Browse thousands of opportunities with smart filters. Apply with one click using your saved profile and tailored cover letter.", icon: Search },
              { step: "03", title: "Get Hired", desc: "Track all your applications, receive real-time status updates, and land your dream internship or full-time role.", icon: CheckCircle },
            ].map(item => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <div className="text-xs font-mono text-accent mb-2 tracking-widest">{item.step}</div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ background: "linear-gradient(135deg, #2D2B6B 0%, #1a184a 100%)" }} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white" style={DISPLAY}>Success Stories</h2>
            <p className="text-white/55 text-sm mt-1">From students who landed their dream roles</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-white/75 text-sm leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center font-semibold text-white text-sm flex-shrink-0">{t.avatar}</div>
                  <div>
                    <p className="font-medium text-white text-sm">{t.name}</p>
                    <p className="text-white/45 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-foreground" style={DISPLAY}>Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-card border border-border rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-medium text-foreground text-sm pr-4">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-lg" style={DISPLAY}>InternHub</span>
              </div>
              <p className="text-white/55 text-sm leading-relaxed">Connecting talent with opportunity across India.</p>
            </div>
            {[
              { title: "For Students", links: ["Browse Jobs", "Internships", "Career Advice", "Resume Tips"] },
              { title: "For Recruiters", links: ["Post a Job", "Find Talent", "Pricing", "API"] },
              { title: "Company", links: ["About Us", "Blog", "Contact", "Privacy Policy"] },
            ].map(col => (
              <div key={col.title}>
                <h4 className="font-semibold text-sm mb-3">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map(l => <li key={l}><a href="#" className="text-white/55 text-sm hover:text-white transition-colors">{l}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/35 text-xs">© 2026 InternHub. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-white/35 hover:text-white transition-colors"><Globe className="w-4 h-4" /></a>
              <a href="#" className="text-white/35 hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="text-white/35 hover:text-white transition-colors"><Github className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ─── Auth modal ───────────────────────────────────────────────────────────────

type Role = "student" | "recruiter" | "admin";

function AuthModal({ mode, onClose, onSwitch, onSuccess }: {
  mode: "login" | "register";
  onClose: () => void;
  onSwitch: () => void;
  onSuccess: (role: Role) => void;
}) {
  const [role, setRole] = useState<"student" | "recruiter">("student");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-card rounded-2xl shadow-2xl w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-4 right-4 p-1 text-muted-foreground hover:text-foreground transition-colors">
          <X className="w-5 h-5" />
        </button>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Briefcase className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg text-foreground" style={DISPLAY}>InternHub</span>
          </div>
          <h2 className="text-xl font-bold text-foreground mb-1" style={DISPLAY}>
            {mode === "login" ? "Welcome back" : "Create your account"}
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            {mode === "login" ? "Sign in to your account to continue" : "Start finding your dream opportunity today"}
          </p>
          {mode === "register" && (
            <div className="flex rounded-lg border border-border p-1 mb-4">
              {(["student", "recruiter"] as const).map(r => (
                <button
                  key={r}
                  onClick={() => setRole(r)}
                  className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors capitalize ${role === r ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {r}
                </button>
              ))}
            </div>
          )}
          <div className="space-y-3">
            {mode === "register" && (
              <input type="text" placeholder="Full Name" className="w-full px-3 py-2.5 bg-input-background rounded-lg text-sm outline-none focus:ring-2 focus:ring-ring" />
            )}
            <input type="email" placeholder="Email address" className="w-full px-3 py-2.5 bg-input-background rounded-lg text-sm outline-none focus:ring-2 focus:ring-ring" />
            <input type="password" placeholder="Password" className="w-full px-3 py-2.5 bg-input-background rounded-lg text-sm outline-none focus:ring-2 focus:ring-ring" />
            {mode === "register" && (
              <input type="password" placeholder="Confirm Password" className="w-full px-3 py-2.5 bg-input-background rounded-lg text-sm outline-none focus:ring-2 focus:ring-ring" />
            )}
          </div>
          {mode === "login" && (
            <div className="flex items-center justify-between mt-3 mb-1">
              <label className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer">
                <input type="checkbox" className="rounded" /> Remember me
              </label>
              <a href="#" className="text-xs text-accent hover:underline">Forgot password?</a>
            </div>
          )}
          <button
            onClick={() => onSuccess(role)}
            className="w-full bg-primary text-primary-foreground py-2.5 rounded-lg font-medium mt-4 hover:bg-primary/90 transition-colors"
          >
            {mode === "login" ? "Sign In" : "Create Account"}
          </button>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            {mode === "login" ? "Don't have an account? " : "Already have an account? "}
            <button onClick={onSwitch} className="text-accent font-medium hover:underline">
              {mode === "login" ? "Sign up" : "Sign in"}
            </button>
          </p>
          <div className="mt-5 pt-5 border-t border-border">
            <p className="text-xs text-muted-foreground text-center mb-3">Jump straight to a demo dashboard</p>
            <div className="grid grid-cols-3 gap-2">
              {(["student", "recruiter", "admin"] as const).map(r => (
                <button
                  key={r}
                  onClick={() => onSuccess(r)}
                  className="text-xs border border-border rounded-lg py-2 hover:bg-secondary hover:border-accent hover:text-accent transition-colors capitalize font-medium"
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Dashboard shell ──────────────────────────────────────────────────────────

type SidebarItem = { id: string; label: string; icon: React.ElementType };

function DashboardLayout({ children, sidebarItems, user, activePage, onPageChange, onLogout }: {
  children: ReactNode;
  sidebarItems: SidebarItem[];
  user: { name: string; role: string; avatar: string };
  activePage: string;
  onPageChange: (page: string) => void;
  onLogout: () => void;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  const NOTIFS = [
    { id: 1, text: "Your application to Razorpay was shortlisted", time: "2h ago", unread: true },
    { id: 2, text: "Interview scheduled with Meesho for Jun 30", time: "5h ago", unread: true },
    { id: 3, text: "Google has posted a new ML Intern role", time: "1d ago", unread: false },
  ];

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar */}
      <aside className={`${collapsed ? "w-16" : "w-60"} flex-shrink-0 bg-card border-r border-border flex flex-col transition-all duration-200 ease-in-out`}>
        <div className="h-16 flex items-center gap-3 px-4 border-b border-border flex-shrink-0">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
            <Briefcase className="w-4 h-4 text-white" />
          </div>
          {!collapsed && (
            <span className="font-bold text-base text-foreground truncate" style={DISPLAY}>
              Intern<span className="text-accent">Hub</span>
            </span>
          )}
        </div>
        <nav className="flex-1 py-3 overflow-y-auto">
          {sidebarItems.map(item => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                activePage === item.id
                  ? "bg-secondary text-accent font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              } ${collapsed ? "justify-center" : ""}`}
              title={collapsed ? item.label : undefined}
            >
              <item.icon className="w-4 h-4 flex-shrink-0" />
              {!collapsed && <span>{item.label}</span>}
            </button>
          ))}
        </nav>
        <div className="border-t border-border p-3">
          <div className={`flex items-center gap-3 ${collapsed ? "justify-center" : ""}`}>
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
              {user.avatar}
            </div>
            {!collapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-foreground truncate">{user.name}</p>
                <p className="text-xs text-muted-foreground capitalize">{user.role}</p>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-6 flex-shrink-0">
          <button onClick={() => setCollapsed(!collapsed)} className="text-muted-foreground hover:text-foreground transition-colors">
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 relative">
            <button
              onClick={() => setNotifOpen(!notifOpen)}
              className="relative w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent rounded-full" />
            </button>
            {notifOpen && (
              <div className="absolute right-12 top-10 w-80 bg-card border border-border rounded-xl shadow-xl z-50 overflow-hidden">
                <div className="px-4 py-3 border-b border-border flex items-center justify-between">
                  <p className="text-sm font-semibold text-foreground">Notifications</p>
                  <button className="text-xs text-accent">Mark all read</button>
                </div>
                {NOTIFS.map(n => (
                  <div key={n.id} className={`px-4 py-3 border-b border-border last:border-0 hover:bg-muted/50 cursor-pointer ${n.unread ? "bg-secondary/30" : ""}`}>
                    <p className="text-xs text-foreground leading-relaxed">{n.text}</p>
                    <p className="text-xs text-muted-foreground mt-1">{n.time}</p>
                  </div>
                ))}
              </div>
            )}
            <button onClick={onLogout} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg hover:bg-muted transition-colors">
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

// ─── Student dashboard ────────────────────────────────────────────────────────

const STUDENT_NAV: SidebarItem[] = [
  { id: "overview", label: "Dashboard", icon: Home },
  { id: "jobs", label: "Browse Jobs", icon: Briefcase },
  { id: "internships", label: "Internships", icon: GraduationCap },
  { id: "applied", label: "Applications", icon: FileText },
  { id: "saved", label: "Saved Jobs", icon: Bookmark },
  { id: "profile", label: "My Profile", icon: User },
  { id: "resume", label: "Resume", icon: Upload },
  { id: "settings", label: "Settings", icon: Settings },
];

function StudentOverview({ savedCount }: { savedCount: number }) {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-xl font-bold text-foreground" style={DISPLAY}>Good morning, Arjun 👋</h1>
        <p className="text-muted-foreground text-sm mt-1">Here's your activity summary</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard label="Applications" value="12" change="+3" icon={FileText} color="#5B5BD6" />
        <StatCard label="Saved Jobs" value={String(savedCount)} icon={Bookmark} color="#F59E0B" />
        <StatCard label="Profile Views" value="84" change="+12" icon={Eye} color="#10B981" />
        <StatCard label="Shortlisted" value="3" change="+1" icon={UserCheck} color="#EF4444" />
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h2 className="text-sm font-semibold text-foreground mb-4">Recent Applications</h2>
          <div className="space-y-3">
            {MY_APPLICATIONS.slice(0, 4).map(app => (
              <div key={app.id} className="bg-card border border-border rounded-xl px-4 py-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <LogoAvatar letter={app.logo} color={app.color} size="sm" />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{app.job}</p>
                    <p className="text-xs text-muted-foreground">{app.company} · Applied {app.appliedDate}</p>
                  </div>
                </div>
                <Badge status={app.status} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-foreground mb-4">Recommended For You</h2>
          <div className="space-y-3">
            {JOBS.slice(0, 3).map(job => (
              <div key={job.id} className="bg-card border border-border rounded-xl p-3 hover:shadow-sm transition-shadow">
                <div className="flex items-center gap-2 mb-1.5">
                  <LogoAvatar letter={job.logo} color={job.color} size="sm" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-foreground truncate">{job.title}</p>
                    <p className="text-xs text-muted-foreground">{job.company}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{job.salary}</span>
                  <button className="text-xs text-accent font-medium hover:underline">Apply</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function JobsBrowser({ jobs, title, savedJobs, onToggleSave }: { jobs: Job[]; title?: string; savedJobs: number[]; onToggleSave: (id: number) => void }) {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");

  const filtered = jobs.filter(j => {
    if (typeFilter === "internship" && j.type !== "Internship") return false;
    if (typeFilter === "fulltime" && j.type !== "Full Time") return false;
    if (search && !j.title.toLowerCase().includes(search.toLowerCase()) && !j.company.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div>
      <h1 className="text-xl font-bold text-foreground mb-5" style={DISPLAY}>{title ?? "Browse Opportunities"}</h1>
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="flex-1 flex items-center gap-2 bg-card border border-border rounded-lg px-3 py-2">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input type="text" placeholder="Search jobs, companies…" value={search} onChange={e => setSearch(e.target.value)} className="flex-1 text-sm bg-transparent outline-none" />
        </div>
        <div className="flex gap-2">
          {[["all", "All"], ["internship", "Internship"], ["fulltime", "Full Time"]].map(([v, l]) => (
            <button
              key={v}
              onClick={() => setTypeFilter(v)}
              className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${typeFilter === v ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground hover:text-foreground"}`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          <Briefcase className="w-10 h-10 mx-auto mb-3 opacity-20" />
          <p className="text-sm">No jobs found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(job => (
            <JobCard key={job.id} job={job} saved={savedJobs.includes(job.id)} onSave={() => onToggleSave(job.id)} />
          ))}
        </div>
      )}
    </div>
  );
}

function StudentApplications() {
  return (
    <div>
      <h1 className="text-xl font-bold text-foreground mb-6" style={DISPLAY}>My Applications</h1>
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-muted/50 border-b border-border">
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Position</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground hidden sm:table-cell">Company</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground hidden md:table-cell">Applied Date</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {MY_APPLICATIONS.map((app, i) => (
              <tr key={app.id} className={`border-b border-border last:border-0 ${i % 2 !== 0 ? "bg-muted/20" : ""}`}>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <LogoAvatar letter={app.logo} color={app.color} size="sm" />
                    <span className="text-sm font-medium text-foreground">{app.job}</span>
                  </div>
                </td>
                <td className="px-4 py-4 hidden sm:table-cell text-sm text-muted-foreground">{app.company}</td>
                <td className="px-4 py-4 hidden md:table-cell text-sm text-muted-foreground">{app.appliedDate}</td>
                <td className="px-4 py-4"><Badge status={app.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StudentProfile() {
  return (
    <div>
      <h1 className="text-xl font-bold text-foreground mb-6" style={DISPLAY}>My Profile</h1>
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="bg-card border border-border rounded-xl p-6 text-center">
          <div className="relative inline-block mb-4">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&auto=format"
              alt="Arjun Sharma"
              className="w-20 h-20 rounded-full object-cover"
              style={{ backgroundColor: "#EEF0FF" }}
            />
            <button className="absolute bottom-0 right-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center shadow">
              <Edit2 className="w-3 h-3 text-white" />
            </button>
          </div>
          <h2 className="font-semibold text-foreground">Arjun Sharma</h2>
          <p className="text-sm text-muted-foreground mt-0.5">B.Tech CSE · IIT Bombay</p>
          <div className="flex justify-center gap-3 mt-4">
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors"><Linkedin className="w-4 h-4" /></a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors"><Github className="w-4 h-4" /></a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors"><Globe className="w-4 h-4" /></a>
          </div>
          <div className="mt-5 pt-5 border-t border-border">
            <div className="flex justify-between text-xs mb-2">
              <span className="text-muted-foreground">Profile completeness</span>
              <span className="font-medium text-accent">82%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-1.5">
              <div className="bg-accent h-1.5 rounded-full" style={{ width: "82%" }} />
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="text-sm font-semibold text-foreground mb-4">Personal Information</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                ["Full Name", "Arjun Sharma"], ["Email", "arjun@iit.ac.in"],
                ["Phone", "+91 98765 43210"], ["College", "IIT Bombay"],
                ["Degree", "B.Tech"], ["Branch", "Computer Science"],
                ["Year of Study", "3rd Year"], ["CGPA", "9.1"],
              ].map(([label, value]) => (
                <div key={label}>
                  <label className="text-xs font-medium text-muted-foreground">{label}</label>
                  <input type="text" defaultValue={value} className="w-full mt-1 px-3 py-2 bg-input-background rounded-lg text-sm outline-none focus:ring-2 focus:ring-ring" />
                </div>
              ))}
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="text-sm font-semibold text-foreground mb-3">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Node.js", "Python", "MongoDB", "GraphQL"].map(s => (
                <span key={s} className="inline-flex items-center gap-1.5 bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full text-xs font-medium">
                  {s}
                  <button className="text-muted-foreground hover:text-foreground transition-colors"><X className="w-2.5 h-2.5" /></button>
                </span>
              ))}
              <button className="border border-dashed border-border px-2.5 py-1 rounded-full text-xs text-muted-foreground hover:text-foreground hover:border-accent transition-colors">+ Add Skill</button>
            </div>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="text-sm font-semibold text-foreground mb-3">Bio</h3>
            <textarea rows={3} defaultValue="Passionate full-stack developer with expertise in React and Node.js. Looking for exciting internship opportunities to apply my skills in a real-world environment." className="w-full px-3 py-2 bg-input-background rounded-lg text-sm outline-none focus:ring-2 focus:ring-ring resize-none" />
          </div>
          <div className="flex justify-end">
            <button className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResumeSection() {
  const [has, setHas] = useState(true);
  return (
    <div>
      <h1 className="text-xl font-bold text-foreground mb-6" style={DISPLAY}>Resume</h1>
      <div className="max-w-lg">
        {has ? (
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-16 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-red-100">
                <FileText className="w-7 h-7 text-red-500" />
              </div>
              <div>
                <p className="font-medium text-foreground">Arjun_Sharma_Resume.pdf</p>
                <p className="text-xs text-muted-foreground mt-1">Uploaded Jun 15, 2026 · 248 KB</p>
                <p className="text-xs text-green-600 mt-1 flex items-center gap-1"><CheckCircle className="w-3 h-3" /> Verified</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <button className="flex items-center justify-center gap-1.5 border border-border rounded-lg py-2.5 text-sm hover:bg-muted transition-colors"><Eye className="w-4 h-4" /> Preview</button>
              <button className="flex items-center justify-center gap-1.5 border border-border rounded-lg py-2.5 text-sm hover:bg-muted transition-colors"><Download className="w-4 h-4" /> Download</button>
              <button onClick={() => setHas(false)} className="flex items-center justify-center gap-1.5 bg-accent text-white rounded-lg py-2.5 text-sm hover:bg-accent/90 transition-colors"><RefreshCw className="w-4 h-4" /> Replace</button>
            </div>
          </div>
        ) : (
          <div className="border-2 border-dashed border-border rounded-xl p-12 text-center">
            <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-3 opacity-40" />
            <p className="font-medium text-foreground mb-1">Upload your resume</p>
            <p className="text-xs text-muted-foreground mb-5">PDF format, max 5 MB</p>
            <button onClick={() => setHas(true)} className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">Choose File</button>
          </div>
        )}
      </div>
    </div>
  );
}

function StudentDashboard({ onLogout }: { onLogout: () => void }) {
  const [page, setPage] = useState("overview");
  const [saved, setSaved] = useState<number[]>([1, 5]);
  const toggle = (id: number) => setSaved(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id]);

  const content = (() => {
    switch (page) {
      case "overview": return <StudentOverview savedCount={saved.length} />;
      case "jobs": return <JobsBrowser jobs={JOBS} savedJobs={saved} onToggleSave={toggle} />;
      case "internships": return <JobsBrowser jobs={JOBS.filter(j => j.type === "Internship")} title="Internships" savedJobs={saved} onToggleSave={toggle} />;
      case "applied": return <StudentApplications />;
      case "saved": return <JobsBrowser jobs={JOBS.filter(j => saved.includes(j.id))} title="Saved Jobs" savedJobs={saved} onToggleSave={toggle} />;
      case "profile": return <StudentProfile />;
      case "resume": return <ResumeSection />;
      default: return <StudentOverview savedCount={saved.length} />;
    }
  })();

  return (
    <DashboardLayout sidebarItems={STUDENT_NAV} user={{ name: "Arjun Sharma", role: "student", avatar: "AS" }} activePage={page} onPageChange={setPage} onLogout={onLogout}>
      {content}
    </DashboardLayout>
  );
}

// ─── Recruiter dashboard ──────────────────────────────────────────────────────

const RECRUITER_NAV: SidebarItem[] = [
  { id: "overview", label: "Dashboard", icon: Home },
  { id: "company", label: "Company Profile", icon: Building2 },
  { id: "post-job", label: "Post Job", icon: PlusCircle },
  { id: "manage-jobs", label: "Manage Jobs", icon: List },
  { id: "applicants", label: "Applicants", icon: Users },
  { id: "analytics", label: "Analytics", icon: BarChart2 },
  { id: "settings", label: "Settings", icon: Settings },
];

function RecruiterOverview() {
  return (
    <div>
      <h1 className="text-xl font-bold text-foreground mb-6" style={DISPLAY}>Recruiter Dashboard</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard label="Active Jobs" value="9" change="+2" icon={Briefcase} color="#5B5BD6" />
        <StatCard label="Total Applicants" value="342" change="+48" icon={Users} color="#10B981" />
        <StatCard label="Interviews" value="24" change="+6" icon={Calendar} color="#F59E0B" />
        <StatCard label="Hired This Month" value="7" change="+3" icon={UserCheck} color="#EF4444" />
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-xl p-5">
          <h2 className="text-sm font-semibold text-foreground mb-4">Recent Applicants</h2>
          <div className="space-y-3">
            {APPLICANTS.slice(0, 4).map(a => (
              <div key={a.id} className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-xs font-semibold text-accent flex-shrink-0">
                    {a.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{a.name}</p>
                    <p className="text-xs text-muted-foreground">{a.college} · CGPA {a.cgpa}</p>
                  </div>
                </div>
                <Badge status={a.status} />
              </div>
            ))}
          </div>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <h2 className="text-sm font-semibold text-foreground mb-4">Applications (6 months)</h2>
          <ResponsiveContainer width="100%" height={180}>
            <AreaChart data={chartApplications}>
              <defs>
                <linearGradient id="ag1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#5B5BD6" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#5B5BD6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip />
              <Area type="monotone" dataKey="applications" stroke="#5B5BD6" fill="url(#ag1)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function CompanyProfile() {
  return (
    <div>
      <h1 className="text-xl font-bold text-foreground mb-6" style={DISPLAY}>Company Profile</h1>
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="bg-card border border-border rounded-xl p-6 text-center">
          <div className="w-20 h-20 rounded-2xl bg-blue-500 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">R</div>
          <h2 className="font-semibold text-foreground">Razorpay</h2>
          <p className="text-sm text-muted-foreground mt-0.5">Fintech · Bangalore, India</p>
          <div className="flex justify-center gap-3 mt-3">
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors"><Globe className="w-4 h-4" /></a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors"><Linkedin className="w-4 h-4" /></a>
          </div>
          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground">9 active jobs · 342 applicants</p>
          </div>
        </div>
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="text-sm font-semibold text-foreground mb-4">Company Information</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                ["Company Name", "Razorpay Software Private Limited"],
                ["Website", "razorpay.com"],
                ["Industry", "Fintech / Payments"],
                ["Company Size", "1,000–5,000 employees"],
                ["Headquarters", "Bangalore, Karnataka"],
                ["Founded", "2014"],
              ].map(([label, value]) => (
                <div key={label}>
                  <label className="text-xs font-medium text-muted-foreground">{label}</label>
                  <input type="text" defaultValue={value} className="w-full mt-1 px-3 py-2 bg-input-background rounded-lg text-sm outline-none focus:ring-2 focus:ring-ring" />
                </div>
              ))}
            </div>
            <div className="mt-3">
              <label className="text-xs font-medium text-muted-foreground">Description</label>
              <textarea rows={3} defaultValue="Razorpay is India's leading payments solution. We process billions of transactions every month for hundreds of thousands of businesses across India." className="w-full mt-1 px-3 py-2 bg-input-background rounded-lg text-sm outline-none focus:ring-2 focus:ring-ring resize-none" />
            </div>
            <div className="flex justify-end mt-4">
              <button className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PostJob({ onPost }: { onPost: () => void }) {
  return (
    <div>
      <h1 className="text-xl font-bold text-foreground mb-6" style={DISPLAY}>Post a Job</h1>
      <div className="bg-card border border-border rounded-xl p-6 max-w-2xl">
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { label: "Job Title *", placeholder: "e.g. Frontend Developer Intern", type: "text" },
              { label: "Location *", placeholder: "City, Country or Remote", type: "text" },
              { label: "Salary Range", placeholder: "e.g. ₹25,000/mo or ₹8–12 LPA", type: "text" },
              { label: "No. of Openings", placeholder: "1", type: "number" },
              { label: "Application Deadline", placeholder: "", type: "date" },
              { label: "Required Skills", placeholder: "React, TypeScript (comma-separated)", type: "text" },
            ].map(f => (
              <div key={f.label}>
                <label className="text-xs font-medium text-muted-foreground">{f.label}</label>
                <input type={f.type} placeholder={f.placeholder} className="w-full mt-1 px-3 py-2.5 bg-input-background rounded-lg text-sm outline-none focus:ring-2 focus:ring-ring" />
              </div>
            ))}
            <div>
              <label className="text-xs font-medium text-muted-foreground">Job Type *</label>
              <select className="w-full mt-1 px-3 py-2.5 bg-input-background rounded-lg text-sm outline-none focus:ring-2 focus:ring-ring">
                <option>Internship</option>
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Contract</option>
                <option>Remote</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground">Experience Level</label>
              <select className="w-full mt-1 px-3 py-2.5 bg-input-background rounded-lg text-sm outline-none focus:ring-2 focus:ring-ring">
                <option>Entry Level / Fresher</option>
                <option>0–1 years</option>
                <option>1–3 years</option>
                <option>3–5 years</option>
              </select>
            </div>
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground">Job Description *</label>
            <textarea rows={4} placeholder="Describe the role, its responsibilities, and what you are looking for in a candidate…" className="w-full mt-1 px-3 py-2.5 bg-input-background rounded-lg text-sm outline-none focus:ring-2 focus:ring-ring resize-none" />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground">Requirements</label>
            <textarea rows={3} placeholder="List the qualifications, tools, and prerequisites…" className="w-full mt-1 px-3 py-2.5 bg-input-background rounded-lg text-sm outline-none focus:ring-2 focus:ring-ring resize-none" />
          </div>
          <div className="flex gap-3 pt-2">
            <button className="border border-border text-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-muted transition-colors">Save Draft</button>
            <button onClick={onPost} className="bg-primary text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">Post Job</button>
          </div>
        </div>
      </div>
    </div>
  );
}

type ManagedJob = Job & { status: "open" | "closed" };

function ManageJobs({ jobs, onToggle }: { jobs: ManagedJob[]; onToggle: (id: number) => void }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold text-foreground" style={DISPLAY}>Manage Jobs</h1>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors">
          <PlusCircle className="w-4 h-4" /> Post New
        </button>
      </div>
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-muted/50 border-b border-border">
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Job Title</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground hidden sm:table-cell">Type</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground hidden md:table-cell">Applicants</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Status</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, i) => (
              <tr key={job.id} className={`border-b border-border last:border-0 ${i % 2 !== 0 ? "bg-muted/20" : ""}`}>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <LogoAvatar letter={job.logo} color={job.color} size="sm" />
                    <span className="text-sm font-medium text-foreground">{job.title}</span>
                  </div>
                </td>
                <td className="px-4 py-4 hidden sm:table-cell text-sm text-muted-foreground">{job.type}</td>
                <td className="px-4 py-4 hidden md:table-cell text-sm text-muted-foreground">{job.applicants}</td>
                <td className="px-4 py-4"><Badge status={job.status} /></td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-1">
                    <button className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors" title="View"><Eye className="w-3.5 h-3.5" /></button>
                    <button className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors" title="Edit"><Edit2 className="w-3.5 h-3.5" /></button>
                    <button onClick={() => onToggle(job.id)} className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors" title={job.status === "open" ? "Close" : "Reopen"}>
                      {job.status === "open" ? <XCircle className="w-3.5 h-3.5" /> : <CheckCircle className="w-3.5 h-3.5" />}
                    </button>
                    <button className="p-1.5 rounded-lg text-muted-foreground hover:text-red-500 hover:bg-red-50 transition-colors" title="Delete"><Trash2 className="w-3.5 h-3.5" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ApplicantsView() {
  const [statusFilter, setStatusFilter] = useState("all");
  const filtered = statusFilter === "all" ? APPLICANTS : APPLICANTS.filter(a => a.status === statusFilter);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <h1 className="text-xl font-bold text-foreground" style={DISPLAY}>Applicants</h1>
        <div className="flex flex-wrap gap-2">
          {[["all", "All"], ["under_review", "Under Review"], ["shortlisted", "Shortlisted"], ["interview_scheduled", "Interview"]].map(([v, l]) => (
            <button
              key={v}
              onClick={() => setStatusFilter(v)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${statusFilter === v ? "bg-primary text-primary-foreground" : "bg-card border border-border text-muted-foreground hover:text-foreground"}`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-3">
        {filtered.map(a => (
          <div key={a.id} className="bg-card border border-border rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-semibold text-accent text-sm flex-shrink-0">
                {a.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div className="min-w-0">
                <p className="font-medium text-foreground text-sm">{a.name}</p>
                <p className="text-xs text-muted-foreground">{a.email} · {a.college} · CGPA {a.cgpa}</p>
                <div className="flex gap-1.5 mt-1.5">
                  {a.skills.map(s => <span key={s} className="text-xs bg-secondary text-secondary-foreground px-1.5 py-0.5 rounded">{s}</span>)}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:flex-col sm:items-end shrink-0">
              <Badge status={a.status} />
              <div className="flex gap-1.5">
                <button className="text-xs border border-border rounded-lg px-2.5 py-1.5 hover:bg-muted transition-colors">Shortlist</button>
                <button className="text-xs border border-green-200 bg-green-50 rounded-lg px-2.5 py-1.5 text-green-700 hover:bg-green-100 transition-colors">Accept</button>
                <button className="text-xs border border-red-200 bg-red-50 rounded-lg px-2.5 py-1.5 text-red-600 hover:bg-red-100 transition-colors">Reject</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RecruiterAnalytics() {
  return (
    <div>
      <h1 className="text-xl font-bold text-foreground mb-6" style={DISPLAY}>Analytics</h1>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-xl p-5">
          <h2 className="text-sm font-semibold text-foreground mb-4">Applications Over Time</h2>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={chartApplications}>
              <defs>
                <linearGradient id="ag2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#5B5BD6" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#5B5BD6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip />
              <Area type="monotone" dataKey="applications" stroke="#5B5BD6" fill="url(#ag2)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <h2 className="text-sm font-semibold text-foreground mb-4">Application Status</h2>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={chartStatus} cx="50%" cy="50%" innerRadius={55} outerRadius={85} paddingAngle={3} dataKey="value">
                {chartStatus.map((entry, i) => <Cell key={i} fill={entry.color} />)}
              </Pie>
              <Tooltip />
              <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function RecruiterDashboard({ onLogout }: { onLogout: () => void }) {
  const [page, setPage] = useState("overview");
  const [jobs, setJobs] = useState<ManagedJob[]>(JOBS.slice(0, 4).map(j => ({ ...j, status: "open" })));

  const content = (() => {
    switch (page) {
      case "overview": return <RecruiterOverview />;
      case "company": return <CompanyProfile />;
      case "post-job": return <PostJob onPost={() => setPage("manage-jobs")} />;
      case "manage-jobs": return <ManageJobs jobs={jobs} onToggle={id => setJobs(jobs.map(j => j.id === id ? { ...j, status: j.status === "open" ? "closed" : "open" } : j))} />;
      case "applicants": return <ApplicantsView />;
      case "analytics": return <RecruiterAnalytics />;
      default: return <RecruiterOverview />;
    }
  })();

  return (
    <DashboardLayout sidebarItems={RECRUITER_NAV} user={{ name: "Hiring @ Razorpay", role: "recruiter", avatar: "R" }} activePage={page} onPageChange={setPage} onLogout={onLogout}>
      {content}
    </DashboardLayout>
  );
}

// ─── Admin dashboard ──────────────────────────────────────────────────────────

const ADMIN_NAV: SidebarItem[] = [
  { id: "overview", label: "Dashboard", icon: Home },
  { id: "students", label: "Students", icon: GraduationCap },
  { id: "recruiters", label: "Recruiters", icon: Building2 },
  { id: "jobs", label: "Jobs", icon: Briefcase },
  { id: "applications", label: "Applications", icon: FileText },
  { id: "analytics", label: "Analytics", icon: BarChart2 },
  { id: "settings", label: "Settings", icon: Settings },
];

function AdminOverview() {
  return (
    <div>
      <h1 className="text-xl font-bold text-foreground mb-6" style={DISPLAY}>Platform Overview</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
        <StatCard label="Total Users" value="53,284" change="+842" icon={Users} color="#5B5BD6" />
        <StatCard label="Students" value="48,120" change="+720" icon={GraduationCap} color="#3B82F6" />
        <StatCard label="Recruiters" value="3,200" change="+24" icon={Building2} color="#10B981" />
        <StatCard label="Active Jobs" value="12,408" change="+182" icon={Briefcase} color="#F59E0B" />
        <StatCard label="Applications" value="8,640" change="+520" icon={FileText} color="#8B5CF6" />
        <StatCard label="Placements" value="2,184" change="+64" icon={UserCheck} color="#EF4444" />
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-xl p-5">
          <h2 className="text-sm font-semibold text-foreground mb-4">Platform Activity (6 months)</h2>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={chartApplications}>
              <defs>
                <linearGradient id="ag3" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#5B5BD6" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#5B5BD6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip />
              <Area type="monotone" dataKey="applications" stroke="#5B5BD6" fill="url(#ag3)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <h2 className="text-sm font-semibold text-foreground mb-4">Jobs by Type</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={chartJobTypes}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
              <XAxis dataKey="type" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip />
              <Bar dataKey="count" fill="#5B5BD6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function AdminStudents() {
  const [search, setSearch] = useState("");
  const filtered = ADMIN_STUDENTS.filter(s => !search || s.name.toLowerCase().includes(search.toLowerCase()) || s.email.includes(search));
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <h1 className="text-xl font-bold text-foreground" style={DISPLAY}>Students</h1>
        <div className="flex items-center gap-2 bg-card border border-border rounded-lg px-3 py-2">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input type="text" placeholder="Search students…" value={search} onChange={e => setSearch(e.target.value)} className="text-sm bg-transparent outline-none w-48" />
        </div>
      </div>
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-muted/50 border-b border-border">
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Student</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground hidden md:table-cell">College</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground hidden sm:table-cell">Applications</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Status</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((s, i) => (
              <tr key={s.id} className={`border-b border-border last:border-0 ${i % 2 !== 0 ? "bg-muted/20" : ""}`}>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-semibold text-accent flex-shrink-0">
                      {s.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{s.name}</p>
                      <p className="text-xs text-muted-foreground">{s.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 hidden md:table-cell text-sm text-muted-foreground">{s.college}</td>
                <td className="px-4 py-4 hidden sm:table-cell text-sm text-muted-foreground">{s.applications}</td>
                <td className="px-4 py-4"><Badge status={s.status} /></td>
                <td className="px-4 py-4">
                  <div className="flex gap-1">
                    <button className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"><Eye className="w-3.5 h-3.5" /></button>
                    <button className="p-1.5 rounded-lg text-muted-foreground hover:text-amber-500 hover:bg-amber-50 transition-colors"><Shield className="w-3.5 h-3.5" /></button>
                    <button className="p-1.5 rounded-lg text-muted-foreground hover:text-red-500 hover:bg-red-50 transition-colors"><Trash2 className="w-3.5 h-3.5" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AdminRecruiters() {
  const pending = ADMIN_RECRUITERS.filter(r => r.status === "pending").length;
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <h1 className="text-xl font-bold text-foreground" style={DISPLAY}>Recruiters</h1>
        {pending > 0 && (
          <span className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-1 rounded-full font-medium">
            {pending} pending approval
          </span>
        )}
      </div>
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-muted/50 border-b border-border">
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Company</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground hidden sm:table-cell">Contact</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground hidden md:table-cell">Jobs Posted</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Status</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {ADMIN_RECRUITERS.map((r, i) => (
              <tr key={r.id} className={`border-b border-border last:border-0 ${i % 2 !== 0 ? "bg-muted/20" : ""}`}>
                <td className="px-4 py-4">
                  <p className="text-sm font-medium text-foreground">{r.company}</p>
                  <p className="text-xs text-muted-foreground">Joined {r.joined}</p>
                </td>
                <td className="px-4 py-4 hidden sm:table-cell text-sm text-muted-foreground">{r.contact}</td>
                <td className="px-4 py-4 hidden md:table-cell text-sm text-muted-foreground">{r.jobs}</td>
                <td className="px-4 py-4"><Badge status={r.status} /></td>
                <td className="px-4 py-4">
                  <div className="flex gap-1.5 items-center">
                    {r.status === "pending" && (
                      <button className="text-xs bg-green-50 text-green-700 border border-green-200 rounded-lg px-2.5 py-1.5 hover:bg-green-100 transition-colors">Approve</button>
                    )}
                    <button className="p-1.5 rounded-lg text-muted-foreground hover:text-amber-500 hover:bg-amber-50 transition-colors"><Shield className="w-3.5 h-3.5" /></button>
                    <button className="p-1.5 rounded-lg text-muted-foreground hover:text-red-500 hover:bg-red-50 transition-colors"><Trash2 className="w-3.5 h-3.5" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AdminJobs() {
  return (
    <div>
      <h1 className="text-xl font-bold text-foreground mb-6" style={DISPLAY}>All Jobs</h1>
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-muted/50 border-b border-border">
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Job</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground hidden sm:table-cell">Company</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground hidden md:table-cell">Type</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground hidden md:table-cell">Applicants</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {JOBS.map((j, i) => (
              <tr key={j.id} className={`border-b border-border last:border-0 ${i % 2 !== 0 ? "bg-muted/20" : ""}`}>
                <td className="px-4 py-4">
                  <p className="text-sm font-medium text-foreground">{j.title}</p>
                  <p className="text-xs text-muted-foreground">{j.location}</p>
                </td>
                <td className="px-4 py-4 hidden sm:table-cell">
                  <div className="flex items-center gap-2">
                    <LogoAvatar letter={j.logo} color={j.color} size="sm" />
                    <span className="text-sm text-muted-foreground">{j.company}</span>
                  </div>
                </td>
                <td className="px-4 py-4 hidden md:table-cell text-sm text-muted-foreground">{j.type}</td>
                <td className="px-4 py-4 hidden md:table-cell text-sm text-muted-foreground">{j.applicants}</td>
                <td className="px-4 py-4">
                  <div className="flex gap-1">
                    <button className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"><Eye className="w-3.5 h-3.5" /></button>
                    <button className="p-1.5 rounded-lg text-muted-foreground hover:text-red-500 hover:bg-red-50 transition-colors"><Trash2 className="w-3.5 h-3.5" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AdminAnalytics() {
  return (
    <div>
      <h1 className="text-xl font-bold text-foreground mb-6" style={DISPLAY}>Platform Analytics</h1>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-xl p-5">
          <h2 className="text-sm font-semibold text-foreground mb-4">Monthly Applications</h2>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={chartApplications}>
              <defs>
                <linearGradient id="ag4" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#5B5BD6" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#5B5BD6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
              <XAxis dataKey="month" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip />
              <Area type="monotone" dataKey="applications" stroke="#5B5BD6" fill="url(#ag4)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <h2 className="text-sm font-semibold text-foreground mb-4">Jobs by Category</h2>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={chartJobTypes}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
              <XAxis dataKey="type" tick={{ fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
              <Tooltip />
              <Bar dataKey="count" fill="#5B5BD6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-card border border-border rounded-xl p-5 lg:col-span-2">
          <h2 className="text-sm font-semibold text-foreground mb-5">Application Status Distribution</h2>
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <div className="shrink-0" style={{ width: 200, height: 200 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={chartStatus} cx="50%" cy="50%" innerRadius={55} outerRadius={85} paddingAngle={3} dataKey="value">
                    {chartStatus.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex-1 grid grid-cols-1 gap-3 w-full">
              {chartStatus.map(s => (
                <div key={s.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: s.color }} />
                    <span className="text-sm text-foreground">{s.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-24 bg-muted rounded-full h-1.5 hidden sm:block">
                      <div className="h-1.5 rounded-full" style={{ backgroundColor: s.color, width: `${Math.round(s.value / 86)}%` }} />
                    </div>
                    <span className="text-sm font-medium text-foreground w-14 text-right">{s.value.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminDashboard({ onLogout }: { onLogout: () => void }) {
  const [page, setPage] = useState("overview");

  const content = (() => {
    switch (page) {
      case "overview": return <AdminOverview />;
      case "students": return <AdminStudents />;
      case "recruiters": return <AdminRecruiters />;
      case "jobs": return <AdminJobs />;
      case "applications": return <StudentApplications />;
      case "analytics": return <AdminAnalytics />;
      default: return <AdminOverview />;
    }
  })();

  return (
    <DashboardLayout sidebarItems={ADMIN_NAV} user={{ name: "Super Admin", role: "admin", avatar: "SA" }} activePage={page} onPageChange={setPage} onLogout={onLogout}>
      {content}
    </DashboardLayout>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

type View = "landing" | "student" | "recruiter" | "admin";

export default function App() {
  const [view, setView] = useState<View>("landing");
  const [authMode, setAuthMode] = useState<"login" | "register" | null>(null);

  return (
    <>
      {view === "landing" && (
        <LandingPage onLogin={() => setAuthMode("login")} onRegister={() => setAuthMode("register")} />
      )}
      {view === "student" && <StudentDashboard onLogout={() => setView("landing")} />}
      {view === "recruiter" && <RecruiterDashboard onLogout={() => setView("landing")} />}
      {view === "admin" && <AdminDashboard onLogout={() => setView("landing")} />}
      {authMode && (
        <AuthModal
          mode={authMode}
          onClose={() => setAuthMode(null)}
          onSwitch={() => setAuthMode(authMode === "login" ? "register" : "login")}
          onSuccess={role => {
            setAuthMode(null);
            setView(role);
          }}
        />
      )}
    </>
  );
}
