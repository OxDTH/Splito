'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Users, Plus, SlidersHorizontal, UserPlus } from 'lucide-react'
import { Button } from '@/components/ui/button'

type FilterOption = 'none' | 'outstanding' | 'borrowed' | 'lent'

interface Friend {
  id: string
  name: string
  avatar?: string
  balance: number // positive means they owe you, negative means you owe them
}

// Mock data - replace with actual data from your backend
const mockFriends: Friend[] = [
  { id: '1', name: 'Alex Johnson', balance: 45.50 },
  { id: '2', name: 'Sarah Wilson', balance: -23.75 },
  { id: '3', name: 'Mike Chen', balance: 0 },
  { id: '4', name: 'Emma Davis', balance: -12.30 },
  { id: '5', name: 'John Smith', balance: 67.80 },
]

interface FriendsPageProps {
  totalLent?: number;
  totalBorrowed?: number;
}

export default function FriendsPage({
  totalLent = 1250.75,
  totalBorrowed = 1250.75
}: FriendsPageProps = {}) {
  const [filter, setFilter] = useState<FilterOption>('none')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [deviceOS, setDeviceOS] = useState<'android' | 'ios' | 'desktop'>('desktop')

  // Detect device OS on client side only
  useEffect(() => {
    const userAgent = navigator.userAgent
    
    if (/Android/i.test(userAgent)) {
      setDeviceOS('android')
    } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
      setDeviceOS('ios')
    } else {
      setDeviceOS('desktop')
    }
  }, [])

  const netBalance = totalLent - totalBorrowed

  // Filter friends based on selected filter
  const filteredFriends = mockFriends.filter(friend => {
    switch (filter) {
      case 'outstanding':
        return friend.balance !== 0
      case 'borrowed':
        return friend.balance < 0
      case 'lent':
        return friend.balance > 0
      default:
        return true
    }
  })

  const filterOptions = [
    { value: 'none', label: 'None' },
    { value: 'outstanding', label: 'Friends with Outstanding balances' },
    { value: 'borrowed', label: 'Friends you borrowed from' },
    { value: 'lent', label: 'Friends you lent to' }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Add Friends */}
      <div className="sticky top-16 z-40 bg-background border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Friends</h1>
            <Button variant="default" size="sm" className="flex items-center gap-2">
              <UserPlus className="h-4 w-4" />
              Add Friends
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Balance Overview and Filter */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Overall,</span>
            <span className="text-sm text-muted-foreground">
              {netBalance >= 0 ? 'you lent' : 'you borrowed'}
            </span>
            <p className={`text-2xl font-bold ${
              netBalance > 0 ? 'text-green-600' :
              netBalance < 0 ? 'text-red-600' : 'text-gray-600'
            }`}>
              ₹{Math.abs(netBalance).toFixed(2)}
            </p>
          </div>

          {/* Filter Dropdown */}
          <div className="relative">
            {deviceOS === 'android' || deviceOS === 'ios' ? (
              // Native select for Android/iOS devices - hidden, with icon overlay
              <div className="relative">
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value as FilterOption)}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                >
                  {filterOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2 pointer-events-none"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              // Custom dropdown for desktop
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="flex items-center gap-2"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                </Button>
                {isFilterOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-popover border rounded-md shadow-lg z-50">
                    {filterOptions.map((option) => (
                      <button
                        key={option.value}
                        className="w-full text-left px-3 py-2 hover:bg-accent hover:text-accent-foreground text-sm"
                        onClick={() => {
                          setFilter(option.value as FilterOption)
                          setIsFilterOpen(false)
                        }}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* Friends List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          {filteredFriends.length > 0 ? (
            filteredFriends.map((friend) => (
              <motion.div
                key={friend.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center justify-between py-3"
              >
                <div className="font-medium">{friend.name}</div>
                <div className="text-right">
                  {friend.balance !== 0 && (
                    <>
                      <div className="text-xs text-muted-foreground">
                        {friend.balance > 0 ? 'Lent' : 'Borrowed'}
                      </div>
                      <div className={`font-semibold ${
                        friend.balance > 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        ₹{Math.abs(friend.balance).toFixed(2)}
                      </div>
                    </>
                  )}
                  {friend.balance === 0 && (
                    <div className="text-sm text-muted-foreground">Settled up</div>
                  )}
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-12">
              <Users className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
              <h3 className="text-lg font-medium mb-2">No friends found</h3>
              <p className="text-muted-foreground">
                {filter === 'none' 
                  ? 'Start by adding some friends to split expenses with.'
                  : 'No friends match the selected filter.'
                }
              </p>
            </div>
          )}
        </motion.div>

        {/* Add More Friends Button */}
        <div className="flex justify-center mt-8 pb-20 md:pb-8">
          <Button 
            variant="outline" 
            size="lg" 
            className="flex items-center gap-2"
          >
            <Plus className="h-5 w-5" />
            Add More Friends
          </Button>
        </div>
      </div>

      {/* Click outside to close filter */}
      {isFilterOpen && (
        <div 
          className="fixed inset-0 z-30" 
          onClick={() => setIsFilterOpen(false)}
        />
      )}
    </div>
  )
}