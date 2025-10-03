"use client";

import { TrendingUp, TrendingDown, Calendar, Star } from "lucide-react";

interface FinancialOverviewProps {
  totalLent?: number;
  totalBorrowed?: number;
  monthlyExpenses?: number;
}

export function FinancialOverview({
  totalLent = 1250.75,
  totalBorrowed = 1250.75,
  monthlyExpenses = 3200
}: FinancialOverviewProps = {}) {
  const netBalance = totalLent - totalBorrowed;

  return (
    <div className="space-y-4">
      {/* Combined Balance Summary */}
      <div className="bg-card border border-border rounded-lg p-4 shadow-sm max-w-md">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            {netBalance > 0 ? (
              <>
                <TrendingUp className="h-4 w-4 text-green-600" />
                <span className="text-sm text-muted-foreground">You lent</span>
              </>
            ) : netBalance < 0 ? (
              <>
                <TrendingDown className="h-4 w-4 text-red-600" />
                <span className="text-sm text-muted-foreground">You borrowed</span>
              </>
            ) : (
              <>
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm text-muted-foreground">All settled up</span>
              </>
            )}
          </div>
          <p className={`text-2xl font-bold ${
            netBalance > 0 ? 'text-green-600' :
            netBalance < 0 ? 'text-red-600' : 'text-gray-600'
          }`}>
            {netBalance === 0 ? '₹0.00' : `₹${Math.abs(netBalance).toFixed(2)}`}
          </p>
        </div>
      </div>

      {/* This Month's Expenses - Text Only */}
      <div className="max-w-md">
        <div className="flex items-center gap-2 mb-1">
          <Calendar className="h-3 w-3 text-blue-600" />
          <span className="text-sm text-muted-foreground">This month&apos;s expenses</span>
        </div>
        <p className="text-lg font-bold">₹{monthlyExpenses.toFixed(2)}</p>
        <p className="text-xs text-muted-foreground mt-1">15% more than last month</p>
      </div>
    </div>
  );
}