import { TrendingUp, Target, Users, Award, CheckCircle2, Clock, BarChart3 } from "lucide-react";
import StatCard from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from "recharts";

const Dashboard = () => {
  const productivityData = [
    { month: "Jan", organization: 65, team: 70, individual: 75 },
    { month: "Feb", organization: 70, team: 75, individual: 78 },
    { month: "Mar", organization: 75, team: 78, individual: 82 },
    { month: "Apr", organization: 78, team: 82, individual: 85 },
    { month: "May", organization: 82, team: 85, individual: 88 },
    { month: "Jun", organization: 85, team: 88, individual: 90 },
  ];

  const kpiTrends = [
    { name: "Week 1", efficiency: 65, quality: 70 },
    { name: "Week 2", efficiency: 72, quality: 75 },
    { name: "Week 3", efficiency: 78, quality: 80 },
    { name: "Week 4", efficiency: 85, quality: 85 },
  ];

  const recentGoals = [
    { id: 1, title: "Improve Project Completion Rate", level: "Organization", progress: 75, status: "On Track" },
    { id: 2, title: "Enhance Team Collaboration", level: "Team", progress: 60, status: "In Progress" },
    { id: 3, title: "Complete Technical Training", level: "Individual", progress: 90, status: "Almost Done" },
    { id: 4, title: "Reduce Processing Time", level: "Organization", progress: 45, status: "Needs Attention" },
  ];

  return (
    <div className="space-y-6 p-4 md:p-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground md:text-3xl">Performance Dashboard</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Real-time insights into organizational, team, and individual productivity
        </p>
      </div>

      {/* Key Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="Overall Productivity"
          value="85%"
          change="+12% from last month"
          changeType="positive"
          icon={TrendingUp}
          iconColor="text-primary"
        />
        <StatCard
          title="Active Goals"
          value="24"
          change="8 completed this month"
          changeType="positive"
          icon={Target}
          iconColor="text-secondary"
        />
        <StatCard
          title="Team Performance"
          value="88%"
          change="+5% from last week"
          changeType="positive"
          icon={Users}
          iconColor="text-accent"
        />
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Productivity Trends */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Productivity Across Levels
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={productivityData}>
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
                <Bar dataKey="organization" fill="hsl(var(--chart-1))" name="Organization" />
                <Bar dataKey="team" fill="hsl(var(--chart-2))" name="Team" />
                <Bar dataKey="individual" fill="hsl(var(--chart-3))" name="Individual" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* KPI Trends */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-secondary" />
              KPI Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={kpiTrends}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="name" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.5rem",
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="efficiency" stroke="hsl(var(--chart-1))" strokeWidth={2} name="Efficiency" />
                <Line type="monotone" dataKey="quality" stroke="hsl(var(--chart-2))" strokeWidth={2} name="Quality" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Goals */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Active Goals Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentGoals.map((goal) => (
              <div key={goal.id} className="rounded-lg border border-border p-4 transition-all hover:bg-muted/50">
                <div className="mb-2 flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{goal.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{goal.level} Level</p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      goal.progress >= 75
                        ? "bg-success/10 text-success"
                        : goal.progress >= 50
                        ? "bg-secondary/10 text-secondary"
                        : "bg-warning/10 text-warning"
                    }`}
                  >
                    {goal.status}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Progress value={goal.progress} className="flex-1" />
                  <span className="text-sm font-medium text-foreground">{goal.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="rounded-lg bg-success/10 p-3">
              <CheckCircle2 className="h-6 w-6 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Completed</p>
              <p className="text-2xl font-bold text-foreground">18</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="rounded-lg bg-accent/10 p-3">
              <Clock className="h-6 w-6 text-accent" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">In Progress</p>
              <p className="text-2xl font-bold text-foreground">12</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="rounded-lg bg-primary/10 p-3">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Pending</p>
              <p className="text-2xl font-bold text-foreground">6</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="rounded-lg bg-secondary/10 p-3">
              <Award className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Avg Score</p>
              <p className="text-2xl font-bold text-foreground">8.5</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
