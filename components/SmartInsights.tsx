"use client";

import { TrendingUp, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SmartInsightsProps {
  weeklyTrend?: number;
  pendingSettlements?: number;
}

export function SmartInsights({
  weeklyTrend = 15,
  pendingSettlements = 3
}: SmartInsightsProps = {}) {
  return (
    <div className="space-y-6">
      {/* Spending Trends */}
      <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="h-5 w-5 text-blue-600" />
          <h2 className="text-lg font-semibold">Spending Insights</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Weekly Trend */}
          <div className="text-center p-4 bg-muted/30 rounded-lg">
            <div className={`text-2xl font-bold ${weeklyTrend > 0 ? 'text-red-600' : 'text-green-600'}`}>
              {weeklyTrend > 0 ? '+' : ''}{weeklyTrend}%
            </div>
            <p className="text-sm text-muted-foreground mt-1">vs last week</p>
          </div>

          {/* Pending Settlements */}
          <div className="text-center p-4 bg-muted/30 rounded-lg">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Bell className="h-4 w-4 text-orange-600" />
              <span className="text-2xl font-bold text-orange-600">{pendingSettlements}</span>
            </div>
            <p className="text-sm text-muted-foreground">pending settlements</p>
          </div>

          {/* Settlement Reminder Button */}
          <div className="flex items-center justify-center">
            <Button variant="outline" className="w-full">
              <Bell className="h-4 w-4 mr-2" />
              Send Reminders
            </Button>
          </div>
        </div>
      </div>


    </div>
  );
}