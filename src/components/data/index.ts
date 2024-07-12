import { links } from "@/components/index";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 text-teal-900 md:col-span-6 md:row-span-4 lg:min-h-[60vh] ",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/p3.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 text-white",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Our goal is to make our tech stack attractive and cutting-edge.",
    description: "We constantly strive to improve.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 text-white",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a strong commitment to advancing development skills, alongside a professional focus on pioneering ads and marketing strategies.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1 text-white",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Pioneering Advanced Web Development",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center text-white",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center text-white",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "Empower Your Digital Journey",
    des: "Ignite your brand with social media prowess, SEO excellence, Google Ads, Facebook Ads, and more!",
    img: "/12.png",
    
    link: "https://calendly.com/moonfrostesencia/30min",
    
  },
  {
    id: 2,
    title: "Crafting Visual Brilliance",
    des: "Elevate your brand with captivating logos and striking designs that make a lasting impact.",
    img: "/13.png",
    
    link: "https://calendly.com/moonfrostesencia/30min",
   
  },
  {
    id: 3,
    title: "Building Digital Excellence",
    des: "Deliver excellence in web development, web apps, and more, tailored to your needs.",
    img: "/14.png",
   
    link: "https://calendly.com/moonfrostesencia/30min",
   
  },
  {
    id: 4,
    title: "AI-Driven Growth Strategies",
    des: "Supercharge your business with cutting-edge AI-driven strategies for targeted growth and impactful results. ",
    img: "/15.png",
    
    link: "https://calendly.com/moonfrostesencia/30min",
    
  },
] as const;

export const testimonials = [

  {
    quote: `I can confidently say that working with  ${links.ownerName} has been a game-changer for us. Their expertise in digital marketing and web development has elevated our brand presence to new heights. 🌟🌟🌟🌟🌟`,
    name: "Gaurav",
    title: "@iamswaastik",
    className: "45",
    img:"/gaurav.png"
    
  },
  {
    quote: `As an entrepreneur, I can confidently say that collaborating with ${links.ownerName} has transformed our business. Their expertise in digital marketing and web development has propelled our brand to new levels of success.🌟🌟🌟🌟🌟`,
    name: "Ritik",
    title: "@ritik_verma_1_4",
    img:"/ritik.png"
  },
  {
    quote: `I can confidently say that working with  ${links.ownerName} has been a game-changer for us. Their expertise in digital marketing and web development has elevated our brand presence to new heights. 🌟🌟🌟🌟🌟`,
    name: "Gaurav",
    title: "@iamswaastik",
    img:"/gaurav.png"
  },
  {
    quote: `As an entrepreneur, I can confidently say that collaborating with ${links.ownerName} has transformed our business. Their expertise in digital marketing and web development has propelled our brand to new levels of success.🌟🌟🌟🌟🌟`,
    name: "Ritik",
    title: "@ritik_verma_1_4",
    className: "55",
    img:"/ritik.png"
  },
] as const;

export const companies = [
  {
   
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
] as const;



export const techStack = {
  stack1: ["React.js", "Next.js", "Typescript"],
  stack2: ["Vue.js", "AWS", "MongoDB"],
} as const;
