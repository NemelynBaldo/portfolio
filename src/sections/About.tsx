import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination, Keyboard, Mousewheel } from 'swiper/modules'
import { ChevronDown, Mail, MapPin, Phone, User, Smile, Zap, CheckCircle, GraduationCap, BookOpen, Book } from 'lucide-react'
import profileImage from '@/assets/me.jpeg'

const education = [
	{ school: 'Cavite State University', years: '2024–2025', type: 'College' },
	{ school: 'St. John Fisher School', years: '2019–2020', type: 'Senior High School' },
	{ school: 'Osmeña National High School', years: '2018–2019', type: 'Junior High School' },
	{ school: 'Guiuan National High School', years: '2016–2018', type: 'Junior High School' },
	{ school: 'Kaluwayan Elementary School', years: '2015–2016', type: 'Elementary School' },
]
const softSkills = [
	'Adaptability',
	'Time Management',
	'Hard Working',
	'Multitasking',
	'Patience',
]
const hardSkills = [
	'People Skills',
	'Good Communication',
]

export default function About() {
	return (
		<section id="about" className="relative w-full min-h-screen border border-black dark:border-white flex flex-col justify-center items-center dark:bg-neutral-900">
			<Swiper
				modules={[Navigation, Pagination, Keyboard, Mousewheel]}
				direction="horizontal"
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				keyboard={{ enabled: true }}
				mousewheel={{ forceToAxis: true }}
				className="w-full h-full"
			>
				{/* Hero / Intro Slide */}
				<SwiperSlide>
					<div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-neutral-100 via-white to-neutral-200 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900 relative">
						<img src={profileImage} alt="Nemelyn O. Baldo" className="w-32 h-32 rounded-full object-cover border-4 border-neutral-300 dark:border-neutral-600 shadow-lg mb-6" />
						<h1 className="text-3xl md:text-4xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">Nemelyn O. Baldo</h1>
						<h2 className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 font-semibold mb-4">Aspiring Educator & Developer</h2>
						<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
							<ChevronDown className="w-8 h-8 text-neutral-500 animate-bounce" />
							<span className="text-xs text-neutral-500 mt-1">Swipe or scroll</span>
						</div>
					</div>
				</SwiperSlide>

				{/* About Me / Journey Slide */}
				<SwiperSlide>
					<div className="relative flex flex-col items-center justify-center h-screen bg-transparent px-4 py-16">
						{/* Decorative road / path */}
						<svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 1000" preserveAspectRatio="none">
							<defs>
								<linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
									<stop offset="0%" stopColor="#737373" stopOpacity="0.15" />
									<stop offset="50%" stopColor="#525252" stopOpacity="0.25" />
									<stop offset="100%" stopColor="#404040" stopOpacity="0.35" />
								</linearGradient>
								<linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="0%">
									<stop offset="0%" stopColor="#ffffff" stopOpacity="0.0" />
									<stop offset="50%" stopColor="#ffffff" stopOpacity="0.35" />
									<stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
								</linearGradient>
							</defs>
							<path d="M50 950 C180 780 140 640 260 520 C380 400 360 300 480 220 C640 110 720 210 810 330 C900 450 880 600 950 760" fill="none" stroke="url(#roadGradient)" strokeWidth="12" strokeLinecap="round" className="drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]" />
							<path d="M50 950 C180 780 140 640 260 520 C380 400 360 300 480 220 C640 110 720 210 810 330 C900 450 880 600 950 760" fill="none" stroke="url(#glow)" strokeWidth="3" strokeLinecap="round" className="animate-pulse" />
						</svg>

						{/* Heading */}
						<div className="relative z-10 mb-10 text-center">
							<h3 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-900 dark:from-neutral-50 dark:via-neutral-300 dark:to-neutral-50 bg-clip-text text-transparent">My Journey</h3>
							<p className="mt-2 text-neutral-600 dark:text-neutral-400 text-sm md:text-base">A story of curiosity, learning, growth, and aspiration.</p>
						</div>

						{/* Avatar + tags */}
						<div className="relative z-10 mb-14 flex flex-col items-center">
							<div className="relative">
								<div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-neutral-300 via-neutral-100 to-neutral-200 dark:from-neutral-700 dark:via-neutral-800 dark:to-neutral-700 blur opacity-40"></div>
								<img src={profileImage} alt="Nemelyn O. Baldo portrait" className="w-44 h-44 rounded-full object-cover border-4 border-white/60 dark:border-neutral-700 shadow-xl" />
							</div>
							<div className="mt-6 flex flex-wrap gap-3 justify-center">
								<span className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 flex items-center gap-1"><User className="w-3 h-3" /> Educator</span>
								<span className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-800 text-white dark:bg-neutral-200 dark:text-neutral-900 flex items-center gap-1"><Zap className="w-3 h-3" /> Developer</span>
								<span className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-700 text-white dark:bg-neutral-300 dark:text-neutral-900 flex items-center gap-1"><Smile className="w-3 h-3" /> Mentor</span>
							</div>
						</div>

						{/* Narrative card */}
						<div className="relative z-10 max-w-xl mt-2 px-6 py-6 rounded-2xl bg-white/60 dark:bg-neutral-900/60 backdrop-blur-lg border border-white/40 dark:border-white/10 shadow-lg">
							<p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">From early curiosity to structured learning, every milestone shaped a mindset of empathy, clarity, and resilience. I blend educational values with modern web development—building interfaces that teach, guide, and empower. My path is a continuing road: refining craft, sharing knowledge, and opening doors for others to grow in a digital-first world.</p>
							<div className="mt-4 flex flex-wrap gap-2">
								<span className="text-[11px] px-2 py-1 rounded bg-neutral-900 text-white dark:bg-neutral-200 dark:text-neutral-900 flex items-center gap-1"><Smile className="w-3 h-3" /> Empathy</span>
								<span className="text-[11px] px-2 py-1 rounded bg-neutral-800 text-white dark:bg-neutral-300 dark:text-neutral-900 flex items-center gap-1"><Zap className="w-3 h-3" /> Initiative</span>
								<span className="text-[11px] px-2 py-1 rounded bg-neutral-700 text-white dark:bg-neutral-400 dark:text-neutral-900 flex items-center gap-1"><CheckCircle className="w-3 h-3" /> Persistence</span>
							</div>
						</div>

						{/* Scroll hint */}
						<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
							<ChevronDown className="w-7 h-7 text-neutral-500 animate-bounce" />
							<span className="text-[10px] text-neutral-500">Continue</span>
						</div>
					</div>
				</SwiperSlide>

				{/* Education Slide */}
				<SwiperSlide>
					<div className="relative flex flex-col items-center justify-center h-screen bg-transparent px-4 py-12">
						{/* background learning curve */}
						<svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 1000" preserveAspectRatio="none">
							<defs>
								<linearGradient id="eduTimeline" x1="50%" y1="0%" x2="50%" y2="100%">
									<stop offset="0%" stopColor="#a3a3a3" stopOpacity="0.1" />
									<stop offset="50%" stopColor="#737373" stopOpacity="0.2" />
									<stop offset="100%" stopColor="#525252" stopOpacity="0.3" />
								</linearGradient>
								<radialGradient id="eduGlow" cx="50%" cy="50%" r="50%">
									<stop offset="0%" stopColor="#fff" stopOpacity="0.25" />
									<stop offset="100%" stopColor="#fff" stopOpacity="0" />
								</radialGradient>
							</defs>
							{/* vertical timeline with subtle wiggle */}
							<path d="M500 80 C520 180 480 260 500 360 C520 460 480 540 500 640 C520 740 480 820 500 920" fill="none" stroke="url(#eduTimeline)" strokeWidth="12" strokeLinecap="round" />
							<circle cx="500" cy="500" r="220" fill="url(#eduGlow)" />
						</svg>

						<h3 className="relative z-10 text-3xl font-bold mb-6 bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-900 dark:from-neutral-50 dark:via-neutral-300 dark:to-neutral-50 bg-clip-text text-transparent">Education</h3>

						<div className="relative z-10 w-full max-w-3xl h-[60vh] min-h-[420px]">
							{education.map((item, i) => {
								const top = 10 + (i * (80 / (education.length - 1)))
								const left = i % 2 === 0 ? '8%' : '58%'
								return (
									<div key={i} className="">
										{/* connector dot on the timeline */}
										<span className="absolute left-1/2 -translate-x-1/2 -ml-[2px] w-3 h-3 rounded-full bg-neutral-700/80 dark:bg-neutral-300/80 border border-white/30" style={{ top: `${top}%` }} />
										{/* milestone card */}
										<div className="absolute w-[38%] max-w-[420px] px-5 py-4 rounded-2xl bg-white/60 dark:bg-neutral-900/60 backdrop-blur-lg border border-white/40 dark:border-white/10 shadow-md" style={{ top: `${top - 4}%`, left }}>
											<div className="flex items-start gap-3">
												<span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow">
													{item.type === 'College' ? (
														<GraduationCap className="w-4 h-4" />
													) : item.type.includes('Senior') ? (
														<BookOpen className="w-4 h-4" />
													) : (
														<Book className="w-4 h-4" />
													)}
												</span>
												<div>
													<div className="font-semibold text-neutral-900 dark:text-neutral-100">{item.school}</div>
													<div className="text-sm text-neutral-500 dark:text-neutral-400">{item.type} | {item.years}</div>
												</div>
											</div>
										</div>
									</div>
								)
							})}
						</div>
					</div>
				</SwiperSlide>

				{/* Experience Slide */}
				<SwiperSlide>
					<div className="relative flex flex-col items-center justify-center h-screen bg-transparent px-4 py-12">
						{/* orbital background */}
						<svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 1000" preserveAspectRatio="none">
							<defs>
								<radialGradient id="expOrbit" cx="50%" cy="50%" r="50%">
									<stop offset="0%" stopColor="#fff" stopOpacity="0.2" />
									<stop offset="100%" stopColor="#fff" stopOpacity="0" />
								</radialGradient>
								<linearGradient id="expStroke" x1="0%" y1="0%" x2="100%" y2="0%">
									<stop offset="0%" stopColor="#a3a3a3" stopOpacity="0.15" />
									<stop offset="100%" stopColor="#525252" stopOpacity="0.3" />
								</linearGradient>
							</defs>
							<circle cx="500" cy="500" r="300" fill="url(#expOrbit)" />
							<circle cx="500" cy="500" r="280" fill="none" stroke="url(#expStroke)" strokeWidth="2" />
							<circle cx="500" cy="500" r="360" fill="none" stroke="url(#expStroke)" strokeWidth="2" />
							<circle cx="500" cy="500" r="430" fill="none" stroke="url(#expStroke)" strokeWidth="2" />
						</svg>

						<h3 className="relative z-10 text-3xl font-bold mb-6 bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-900 dark:from-neutral-50 dark:via-neutral-300 dark:to-neutral-50 bg-clip-text text-transparent">Experience</h3>

						<div className="relative z-10 grid gap-6 md:grid-cols-2 w-full max-w-4xl">
							<div className="rounded-2xl p-6 border border-white/40 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-lg hover:shadow-lg transition-all duration-300">
								<div className="flex items-center gap-3 mb-2">
									<User className="w-5 h-5 text-neutral-600 dark:text-neutral-300" />
									<span className="font-semibold text-neutral-900 dark:text-neutral-100">Internship Student</span>
								</div>
								<div className="text-neutral-700 dark:text-neutral-300">St. John Fisher School</div>
								<div className="text-sm text-neutral-500 dark:text-neutral-400">2020</div>
							</div>

							{/* narrative card */}
							<div className="rounded-2xl p-6 border border-white/40 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-lg">
								<p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300">Hands-on classroom assistance that strengthened communication, patience, and planning. I value clear structure, supportive feedback, and iterative improvement—principles I carry into building user-friendly web experiences.</p>
								<div className="mt-4 flex flex-wrap gap-2">
									<span className="text-[11px] px-2 py-1 rounded bg-neutral-900 text-white dark:bg-neutral-200 dark:text-neutral-900">Teamwork</span>
									<span className="text-[11px] px-2 py-1 rounded bg-neutral-800 text-white dark:bg-neutral-300 dark:text-neutral-900">Planning</span>
									<span className="text-[11px] px-2 py-1 rounded bg-neutral-700 text-white dark:bg-neutral-400 dark:text-neutral-900">Empathy</span>
								</div>
							</div>
						</div>

						{/* small orbiting markers */}
						<span className="absolute left-1/2 top-[30%] -translate-x-1/2 w-2 h-2 rounded-full bg-neutral-700/60" />
						<span className="absolute left-[20%] top-1/2 w-2 h-2 rounded-full bg-neutral-500/50" />
						<span className="absolute right-[18%] bottom-[22%] w-2 h-2 rounded-full bg-neutral-400/50" />
					</div>
				</SwiperSlide>

				{/* Skills Slide */}
				<SwiperSlide>
					<div className="relative flex flex-col items-center justify-center h-screen bg-transparent px-4 py-12">
						{/* dotted backdrop */}
						<svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 1000" preserveAspectRatio="none">
							<defs>
								<pattern id="skillDots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
									<circle cx="2" cy="2" r="1" fill="#a3a3a3" opacity="0.25" />
								</pattern>
								<radialGradient id="skillsGlow" cx="50%" cy="50%" r="50%">
									<stop offset="0%" stopColor="#fff" stopOpacity="0.15" />
									<stop offset="100%" stopColor="#fff" stopOpacity="0" />
								</radialGradient>
							</defs>
							<rect x="0" y="0" width="1000" height="1000" fill="url(#skillDots)" />
							<circle cx="500" cy="500" r="300" fill="url(#skillsGlow)" />
						</svg>

						<h3 className="relative z-10 text-3xl font-bold mb-6 bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-900 dark:from-neutral-50 dark:via-neutral-300 dark:to-neutral-50 bg-clip-text text-transparent">Skills</h3>

						<div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
							<div className="rounded-2xl bg-white/60 dark:bg-neutral-900/60 backdrop-blur-lg border border-white/40 dark:border-white/10 p-6">
								<h4 className="font-semibold mb-4 flex items-center gap-2 text-neutral-700 dark:text-neutral-300"><Smile className="w-5 h-5" /> Soft Skills</h4>
								<ul className="space-y-4">
									{softSkills.map((s, i) => (
										<li key={i} className="flex items-center gap-3 text-neutral-800 dark:text-neutral-200"><CheckCircle className="w-5 h-5 text-neutral-500" /> {s}</li>
									))}
								</ul>
							</div>
							<div className="rounded-2xl bg-white/60 dark:bg-neutral-900/60 backdrop-blur-lg border border-white/40 dark:border-white/10 p-6">
								<h4 className="font-semibold mb-4 flex items-center gap-2 text-neutral-700 dark:text-neutral-300"><Zap className="w-5 h-5" /> Hard Skills</h4>
								<ul className="space-y-4">
									{hardSkills.map((s, i) => (
										<li key={i} className="flex items-center gap-3 text-neutral-800 dark:text-neutral-200"><CheckCircle className="w-5 h-5 text-neutral-500" /> {s}</li>
									))}
								</ul>
								<h4 className="font-semibold mt-8 mb-4 flex items-center gap-2 text-neutral-700 dark:text-neutral-300"><Zap className="w-5 h-5" /> Tech Stack</h4>
								<div className="flex flex-wrap gap-4 items-center">
									<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-8 h-8 grayscale" />
									<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-8 h-8 grayscale" />
									<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-8 h-8 grayscale" />
									<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-8 h-8 grayscale" />
									<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-8 h-8 grayscale" />
									<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" alt="Vite" className="w-8 h-8 grayscale" />
									<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind CSS" className="w-8 h-8 grayscale" />
									<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-8 h-8 grayscale" />
									<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="w-8 h-8 grayscale" />
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>

				{/* Contact Slide */}
				<SwiperSlide>
					<div className="relative flex flex-col items-center justify-center h-screen bg-transparent px-4 py-12">
						{/* mail path background */}
						<svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 1000" preserveAspectRatio="none">
							<defs>
								<linearGradient id="contactPathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
									<stop offset="0%" stopColor="#a3a3a3" stopOpacity="0.15" />
									<stop offset="50%" stopColor="#737373" stopOpacity="0.25" />
									<stop offset="100%" stopColor="#525252" stopOpacity="0.35" />
								</linearGradient>
								<radialGradient id="contactGlow" cx="70%" cy="30%" r="50%">
									<stop offset="0%" stopColor="#fff" stopOpacity="0.2" />
									<stop offset="100%" stopColor="#fff" stopOpacity="0" />
								</radialGradient>
							</defs>
							<path d="M60 820 C260 700 320 580 520 520 C720 460 780 380 920 180" fill="none" stroke="url(#contactPathGrad)" strokeWidth="10" strokeLinecap="round" />
							<circle cx="700" cy="300" r="220" fill="url(#contactGlow)" />
						</svg>

						<h3 className="relative z-10 text-3xl font-bold mb-6 bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-900 dark:from-neutral-50 dark:via-neutral-300 dark:to-neutral-50 bg-clip-text text-transparent">Let’s Connect</h3>
						<div className="relative z-10 flex flex-col items-center gap-4 mb-8 rounded-2xl bg-white/60 dark:bg-neutral-900/60 backdrop-blur-lg border border-white/40 dark:border-white/10 px-6 py-6">
							<div className="flex items-center gap-2 text-lg text-neutral-800 dark:text-neutral-200"><Phone className="w-5 h-5 text-neutral-600 dark:text-neutral-400" /> <span>+639860473647</span></div>
							<div className="flex items-center gap-2 text-lg text-neutral-800 dark:text-neutral-200"><Mail className="w-5 h-5 text-neutral-600 dark:text-neutral-400" /> <span>melynbaldo715@gmail.com</span></div>
							<div className="flex items-center gap-2 text-lg text-neutral-800 dark:text-neutral-200"><MapPin className="w-5 h-5 text-neutral-600 dark:text-neutral-400" /> <span>B10 L17 Fairground Vallejo Place PH 4, Pasong Buaya 2, Imus Cavite</span></div>
						</div>
						<a href="mailto:melynbaldo715@gmail.com" className="relative z-10 inline-block px-6 py-3 rounded-full bg-neutral-900 text-white font-semibold shadow hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200 transition">Send a Message</a>
					</div>
				</SwiperSlide>
			</Swiper>
		</section>
	)
}
