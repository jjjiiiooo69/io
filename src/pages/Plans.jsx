import React, { useState } from 'react'
import { Check, Star, CreditCard } from 'lucide-react'
import toast from 'react-hot-toast'

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null)
  const [loading, setLoading] = useState(false)

  const plans = [
    {
      id: 'trial',
      name: 'Free Trial',
      price: 0,
      duration: '3 Days',
      description: 'Perfect for testing our platform',
      features: [
        '0% Transaction Fee',
        'Unlimited Transactions',
        'Real-time Settlements',
        'Basic Support',
        'API Access',
        'Standard Integration'
      ],
      popular: false,
      buttonText: 'Start Free Trial',
      buttonClass: 'btn-secondary'
    },
    {
      id: 'standard',
      name: 'Standard',
      price: 199,
      duration: '30 Days',
      description: 'Best for growing businesses',
      features: [
        '0% Transaction Fee',
        'Unlimited Transactions',
        'Real-time Settlements',
        '24/7 Priority Support',
        'Advanced API Access',
        'Custom Integration',
        'Webhook Support',
        'Analytics Dashboard',
        'Multiple UPI Apps',
        'Bank Settlement'
      ],
      popular: true,
      buttonText: 'Choose Standard',
      buttonClass: 'btn-primary'
    }
  ]

  const handlePlanSelection = async (planId) => {
    setLoading(true)
    setSelectedPlan(planId)

    try {
      if (planId === 'trial') {
        // Activate free trial
        await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
        toast.success('Free trial activated successfully!')
      } else {
        // Redirect to payment gateway
        await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API call
        toast.success('Redirecting to payment gateway...')
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
      setSelectedPlan(null)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start with our free trial and upgrade when you're ready. 
            All plans include 0% transaction fees and instant settlements.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`card relative ${
                plan.popular ? 'ring-2 ring-primary-500 scale-105' : ''
              } transition-transform hover:scale-105`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-primary-600">
                    ₹{plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">for {plan.duration}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handlePlanSelection(plan.id)}
                disabled={loading && selectedPlan === plan.id}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center ${plan.buttonClass}`}
              >
                {loading && selectedPlan === plan.id ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <CreditCard className="h-4 w-4 mr-2" />
                    {plan.buttonText}
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Features Comparison */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Why Choose Our Platform?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">0% Transaction Fee</h3>
              <p className="text-gray-600">
                No hidden charges. Keep 100% of your earnings with zero transaction fees.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CreditCard className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Instant Settlements</h3>
              <p className="text-gray-600">
                Get your money instantly in your bank account with real-time settlements.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Round-the-clock support to help you with any issues or questions.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I switch plans anytime?
              </h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is there really no transaction fee?
              </h3>
              <p className="text-gray-600">
                Absolutely! We don't charge any transaction fees. You keep 100% of your earnings.
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How fast are the settlements?
              </h3>
              <p className="text-gray-600">
                Settlements are instant. Money is transferred to your bank account immediately after a successful transaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Plans