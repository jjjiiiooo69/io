import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { authenticateToken } from '../middleware/auth.js'

const router = express.Router()

// Mock database - in production, use a real database
const users = []

// Register
router.post('/register', async (req, res) => {
  try {
    const { name, email, mobile, company_name, pan_no, password } = req.body

    // Check if user already exists
    const existingUser = users.find(user => user.email === email || user.pan_no === pan_no)
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' })
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create user
    const user = {
      id: users.length + 1,
      name,
      email,
      mobile,
      company_name,
      pan_no,
      password: hashedPassword,
      balance: 0,
      status: 'active',
      created_at: new Date()
    }

    users.push(user)

    res.status(201).json({ message: 'User created successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
})

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    // Find user
    const user = users.find(u => u.email === email)
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }

    // Check password
    const isValidPassword = await bcrypt.compare(password, user.password)
    if (!isValidPassword) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }

    // Generate JWT
    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET || 'fallback_secret',
      { expiresIn: '24h' }
    )

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user

    res.json({
      token,
      user: userWithoutPassword
    })
  } catch (error) {
    res.status(500).json({ message: 'Server error' })
  }
})

// Get current user
router.get('/me', authenticateToken, (req, res) => {
  const user = users.find(u => u.id === req.userId)
  if (!user) {
    return res.status(404).json({ message: 'User not found' })
  }

  const { password: _, ...userWithoutPassword } = user
  res.json({ user: userWithoutPassword })
})

export default router