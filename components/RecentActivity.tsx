"use client";

import { MessageCircle, ExternalLink, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ActivityItem {
  id: string;
  type: "expense" | "settlement" | "group";
  description: string;
  amount: number;
  group: string;
  timestamp: string;
  participants?: string[];
}

interface RecentActivityProps {
  activities?: ActivityItem[];
}

const mockActivities: ActivityItem[] = [
  {
    id: "1",
    type: "expense",
    description: "You paid ₹250 for Pizza",
    amount: 250,
    group: "Roommates",
    timestamp: "2 hours ago",
    participants: ["John", "Sarah"]
  },
  {
    id: "2",
    type: "settlement",
    description: "John paid you ₹150",
    amount: 150,
    group: "College Friends",
    timestamp: "Yesterday",
    participants: ["John"]
  },
  {
    id: "3",
    type: "expense",
    description: "Sarah added ₹300 for Groceries",
    amount: 300,
    group: "Roommates",
    timestamp: "2 days ago",
    participants: ["You", "Mike"]
  },
  {
    id: "4",
    type: "group",
    description: "You created group 'Weekend Trip'",
    amount: 0,
    group: "Weekend Trip",
    timestamp: "3 days ago",
    participants: ["Alex", "Emma", "Chris"]
  },
  {
    id: "5",
    type: "expense",
    description: "You paid ₹500 for Dinner",
    amount: 500,
    group: "College Friends",
    timestamp: "4 days ago",
    participants: ["John", "Mike", "Lisa"]
  }
];

export function RecentActivity({ activities = mockActivities }: RecentActivityProps) {
  const getActivityIcon = (type: ActivityItem["type"]) => {
    switch (type) {
      case "expense":
        return "💰";
      case "settlement":
        return "💸";
      case "group":
        return "👥";
      default:
        return "📝";
    }
  };

  const getActivityColor = (type: ActivityItem["type"]) => {
    switch (type) {
      case "expense":
        return "text-blue-600";
      case "settlement":
        return "text-green-600";
      case "group":
        return "text-purple-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 bg-orange-600 rounded-full"></div>
          <h2 className="text-lg font-semibold">Recent Activity</h2>
        </div>
        <Button variant="ghost" size="sm">
          View All
        </Button>
      </div>

      <div className="space-y-4">
        {activities.slice(0, 5).map((activity) => (
          <div key={activity.id} className="flex items-start gap-3 p-3 hover:bg-muted/50 rounded-lg transition-colors">
            {/* Activity Icon */}
            <div className="text-xl">{getActivityIcon(activity.type)}</div>
            
            {/* Activity Details */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">
                    {activity.description}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Users className="h-3 w-3" />
                      <span className="font-medium">{activity.group}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">{activity.timestamp}</span>
                  </div>
                </div>
                
                {/* Amount (if applicable) */}
                {activity.amount > 0 && (
                  <span className={`text-sm font-semibold ${getActivityColor(activity.type)}`}>
                    ₹{activity.amount}
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 mt-2">
                <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  View Details
                </Button>
                {activity.type === "expense" && (
                  <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
                    <MessageCircle className="h-3 w-3 mr-1" />
                    Add Comment
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {activities.length === 0 && (
        <div className="text-center py-8">
          <div className="text-4xl mb-2">📊</div>
          <p className="text-muted-foreground">No recent activity</p>
          <p className="text-sm text-muted-foreground">Start by adding an expense or creating a group</p>
        </div>
      )}
    </div>
  );
}