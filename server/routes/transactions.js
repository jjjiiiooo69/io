import express from 'express'
import { authenticateToken } from '../middleware/auth.js'

const router = express.Router()

// Mock transactions database
const transactions = []

// Get user transactions
router.get('/', authenticateToken, (req, res) => {
  const userTransactions = transactions.filter(t => t.userId === req.userId)
  res.json(userTransactions)
})

// Create transaction
router.post('/', authenticateToken, (req, res) => {
  try {
    const { amount, description, type = 'credit' } = req.body

    const transaction = {
      id: `TXN${Date.now()}`,
      userId: req.userId,
      amount,
      description,
      type,
      status: 'completed',
      rrn: Math.random().toString(36).substr(2, 12),
      created_at: new Date(),
      updated_at: new Date()
    }

    transactions.push(transaction)
    res.status(201).json(transaction)
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
})

// Get transaction by ID
router.get('/:id', authenticateToken, (req, res) => {
  const transaction = transactions.find(
    t => t.id === req.params.id && t.userId === req.userId
  )
  
  if (!transaction) {
    return res.status(404).json({ message: 'Transaction not found' })
  }

  res.json(transaction)
})

export default router