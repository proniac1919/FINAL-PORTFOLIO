import DevImg from "./DevImg"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import TechStack from './TechStack';
import { motion } from "framer-motion";
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase, Home, Languages, Code, Database, Cloud, LineChart, Award } from 'lucide-react';

const infoData = [
  {
    icon: <User2 size={20} />,
    text: 'Abhishek Das',
  },
  {
    icon: <MailIcon size={20} />,
    text: 'abhishek.das1359x@gmail.com',
  },
  {
    icon: <GraduationCap size={20} />,
    text: 'Master of Computer Application',
  },

];

const LangSkill = [
  {
    icon: <Languages size={20} />,
    text: 'Advanced : English , Hindi',

  },
  {
    icon: <Home size={20} />,
    text: 'Native : Odia',

  }
]

const Skill = [
  {
    icon: <Code size={20} />,
    text: 'Python (Pandas, NumPy, SciPy, Matplotlib)',

  },
  {
    icon: <Database size={20} />,
    text: 'MS SQL Server',

  },
  {
    icon: <Cloud size={20} />,
    text: 'AWS',

  },
  {
    icon: <LineChart size={20} />,
    text: 'PowerBI, Tableau, MS Excel (Pivot Table, VLOOKUP, VBA, Macro)',

  },
  {
    icon: <Award size={20} />,
    text: 'Google Data Analytics Professional Certificate, IBM Data Analyst Professional Certificate',
  },
]

const qualificationData = [
  {
    title: 'education',
    data: [
      {
        university: 'Chandigarh University',
        qualification: 'Master of Computer Application (MCA) - Cloud Computing & DevOps',
        years: '2021 - 2023',
        imgPath: '/Logog/CU.png',
      },
      {
        university: 'Centurion University of Technology and Management',
        qualification: 'Bachelor of Science (BSc. IT) - Cloud Technology & Information Security',
        years: '2018 - 2021',
        imgPath: '/Logog/CUTM.png',
      },
    ],
  },
  {
    title: 'experience',
    data: [
      {
        company: 'Blue Star',
        role: 'Application Engineer',
        years: 'Sept 2025 - Present',
        imgPath: '/Logog/BS.png',
      },
      {
        company: 'Sukoon Unlimited',
        role: 'Data Analyst Internship',
        years: 'Feb 2025 - Apr 2025',
        imgPath: '/Logog/SU.png',
      },
      {
        company: 'Alma Better',
        role: 'Data Science Apprenticeship',
        years: 'Jan 2024 - Jan 2025',
        imgPath: '/Logog/Ab.png',
      },
    ],
  },
];
const skillData = [
  {
    title: 'Skills',
    data: [
      {
        name: '● Language: Python, Java'
      },
      {
        name: '● Databases: MySQL, PostgreSQL, NoSQL'
      },
      {
        name: '● Cloud: MS Azure, Google Cloud Platform, AWS'
      },
      {
        name: '● Visualization Tool: Excel, Tableau, Power BI, QlikView, Alteryx'
      },
    ],
  },
  {
    title: 'Tools',
    data: [
      {
        imgPath: '/about/python.svg'
      },
      {
        imgPath: '/about/sql.svg'
      },
      {
        imgPath: '/about/aws.svg'
      },
      {
        imgPath: '/about/powerbi.svg'
      },
      {
        imgPath: '/about/tableau.svg'
      },
      {
        imgPath: '/about/excel.svg'
      },
    ],
  },
]
const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return <section id='about' className="xl:min-h-[860px] pb-12 xl:py-24 scroll-mt-28 xl:scroll-mt-0">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 xl:mb-16"
      >
        <h2 className="section-title mb-4 mx-auto justify-center">About Me</h2>
        <p className="subtitle max-w-2xl mx-auto">
          Unveiling the data enthusiast behind the code.
        </p>
      </motion.div>
      <div className="flex flex-col xl:flex-row">
        <div className="hidden xl:flex flex-1 relative">
          <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative' imgSrc='/about/developer3.png' />
        </div>
        <div className="flex-1">
          <Tabs defaultValue="personal">
            <TabsList className='w-full flex xl:grid xl:grid-cols-3 shadow-md xl:max-w-[520px] xl:border dark:border-none'>
              <TabsTrigger className='flex-1 xl:w-auto text-sm px-1' value="personal">Personal Info</TabsTrigger>
              <TabsTrigger className='flex-1 xl:w-auto text-sm px-1' value="qualification">Qualifications</TabsTrigger>
              <TabsTrigger className='flex-1 xl:w-auto text-sm px-1' value="skills">Skills</TabsTrigger>
            </TabsList>
            <div className="text-lg mt-12 xl:mt-8">
              <TabsContent value="personal">
                <div className="text-center xl:text-left">
                  <h3 className="h3 mb-4">From Metrics to Meaningful Insights.</h3>
                  <p className="subtitle max-w-xl mx-auto xl:mx-0">
                    I don't just write code; I architect data solutions. My journey involves rigorous statistical analysis, building robust ETL pipelines, and creating dashboards that drive business strategy.
                    <br /><br />
                    With deep expertise in SQL, Python, and Cloud technologies, I transform raw, chaotic data into structured, actionable intelligence.
                  </p>
                  <div className="grid xl:grid-cols-2 gap-4 mb-7">
                    {infoData.map((item, index) => {
                      return (
                        <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                          <div className="text-primary">{item.icon}</div>
                          <div>{item.text}</div>
                        </div>
                      )
                    })}
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <div className="text-primary">Language Skill</div>
                    <div className="border-b border-border"></div>
                    {LangSkill.map((item, index) => {
                      return (
                        <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                          <div className="text-primary">{item.icon}</div>
                          <div>{item.text}</div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="qualification">
                <div>
                  <h3 className="h3 mb-8 text-center xl:text-left">My Awesome Journey
                  </h3>
                  <div className="grid md:grid-cols-2 gap-y-8">
                    <div className="flex flex-col gap-y-6">
                      <div className="flex gap-x-4 items-center text-[22px] text-primary">
                        <Briefcase />
                        <h4 className="capitalize font-medium">
                          {getData(qualificationData, 'experience').title}
                        </h4>
                      </div>
                      <div className="flex flex-col gap-y-8">
                        {getData(qualificationData, 'experience').data.map(
                          (item, index) => {
                            const { company, role, years, imgPath } = item;
                            return (
                              <div className='flex gap-x-8 group' key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div className="flex items-start gap-4">
                                  {imgPath && (
                                    <div className="relative w-[50px] h-[50px] shrink-0 bg-white rounded-lg p-1 overflow-hidden flex items-center justify-center">
                                      <Image src={imgPath} width={42} height={42} alt={company} className="object-contain" />
                                    </div>
                                  )}
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">{company}</div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">{role}</div>
                                    <div className="text-base font-medium">{years}</div>
                                  </div>
                                </div>
                              </div>
                            )
                          }
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-6">
                      <div className="flex gap-x-4 items-center text-[22px] text-primary">
                        <GraduationCap size={28} />
                        <h4 className="capitalize font-medium">
                          {getData(qualificationData, 'education').title}
                        </h4>
                      </div>
                      <div className="flex flex-col gap-y-8">
                        {getData(qualificationData, 'education').data.map(
                          (item, index) => {
                            const { university, qualification, years, imgPath } = item;
                            return (
                              <div className='flex gap-x-8 group' key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                </div>
                                <div className="flex items-start gap-4">
                                  {imgPath && (
                                    <div className="relative w-[50px] h-[50px] shrink-0 bg-white rounded-lg p-1 overflow-hidden flex items-center justify-center">
                                      <Image src={imgPath} width={42} height={42} alt={university} className="object-contain" />
                                    </div>
                                  )}
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">{university}</div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">{qualification}</div>
                                    <div className="text-base font-medium">{years}</div>
                                  </div>
                                </div>
                              </div>
                            )
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="skills">
                <div className="text-center xl:text-left">
                  <h3 className="h3 mb-8">Data Engineering Ecosystem</h3>
                  <div className="mb-16">
                    <TechStack />
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  </section>;
}

export default About
