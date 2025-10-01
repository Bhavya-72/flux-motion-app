import { useState } from "react";
import { Target, Plus, Building2, Users, User as UserIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const Goals = () => {
  const [activeLevel, setActiveLevel] = useState("organization");

  const goals = {
    organization: [
      {
        id: 1,
        title: "Improve Overall Project Delivery Rate",
        description: "Increase project completion rate from 75% to 90% by Q4",
        progress: 75,
        deadline: "2025-12-31",
        status: "on-track",
        kpis: ["Project Completion Rate", "On-time Delivery"],
      },
      {
        id: 2,
        title: "Enhance Inter-Department Coordination",
        description: "Implement cross-functional workflows across all departments",
        progress: 45,
        deadline: "2025-09-30",
        status: "at-risk",
        kpis: ["Coordination Score", "Response Time"],
      },
    ],
    team: [
      {
        id: 3,
        title: "Increase Team Productivity by 20%",
        description: "Optimize workflows and reduce bottlenecks in field operations",
        progress: 60,
        deadline: "2025-08-31",
        status: "on-track",
        kpis: ["Tasks Completed", "Cycle Time"],
      },
      {
        id: 4,
        title: "Complete Technical Documentation",
        description: "Document all DPRs, surveys, and master plans for ongoing projects",
        progress: 80,
        deadline: "2025-07-15",
        status: "on-track",
        kpis: ["Documentation Coverage", "Quality Score"],
      },
    ],
    individual: [
      {
        id: 5,
        title: "Complete Advanced Training Program",
        description: "Finish certification in project management and data analysis",
        progress: 90,
        deadline: "2025-06-30",
        status: "on-track",
        kpis: ["Training Hours", "Certification Score"],
      },
      {
        id: 6,
        title: "Improve Personal Efficiency",
        description: "Reduce task completion time by implementing new productivity tools",
        progress: 55,
        deadline: "2025-08-15",
        status: "on-track",
        kpis: ["Task Efficiency", "Time Management"],
      },
    ],
  };

  const handleAddGoal = () => {
    toast.success("Goal created successfully!");
  };

  const getLevelIcon = (level: string) => {
    switch (level) {
      case "organization":
        return <Building2 className="h-5 w-5" />;
      case "team":
        return <Users className="h-5 w-5" />;
      case "individual":
        return <UserIcon className="h-5 w-5" />;
      default:
        return <Target className="h-5 w-5" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "on-track":
        return "bg-success/10 text-success border-success/20";
      case "at-risk":
        return "bg-warning/10 text-warning border-warning/20";
      case "delayed":
        return "bg-destructive/10 text-destructive border-destructive/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6 p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground md:text-3xl">Goals Management</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Set and track goals across organization, team, and individual levels
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Add New Goal
            </Button>
          </DialogTrigger>
          <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Create New Goal</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="goal-title">Goal Title</Label>
                <Input id="goal-title" placeholder="Enter goal title" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="goal-level">Level</Label>
                <Select>
                  <SelectTrigger id="goal-level">
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="organization">Organization</SelectItem>
                    <SelectItem value="team">Team</SelectItem>
                    <SelectItem value="individual">Individual</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="goal-description">Description</Label>
                <Textarea
                  id="goal-description"
                  placeholder="Describe the goal and its objectives"
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="goal-deadline">Deadline</Label>
                <Input id="goal-deadline" type="date" />
              </div>
              <Button onClick={handleAddGoal} className="w-full">
                Create Goal
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Level Tabs */}
      <Tabs value={activeLevel} onValueChange={setActiveLevel} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="organization" className="gap-2">
            <Building2 className="h-4 w-4" />
            <span className="hidden sm:inline">Organization</span>
          </TabsTrigger>
          <TabsTrigger value="team" className="gap-2">
            <Users className="h-4 w-4" />
            <span className="hidden sm:inline">Team</span>
          </TabsTrigger>
          <TabsTrigger value="individual" className="gap-2">
            <UserIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Individual</span>
          </TabsTrigger>
        </TabsList>

        {Object.entries(goals).map(([level, levelGoals]) => (
          <TabsContent key={level} value={level} className="mt-6 space-y-4">
            {levelGoals.map((goal) => (
              <Card key={goal.id} className="overflow-hidden transition-all hover:shadow-md">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-lg bg-primary/10 p-2 text-primary">
                        {getLevelIcon(level)}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{goal.title}</CardTitle>
                        <p className="mt-1 text-sm text-muted-foreground">{goal.description}</p>
                      </div>
                    </div>
                    <Badge className={getStatusColor(goal.status)} variant="outline">
                      {goal.status === "on-track" ? "On Track" : "At Risk"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Progress */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-semibold text-foreground">{goal.progress}%</span>
                    </div>
                    <Progress value={goal.progress} />
                  </div>

                  {/* KPIs */}
                  <div className="flex flex-wrap gap-2">
                    {goal.kpis.map((kpi, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {kpi}
                      </Badge>
                    ))}
                  </div>

                  {/* Deadline */}
                  <div className="flex items-center justify-between rounded-lg bg-muted p-3 text-sm">
                    <span className="text-muted-foreground">Deadline</span>
                    <span className="font-medium text-foreground">
                      {new Date(goal.deadline).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Goals;
