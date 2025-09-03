import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MagnifyingGlassIcon,
  ServerIcon,
  CpuChipIcon,
  SignalIcon,
  ChartBarIcon,
  DocumentTextIcon,
  PresentationChartLineIcon,
  CheckCircleIcon,
  CodeBracketIcon,
  BeakerIcon,
} from "@heroicons/react/24/outline"

const timelineData = [
  {
    week: "Week 1",
    title: "Literature Review",
    description: "Comprehensive review of existing edge computing benchmarks and identification of research gaps.",
    status: "completed",
    icon: MagnifyingGlassIcon,
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/20",
  },
  {
    week: "Week 2",
    title: "Research Planning",
    description: "Defining research objectives, methodology, and creating a detailed project roadmap.",
    status: "completed",
    icon: DocumentTextIcon,
    iconColor: "text-indigo-400",
    iconBg: "bg-indigo-500/20",
  },
  {
    week: "Week 3",
    title: "Infrastructure Setup",
    description: "Setting up edge computing testbed with multiple nodes and network configurations.",
    status: "completed",
    icon: ServerIcon,
    iconColor: "text-green-400",
    iconBg: "bg-green-500/20",
  },
  {
    week: "Week 4",
    title: "Initial Testing",
    description: "Conducting preliminary tests on the infrastructure and refining the experimental setup.",
    status: "completed",
    icon: BeakerIcon,
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/20",
  },
  {
    week: "Week 5",
    title: "Benchmark Development",
    description: "Developing custom benchmarking tools and performance measurement frameworks.",
    status: "completed",
    icon: CpuChipIcon,
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/20",
  },
  {
    week: "Week 6",
    title: "Network Latency Analysis",
    description: "Analyzing network latency patterns across different edge computing scenarios.",
    status: "completed",
    icon: SignalIcon,
    iconColor: "text-cyan-400",
    iconBg: "bg-cyan-500/20",
  },
  {
    week: "Week 7",
    title: "Performance Testing",
    description: "Conducting extensive performance tests across various workloads and configurations.",
    status: "completed",
    icon: ChartBarIcon,
    iconColor: "text-orange-400",
    iconBg: "bg-orange-500/20",
  },
  {
    week: "Week 8",
    title: "Data Analysis",
    description: "Analyzing collected data and developing optimization strategies for edge systems.",
    status: "completed",
    icon: PresentationChartLineIcon,
    iconColor: "text-pink-400",
    iconBg: "bg-pink-500/20",
  },
  {
    week: "Week 9",
    title: "Results Compilation",
    description: "Feature engineering for metric prioritization and developed a benchmark scoring method.",
    status: "completed",
    icon: CodeBracketIcon,
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/20",
  },
  {
    week: "Week 10",
    title: "Final Presentation",
    description: "Presenting our conclusive benchmarks to other WINLAB interns and teams.",
    status: "completed",
    icon: CheckCircleIcon,
    iconColor: "text-red-400",
    iconBg: "bg-red-500/20",
  },
]

export default function TimelinePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white geometric-bg">
      <div className="geometric-element geometric-element-1"></div>
      <div className="geometric-element geometric-element-2"></div>

      <SiteHeader />

      {/* Header */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-light mb-6">Research Timeline</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            10-week edge computing benchmarking research project milestones
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <div className="relative">
            <div className="space-y-12">
              {timelineData.map((item, index) => {
                const IconComponent = item.icon
                const isLast = index === timelineData.length - 1
                return (
                  <div key={index} className="relative flex items-start">
                    {/* Timeline line - only show if not the last item */}
                    {!isLast && <div className="absolute left-6 top-12 w-px h-12 bg-gray-300 dark:bg-gray-800"></div>}

                    {/* Timeline dot */}
                    <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white dark:bg-black rounded-full">
                      <div className={`p-1.5 rounded-lg ${item.iconBg}`}>
                        <IconComponent className={`w-4 h-4 ${item.iconColor}`} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="ml-8 flex-1">
                      <Card className="bg-transparent border-none hover:bg-gray-100 dark:hover:bg-gray-900/50 transition-all duration-300 group">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-medium text-black dark:text-white">{item.title}</h3>
                            <div className="flex items-center gap-3">
                              <Badge
                                variant="outline"
                                className="text-gray-600 dark:text-gray-400 border-gray-300 dark:border-gray-700 bg-transparent"
                              >
                                {item.week}
                              </Badge>
                              <Badge
                                variant="outline"
                                className={
                                  item.status === "completed"
                                    ? "bg-green-500/20 text-green-400 border-green-500/30 hover:bg-green-500/20 hover:text-green-400 hover:border-green-500/30"
                                    : item.status === "in-progress"
                                      ? "bg-blue-500/20 text-blue-400 border-blue-500/30 hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-500/30"
                                      : "bg-gray-500/20 text-gray-400 border-gray-500/30 hover:bg-gray-500/20 hover:text-gray-400 hover:border-gray-500/30"
                                }
                              >
                                {item.status === "completed"
                                  ? "Completed"
                                  : item.status === "in-progress"
                                    ? "In Progress"
                                    : "Upcoming"}
                              </Badge>
                            </div>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
