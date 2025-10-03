'use client'

import { motion } from 'framer-motion'
import { FinancialOverview } from '@/components/FinancialOverview'
import { RecentActivity } from '@/components/RecentActivity'
import { SmartInsights } from '@/components/SmartInsights'
import { FloatingActionButton } from '@/components/FloatingActionButton'

export default function HomePage() {
  const handleAddExpense = () => {
    console.log('Add expense clicked')
    // TODO: Implement add expense functionality
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-6 space-y-8 max-w-7xl">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-left mb-4"
        >
          <h1 className="text-lg font-medium text-foreground">
            Welcome User,
          </h1>
        </motion.div>

        {/* Financial Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <FinancialOverview />
        </motion.div>



        {/* Recent Activity & Smart Insights Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Recent Activity - Takes 2 columns on xl screens */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="xl:col-span-2"
          >
            <RecentActivity />
          </motion.div>

          {/* Smart Insights - Takes 1 column on xl screens */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="xl:col-span-1"
          >
            <SmartInsights />
          </motion.div>
        </div>

        {/* Additional spacing at bottom for mobile navigation */}
        <div className="h-4 md:h-0"></div>
      </div>

      {/* Floating Action Button */}
      <FloatingActionButton onClick={handleAddExpense} />
    </div>
  )
}