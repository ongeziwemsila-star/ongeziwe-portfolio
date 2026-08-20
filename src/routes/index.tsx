import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BrainCircuit,
  Briefcase,
  Database,
  ExternalLink,
  GraduationCap,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Target,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Section, Pill } from "@/components/portfolio/Section";
import { SiteNav } from "@/components/portfolio/SiteNav";

const TITLE = "Ongeziwe Msila — Entry-Level IT Support & Data Administration Portfolio";
const DESCRIPTION =
  "Portfolio of Ongeziwe Msila: NQF Level 5 IT System Support, administrative assistant experience and four years of customer support, seeking IT support, administration, data and back-office roles."

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Ongeziwe Msila",
          jobTitle: "Entry-Level IT Support | Administrative Support | Data & Back-Office Operations",
          description: DESCRIPTION,
        }),
      },
    ],
  }),
  component: Portfolio,
});

const technicalSkills = [
  { name: "Microsoft Word", note: "Documents, formatting, reports" },
  { name: "Microsoft Excel", note: "Spreadsheets, data capture, tracking" },
  { name: "Microsoft Office", note: "Day-to-day office productivity" },
  { name: "Google Sheets", note: "Shared records and collaboration" },
  { name: "Zendesk", note: "Ticketing and query management" },
  { name: "Sabre", note: "Booking and reservation system" },
  { name: "React 360", note: "Support platform navigation" },
  { name: "Backend systems", note: "Internal system look-ups and updates" },
  { name: "Data entry", note: "Accurate capturing of information" },
  { name: "Data accuracy", note: "Checking and verifying records" },
  { name: "Record management", note: "Filing and organising information" },
  { name: "Basic IT support", note: "User and device support tasks" },
  { name: "Troubleshooting", note: "Diagnosing and resolving issues" },
  { name: "Quality assurance", note: "Following quality requirements" },
  { name: "AI tools", note: "Practical use of AI assistants" },
  { name: "Business systems", note: "Process-driven system workflows" },
];

const professionalSkills = [
  "Attention to detail",
  "Problem-solving",
  "Communication",
  "Organisation",
  "Time management",
  "Confidentiality",
  "Adaptability",
  "Teamwork",
  "Quality focus",
  "Ability to learn new systems quickly",
];

const careerInterests = [
  "IT Support",
  "Technical Support",
  "Junior IT Administrator",
  "Administrative Assistant",
  "Data Administrator",
  "Data Entry",
  "Back-Office Operations",
  "QA Support",
  "Reports Administration",
  "CRM Administration",
];

const education = [
  {
    title: "Matric",
    year: "Completed 2018",
    detail: "National Senior Certificate.",
  },
  {
    title: "AVA Work Readiness Programme",
    year: "Completed 2019",
    detail: "Workplace readiness, professional conduct and communication in a work environment.",
  },
  {
    title: "Afrika Tikkun Programme",
    year: "Completed 2021",
    detail: "Skills development and career preparation programme.",
  },
  {
    title: "NQF Level 5 — IT System Support Learnership",
    year: "12-month learnership",
    detail:
      "Built my understanding of IT systems, hardware and software support, troubleshooting methods, technical support processes and how business technology supports daily operations.",
  },
];

const certifications = [
  {
    title: "Discover the art of prompting",
    issuer: "Google AI Essentials",
    detail: "Learned how to write clear, specific prompts to get useful, accurate responses from AI tools.",
  },
  {
    title: "Google AI Essentials",
    issuer: "Google",
    detail: "Covered core AI concepts, practical workplace applications and responsible AI use.",
  },
  {
    title: "Introduction to AI",
    issuer: "Google",
    detail: "Built a solid foundation in artificial intelligence, machine learning basics and real-world use cases.",
  },
  {
    title: "Maximize productivity with AI tools",
    issuer: "Google",
    detail: "Explored how AI assistants can streamline routine tasks, drafting, research and daily workflows.",
  },
  {
    title: "Stay ahead of the AI curve",
    issuer: "Google",
    detail: "Developed awareness of emerging AI trends and how to keep skills current in a changing workplace.",
  },
  {
    title: "Use AI responsibly",
    issuer: "Google",
    detail: "Learned about fairness, accuracy, privacy and transparency when using AI in professional settings.",
  },
];

const experience = [
  {
    role: "Administrative Assistant / Internship",
    company: "Melbro Holdings",
    points: [
      "Administrative support for daily office activities",
      "Data entry and record management",
      "Handling and organising information",
      "Microsoft Office and Excel for documents and spreadsheets",
      "Maintaining accuracy and confidentiality of records",
    ],
    transferable:
      "Directly transferable to administrative assistant, data entry and back-office administration roles.",
  },
  {
    role: "Customer Support / Call Centre",
    company: "Capita",
    points: [
      "Customer support and problem-solving",
      "Working with customer information",
      "Using computer systems and business applications",
      "Following processes and procedures",
      "Handling queries accurately",
      "Developing communication, time management and problem-solving skills",
    ],
    transferable:
      "Transferable to IT service desk and support roles that require process discipline and accurate handling of information.",
  },
  {
    role: "Customer Support Operations",
    company: "IGT Solutions",
    points: [
      "Customer support and operational processes",
      "Email and system-based support",
      "Using backend systems",
      "Working with Zendesk and other business tools",
      "Managing customer information accurately",
      "Following company procedures and quality requirements",
      "Developing troubleshooting, data accuracy and system navigation skills",
    ],
    transferable:
      "Transferable to technical support, QA support, CRM administration and data administration roles.",
  },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        {/* HERO */}
        <section id="hero" className="relative overflow-hidden bg-gradient-soft">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
            <div className="animate-rise max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card px-3 py-1.5 text-xs font-medium text-primary shadow-card">
                <Sparkles className="size-3.5" /> Open to entry-level IT, admin & data roles
              </span>
              <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-6xl">
                Ongeziwe Msila
              </h1>
              <p className="mt-4 text-lg font-medium text-gradient-brand sm:text-xl">
                Entry-Level IT Support | Administrative Support | Data &amp; Back-Office Operations
              </p>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                I have experience in customer service, administration, data handling, business
                systems and technical support. I work carefully with information, follow processes
                accurately and enjoy solving problems with the help of technology. I am interested in
                growing my career in IT, administration, data and back-office roles.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild variant="hero" size="xl">
                  <a href="#experience">
                    View My Experience <ArrowRight />
                  </a>
                </Button>
                <Button asChild variant="heroOutline" size="xl">
                  <a href="#projects">View Projects</a>
                </Button>
                <Button asChild variant="secondary" size="xl">
                  <a href="#contact">Contact Me</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <Section
          id="about"
          eyebrow="About me"
          title="A detail-focused professional building a career in IT and data administration"
        >
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-7 shadow-card lg:col-span-2">
              <p className="text-base leading-relaxed text-muted-foreground">
                I hold an <strong className="text-foreground">NQF Level 5 qualification in IT
                System Support</strong> and have worked as an{" "}
                <strong className="text-foreground">Administrative Assistant</strong>, alongside
                approximately <strong className="text-foreground">four years of call centre and
                customer support experience</strong>. In these roles I worked daily with customer
                information, backend systems and business software, capturing and updating records
                while keeping information accurate and confidential.
              </p>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                My toolset includes Microsoft Office, Excel and Word, Google Sheets, Zendesk, Sabre
                and React 360. I bring strong attention to detail, data accuracy, confidentiality,
                communication, problem-solving and quality assurance skills, and I am now focused on
                IT support, administration, data administration, back-office operations and other
                non-customer-facing roles.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                { icon: GraduationCap, label: "NQF Level 5", note: "IT System Support" },
                { icon: Briefcase, label: "~4 years", note: "Customer & support experience" },
                { icon: Database, label: "Data & systems", note: "Entry, accuracy, records" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-card"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                    <item.icon className="size-5" />
                  </span>
                  <div>
                    <p className="font-semibold">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* EDUCATION */}
        <Section
          id="education"
          eyebrow="Education & training"
          title="Qualifications and development programmes"
          tinted
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {education.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-card transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <BadgeCheck className="size-5 text-primary" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {item.year}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* CERTIFICATIONS */}
        <Section
          id="certifications"
          eyebrow="Certifications"
          title="Google AI Essentials and related credentials"
          intro="Completed a focused set of Google AI courses that strengthened my practical understanding of AI tools, responsible use and productivity improvement."
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-card transition-transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <Award className="size-5 text-primary" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {item.issuer}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-semibold leading-snug">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section
          id="experience"
          eyebrow="Work experience"
          title="Experience with transferable IT, admin and data skills"
          intro="Each role below strengthened the skills that IT support, administration, data and back-office teams rely on: accuracy, system navigation, process discipline and confidentiality."
        >
          <ol className="relative space-y-8 border-l border-border pl-6 sm:pl-9">
            {experience.map((job) => (
              <li key={job.company} className="relative">
                <span className="absolute -left-[31px] top-2 size-3.5 rounded-full bg-gradient-brand sm:-left-[43px]" />
                <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                  <h3 className="text-lg font-semibold">{job.role}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{job.company}</p>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-pink" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 rounded-xl bg-secondary p-4 text-sm text-secondary-foreground">
                    <strong>Transferable value: </strong>
                    {job.transferable}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* TECHNICAL SKILLS */}
        <Section
          id="skills"
          eyebrow="Technical skills"
          title="Systems, tools and technical abilities"
          tinted
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {technicalSkills.map((skill) => (
              <div
                key={skill.name}
                className="rounded-xl border border-border bg-card p-5 shadow-card transition-transform hover:-translate-y-1"
              >
                <p className="font-semibold">{skill.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{skill.note}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* PROFESSIONAL SKILLS */}
        <Section id="professional-skills" eyebrow="Professional skills" title="How I work">
          <div className="flex flex-wrap gap-3">
            {professionalSkills.map((s) => (
              <Pill key={s}>{s}</Pill>
            ))}
          </div>
        </Section>

        {/* PROJECTS */}
        <Section
          id="projects"
          eyebrow="Projects"
          title="Practical work I have built"
          intro="Hands-on projects where I applied design, structure and AI tools to solve a real problem."
          tinted
        >
          <article className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
            <div className="bg-gradient-brand px-7 py-8 text-primary-foreground">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] opacity-90">
                Built on Lovable
              </p>
              <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">AI Study Guide Website</h3>
            </div>
            <div className="p-7">
              <p className="text-base leading-relaxed text-muted-foreground">
                Designed and developed a responsive AI Study Guide website using Lovable. The website
                includes a professional dashboard layout, sidebar navigation, responsive mobile and
                desktop design, study input and AI response sections, options for generating study
                assistance, and a Responsible AI disclaimer.
              </p>

              <h4 className="mt-8 text-sm font-semibold uppercase tracking-wider text-primary">
                Key features
              </h4>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "Dashboard layout",
                  "Sidebar navigation",
                  "Responsive design",
                  "Study question and topic input",
                  "AI-generated response section",
                  "Professional UI/UX",
                  "Pink and purple visual design",
                  "Responsible AI disclaimer",
                  "Student-focused user experience",
                ].map((f) => (
                  <div
                    key={f}
                    className="rounded-lg border border-border bg-background px-4 py-3 text-sm"
                  >
                    {f}
                  </div>
                ))}
              </div>

              <h4 className="mt-10 text-sm font-semibold uppercase tracking-wider text-primary">
                Project highlights
              </h4>
              <div className="mt-4 grid gap-5 lg:grid-cols-3">
                <div className="rounded-2xl bg-secondary p-5">
                  <p className="font-semibold text-secondary-foreground">The problem it solves</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Students often struggle to organise study material and know where to start. The
                    site gives them one simple place to enter a topic or question and receive
                    structured study assistance.
                  </p>
                </div>
                <div className="rounded-2xl bg-secondary p-5">
                  <p className="font-semibold text-secondary-foreground">What it includes</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    A dashboard layout with sidebar navigation, study input and AI response sections,
                    options for generating study assistance, and a Responsible AI disclaimer.
                  </p>
                </div>
                <div className="rounded-2xl bg-secondary p-5">
                  <p className="font-semibold text-secondary-foreground">Skills demonstrated</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Planning and structuring a digital tool, responsive layout design, UI/UX
                    thinking, practical use of AI tools, and attention to detail and responsible
                    technology use.
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="hero">
                  <a href="#" aria-label="View the AI Study Guide project (link to be added)">
                    View Project <ExternalLink />
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="#">View Source / Details</a>
                </Button>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Placeholder links — update these with your live project and source URLs.
              </p>
            </div>
          </article>

          <article className="mt-6 rounded-3xl border border-dashed border-primary/30 bg-card/60 p-8 text-center">
            <h3 className="text-xl font-semibold">More Projects Coming Soon</h3>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
              This space is reserved for upcoming IT support, administration, data analysis and AI
              projects as I continue building my portfolio.
            </p>
          </article>
        </Section>

        {/* AI LEARNING */}
        <Section
          id="ai-learning"
          eyebrow="AI & digital learning"
          title="Continuous professional development"
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <BrainCircuit className="size-6 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">Learning about AI in practice</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                I have completed a short AI course and continue learning about AI tools and how they
                can be used practically — for drafting and checking documents, organising
                information, speeding up routine admin tasks and supporting problem-solving.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <Target className="size-6 text-pink" />
              <h3 className="mt-4 text-lg font-semibold">Willing to learn new technology</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                I enjoy learning new systems and tools, and I keep developing my digital skills so I
                can add value quickly in IT, administration and data-focused environments.
              </p>
            </div>
          </div>
        </Section>

        {/* CAREER INTERESTS */}
        <Section
          id="career-interests"
          eyebrow="Career interests"
          title="Roles I am working towards"
          tinted
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {careerInterests.map((role) => (
              <div
                key={role}
                className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 shadow-card"
              >
                <span className="size-2 rounded-full bg-gradient-brand" />
                <span className="text-sm font-medium">{role}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <Section
          id="contact"
          eyebrow="Contact"
          title="Let's Connect"
          intro="I am available for entry-level IT support, administrative, data administration and back-office opportunities. Feel free to reach out."
        >
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { icon: Linkedin, label: "LinkedIn", value: "Add your LinkedIn URL", href: "#" },
              { icon: Mail, label: "Email", value: "Add your email address", href: "#" },
              { icon: Github, label: "GitHub / Projects", value: "Add your GitHub or project link", href: "#" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-transform hover:-translate-y-1"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                  <c.icon className="size-5" />
                </span>
                <p className="mt-4 font-semibold">{c.label}</p>
                <p className="mt-1 text-sm text-muted-foreground">{c.value}</p>
              </a>
            ))}
          </div>
        </Section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-6xl px-5 text-sm text-muted-foreground sm:px-8">
          © {new Date().getFullYear()} Ongeziwe Msila — Entry-Level IT Support, Administration &amp; Data
          Portfolio
        </div>
      </footer>
    </div>
  );
}
