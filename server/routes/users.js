import express from 'express'
import { authenticateToken } from '../middleware/auth.js'

const router = express.Router()

// Mock users database (same as in auth.js - in production, use shared database)
const users = []

// Update user profile
router.put('/profile', authenticateToken, (req, res) => {
  try {
    const userIndex = users.findIndex(u => u.id === req.userId)
    if (userIndex === -1) {
      return res.status(404).json({ message: 'User not found' })
    }

    const { name, email, mobile, company_name } = req.body
    
    users[userIndex] = {
      ...users[userIndex],
      name,
      email,
      mobile,
      company_name,
      updated_at: new Date()
    }

    const { password: _, ...userWithoutPassword } = users[userIndex]
    res.json({ user: userWithoutPassword })
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
})

// Get user balance
router.get('/balance', authenticateToken, (req, res) => {
  const user = users.find(u => u.id === req.userId)
  if (!user) {
    return res.status(404).json({ message: 'User not found' })
  }

  res.json({ balance: user.balance || 0 })
})

export default router