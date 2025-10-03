'use client'

import { motion } from 'framer-motion'
import { BarChart3 } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <BarChart3 className="mx-auto mb-4" size={48} />
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <p className="text-lg mt-2">View your expense summaries and insights.</p>
      </motion.div>
    </div>
  )
}