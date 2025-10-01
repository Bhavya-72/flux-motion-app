import { TrendingUp, TrendingDown, Minus, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const KPIs = () => {
  const kpiData = [
    {
      id: 1,
      name: "Project Completion Rate",
      category: "Organization",
      current: 85,
      target: 90,
      benchmark: 80,
      unit: "%",
      trend: "up",
      change: "+5%",
    },
    {
      id: 2,
      name: "On-time Delivery",
      category: "Organization",
      current: 78,
      target: 85,
      benchmark: 75,
      unit: "%",
      trend: "up",
      change: "+3%",
    },
    {
      id: 3,
      name: "Team Productivity Score",
      category: "Team",
      current: 88,
      target: 90,
      benchmark: 85,
      unit: "/100",
      trend: "up",
      change: "+2",
    },
    {
      id: 4,
      name: "Task Completion Time",
      category: "Team",
      current: 4.2,
      target: 3.5,
      benchmark: 5.0,
      unit: "days",
      trend: "down",
      change: "-0.8",
    },
    {
      id: 5,
      name: "Training Hours Completed",
      category: "Individual",
      current: 45,
      target: 50,
      benchmark: 40,
      unit: "hrs",
      trend: "up",
      change: "+10",
    },
    {
      id: 6,
      name: "Quality Score",
      category: "Individual",
      current: 92,
      target: 95,
      benchmark: 90,
      unit: "%",
      trend: "stable",
      change: "0%",
    },
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="h-4 w-4 text-success" />;
      case "down":
        return <TrendingDown className="h-4 w-4 text-destructive" />;
      default:
        return <Minus className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "up":
        return "text-success";
      case "down":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };

  const calculateProgress = (current: number, target: number, benchmark: number) => {
    // For metrics where lower is better (like time), invert the calculation
    const range = Math.abs(target - benchmark);
    const progress = Math.abs(current - benchmark);
    return Math.min(100, (progress / range) * 100);
  };

  const handleAddKPI = () => {
    toast.success("KPI created successfully!");
  };

  return (
    <div className="space-y-6 p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground md:text-3xl">Key Performance Indicators</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Track and measure success parameters with benchmarks
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Add New KPI
            </Button>
          </DialogTrigger>
          <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Create New KPI</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="kpi-name">KPI Name</Label>
                <Input id="kpi-name" placeholder="Enter KPI name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="kpi-category">Category</Label>
                <Select>
                  <SelectTrigger id="kpi-category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="organization">Organization</SelectItem>
                    <SelectItem value="team">Team</SelectItem>
                    <SelectItem value="individual">Individual</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="kpi-current">Current Value</Label>
                  <Input id="kpi-current" type="number" placeholder="0" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="kpi-target">Target Value</Label>
                  <Input id="kpi-target" type="number" placeholder="0" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="kpi-benchmark">Benchmark</Label>
                  <Input id="kpi-benchmark" type="number" placeholder="0" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="kpi-unit">Unit</Label>
                  <Input id="kpi-unit" placeholder="%" />
                </div>
              </div>
              <Button onClick={handleAddKPI} className="w-full">
                Create KPI
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {kpiData.map((kpi) => (
          <Card key={kpi.id} className="overflow-hidden transition-all hover:shadow-md">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="text-base font-semibold">{kpi.name}</CardTitle>
                <Badge variant="outline" className="text-xs">
                  {kpi.category}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Current Value */}
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-foreground">
                    {kpi.current}
                    <span className="text-lg text-muted-foreground">{kpi.unit}</span>
                  </span>
                  <div className={`flex items-center gap-1 text-sm font-medium ${getTrendColor(kpi.trend)}`}>
                    {getTrendIcon(kpi.trend)}
                    <span>{kpi.change}</span>
                  </div>
                </div>
              </div>

              {/* Progress to Target */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Progress to Target</span>
                  <span className="font-medium text-foreground">
                    {Math.round(calculateProgress(kpi.current, kpi.target, kpi.benchmark))}%
                  </span>
                </div>
                <Progress value={calculateProgress(kpi.current, kpi.target, kpi.benchmark)} />
              </div>

              {/* Target & Benchmark */}
              <div className="grid grid-cols-2 gap-3 rounded-lg bg-muted p-3 text-sm">
                <div>
                  <p className="text-xs text-muted-foreground">Target</p>
                  <p className="font-semibold text-foreground">
                    {kpi.target}
                    {kpi.unit}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Benchmark</p>
                  <p className="font-semibold text-foreground">
                    {kpi.benchmark}
                    {kpi.unit}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">On Target</p>
                <p className="mt-1 text-2xl font-bold text-success">4</p>
              </div>
              <div className="rounded-lg bg-success/10 p-3">
                <TrendingUp className="h-6 w-6 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Need Attention</p>
                <p className="mt-1 text-2xl font-bold text-warning">2</p>
              </div>
              <div className="rounded-lg bg-warning/10 p-3">
                <TrendingDown className="h-6 w-6 text-warning" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Average Score</p>
                <p className="mt-1 text-2xl font-bold text-foreground">85%</p>
              </div>
              <div className="rounded-lg bg-primary/10 p-3">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default KPIs;
