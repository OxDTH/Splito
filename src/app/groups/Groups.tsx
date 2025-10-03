'use client'

import { motion } from 'framer-motion'
import { Users } from 'lucide-react'

export default function GroupsPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <Users className="mx-auto mb-4" size={48} />
        <h1 className="text-4xl font-bold">Groups</h1>
        <p className="text-lg mt-2">Manage your expense groups and members.</p>
      </motion.div>
    </div>
  )
}