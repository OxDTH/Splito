'use client'

import { motion } from 'framer-motion'
import { Activity } from 'lucide-react'

export default function ActivityPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <Activity className="mx-auto mb-4" size={48} />
        <h1 className="text-4xl font-bold">Activity</h1>
        <p className="text-lg mt-2">View all your expense activities and transactions.</p>
      </motion.div>
    </div>
  )
}