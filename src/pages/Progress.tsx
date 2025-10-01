import { Calendar, CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const ProgressPage = () => {
  const timelineData = [
    { date: "Week 1", organization: 60, team: 65, individual: 70 },
    { date: "Week 2", organization: 65, team: 70, individual: 75 },
    { date: "Week 3", organization: 70, team: 75, individual: 80 },
    { date: "Week 4", organization: 75, team: 80, individual: 85 },
    { date: "Week 5", organization: 78, team: 82, individual: 88 },
    { date: "Week 6", organization: 82, team: 85, individual: 90 },
  ];

  const cumulativeData = [
    { month: "Jan", completed: 12, total: 20 },
    { month: "Feb", completed: 28, total: 40 },
    { month: "Mar", completed: 45, total: 60 },
    { month: "Apr", completed: 62, total: 80 },
    { month: "May", completed: 78, total: 100 },
    { month: "Jun", completed: 95, total: 120 },
  ];

  const milestones = [
    {
      id: 1,
      title: "Q1 Goals Completion",
      date: "2025-03-31",
      status: "completed",
      progress: 100,
      description: "All Q1 organizational goals successfully achieved",
    },
    {
      id: 2,
      title: "Team Training Program",
      date: "2025-06-15",
      status: "in-progress",
      progress: 75,
      description: "Advanced technical training for field units",
    },
    {
      id: 3,
      title: "System Optimization",
      date: "2025-08-30",
      status: "upcoming",
      progress: 25,
      description: "Implementation of new workflow automation tools",
    },
    {
      id: 4,
      title: "Annual Review",
      date: "2025-12-15",
      status: "upcoming",
      progress: 10,
      description: "Comprehensive performance review and planning",
    },
  ];

  const recentActivities = [
    {
      id: 1,
      title: "Project Report Submitted",
      time: "2 hours ago",
      type: "success",
      user: "Field Team A",
    },
    {
      id: 2,
      title: "KPI Target Achieved",
      time: "5 hours ago",
      type: "success",
      user: "Department Head",
    },
    {
      id: 3,
      title: "Deadline Extended",
      time: "1 day ago",
      type: "warning",
      user: "Project Manager",
    },
    {
      id: 4,
      title: "New Goal Created",
      time: "2 days ago",
      type: "info",
      user: "Administrator",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-5 w-5 text-success" />;
      case "in-progress":
        return <Clock className="h-5 w-5 text-accent" />;
      case "upcoming":
        return <Calendar className="h-5 w-5 text-primary" />;
      default:
        return <AlertCircle className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-success/10 text-success border-success/20";
      case "in-progress":
        return "bg-accent/10 text-accent border-accent/20";
      case "upcoming":
        return "bg-primary/10 text-primary border-primary/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "success":
        return "bg-success/10 text-success";
      case "warning":
        return "bg-warning/10 text-warning";
      case "info":
        return "bg-primary/10 text-primary";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6 p-4 md:p-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground md:text-3xl">Progress Tracking</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Monitor progress with timelines and visual analytics
        </p>
      </div>

      {/* Charts Section */}
      <Tabs defaultValue="timeline" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="timeline">Timeline View</TabsTrigger>
          <TabsTrigger value="cumulative">Cumulative Progress</TabsTrigger>
        </TabsList>

        <TabsContent value="timeline" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Progress Timeline - Last 6 Weeks</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={timelineData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="date" className="text-xs" />
                  <YAxis className="text-xs" domain={[0, 100]} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "0.5rem",
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="organization"
                    stroke="hsl(var(--chart-1))"
                    strokeWidth={2}
                    name="Organization"
                  />
                  <Line
                    type="monotone"
                    dataKey="team"
                    stroke="hsl(var(--chart-2))"
                    strokeWidth={2}
                    name="Team"
                  />
                  <Line
                    type="monotone"
                    dataKey="individual"
                    stroke="hsl(var(--chart-3))"
                    strokeWidth={2}
                    name="Individual"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cumulative" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Cumulative Goal Completion</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={cumulativeData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="month" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "0.5rem",
                    }}
                  />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="completed"
                    stackId="1"
                    stroke="hsl(var(--chart-2))"
                    fill="hsl(var(--chart-2))"
                    fillOpacity={0.6}
                    name="Completed"
                  />
                  <Area
                    type="monotone"
                    dataKey="total"
                    stackId="2"
                    stroke="hsl(var(--chart-1))"
                    fill="hsl(var(--chart-1))"
                    fillOpacity={0.3}
                    name="Total"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Milestones */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Key Milestones
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.id}
                className="relative rounded-lg border border-border p-4 transition-all hover:bg-muted/50"
              >
                {index !== milestones.length - 1 && (
                  <div className="absolute left-[27px] top-[60px] h-full w-0.5 bg-border" />
                )}
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-card p-2 ring-2 ring-border">
                    {getStatusIcon(milestone.status)}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{milestone.title}</h4>
                        <p className="mt-1 text-sm text-muted-foreground">{milestone.description}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={getStatusColor(milestone.status)} variant="outline">
                          {milestone.status.replace("-", " ")}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {new Date(milestone.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-3">
                      <Progress value={milestone.progress} className="flex-1" />
                      <span className="text-sm font-medium text-foreground">{milestone.progress}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-3 rounded-lg border border-border p-3 transition-all hover:bg-muted/50"
              >
                <div className={`rounded-lg p-2 ${getActivityIcon(activity.type)}`}>
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">{activity.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {activity.user} • {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressPage;
