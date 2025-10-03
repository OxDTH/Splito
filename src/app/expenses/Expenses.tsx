'use client'

import { motion } from 'framer-motion'
import { Receipt } from 'lucide-react'

export default function ExpensesPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <Receipt className="mx-auto mb-4" size={48} />
        <h1 className="text-4xl font-bold">Expenses</h1>
        <p className="text-lg mt-2">Track and manage all your expenses.</p>
      </motion.div>
    </div>
  )
}