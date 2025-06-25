import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Save, Key, User, CreditCard, Bell } from 'lucide-react'
import toast from 'react-hot-toast'

const Settings = () => {
  const { user } = useAuth()
  const [activeTab, setActiveTab] = useState('profile')
  
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    mobile: user?.mobile || '',
    company_name: user?.company_name || '',
    pan_no: user?.pan_no || ''
  })

  const [bankData, setBankData] = useState({
    account_no: '',
    beneficiary_name: '',
    ifsc: ''
  })

  const [apiData, setApiData] = useState({
    token: 'sk_test_1234567890abcdef',
    secret: 'sk_secret_abcdef1234567890',
    webhook_url: ''
  })

  const handleProfileUpdate = (e) => {
    e.preventDefault()
    // API call to update profile
    toast.success('Profile updated successfully!')
  }

  const handleBankUpdate = (e) => {
    e.preventDefault()
    // API call to update bank details
    toast.success('Bank details updated successfully!')
  }

  const handleApiUpdate = (e) => {
    e.preventDefault()
    // API call to update API settings
    toast.success('API settings updated successfully!')
  }

  const generateNewCredentials = () => {
    // API call to generate new credentials
    setApiData({
      ...apiData,
      token: 'sk_test_' + Math.random().toString(36).substr(2, 16),
      secret: 'sk_secret_' + Math.random().toString(36).substr(2, 16)
    })
    toast.success('New API credentials generated!')
  }

  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'bank', name: 'Bank Details', icon: CreditCard },
    { id: 'api', name: 'API Settings', icon: Key },
    { id: 'notifications', name: 'Notifications', icon: Bell }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600 mt-2">
            Manage your account settings and preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="space-y-1">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      activeTab === tab.id
                        ? 'bg-primary-100 text-primary-700 border-r-2 border-primary-500'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="mr-3 h-5 w-5" />
                    {tab.name}
                  </button>
                )
              })}
            </nav>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="card">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Profile Information</h2>
                <form onSubmit={handleProfileUpdate} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="input-field"
                        value={profileData.name}
                        onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="input-field"
                        value={profileData.email}
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        className="input-field"
                        value={profileData.mobile}
                        onChange={(e) => setProfileData({...profileData, mobile: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="input-field"
                        value={profileData.company_name}
                        onChange={(e) => setProfileData({...profileData, company_name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        PAN Number
                      </label>
                      <input
                        type="text"
                        className="input-field"
                        value={profileData.pan_no}
                        onChange={(e) => setProfileData({...profileData, pan_no: e.target.value})}
                        disabled
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn-primary flex items-center space-x-2">
                    <Save className="h-4 w-4" />
                    <span>Save Changes</span>
                  </button>
                </form>
              </div>
            )}

            {/* Bank Details Tab */}
            {activeTab === 'bank' && (
              <div className="card">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Bank Details</h2>
                <form onSubmit={handleBankUpdate} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Account Number
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      value={bankData.account_no}
                      onChange={(e) => setBankData({...bankData, account_no: e.target.value})}
                      placeholder="Enter your account number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Beneficiary Name
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      value={bankData.beneficiary_name}
                      onChange={(e) => setBankData({...bankData, beneficiary_name: e.target.value})}
                      placeholder="Enter beneficiary name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      IFSC Code
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      value={bankData.ifsc}
                      onChange={(e) => setBankData({...bankData, ifsc: e.target.value})}
                      placeholder="Enter IFSC code"
                    />
                  </div>
                  <button type="submit" className="btn-primary flex items-center space-x-2">
                    <Save className="h-4 w-4" />
                    <span>Save Bank Details</span>
                  </button>
                </form>
              </div>
            )}

            {/* API Settings Tab */}
            {activeTab === 'api' && (
              <div className="card">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">API Settings</h2>
                <form onSubmit={handleApiUpdate} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      API Token
                    </label>
                    <div className="flex space-x-2">
                      <input
                        type="text"
                        className="input-field"
                        value={apiData.token}
                        readOnly
                      />
                      <button
                        type="button"
                        onClick={generateNewCredentials}
                        className="btn-secondary whitespace-nowrap"
                      >
                        Generate New
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Secret Key
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      value={apiData.secret}
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Webhook URL
                    </label>
                    <input
                      type="url"
                      className="input-field"
                      value={apiData.webhook_url}
                      onChange={(e) => setApiData({...apiData, webhook_url: e.target.value})}
                      placeholder="https://your-domain.com/webhook"
                    />
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="text-sm font-medium text-blue-900 mb-2">API Endpoints</h3>
                    <div className="space-y-1 text-sm text-blue-700">
                      <div>Payment URL: <code>https://api.upigateway.com/v1/payments</code></div>
                      <div>Status Check: <code>https://api.upigateway.com/v1/status</code></div>
                    </div>
                  </div>
                  <button type="submit" className="btn-primary flex items-center space-x-2">
                    <Save className="h-4 w-4" />
                    <span>Save API Settings</span>
                  </button>
                </form>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <div className="card">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Notification Preferences</h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Email Notifications</h3>
                      <p className="text-sm text-gray-600">Receive email alerts for transactions</p>
                    </div>
                    <input type="checkbox" className="h-4 w-4 text-primary-600 rounded" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">SMS Notifications</h3>
                      <p className="text-sm text-gray-600">Receive SMS alerts for transactions</p>
                    </div>
                    <input type="checkbox" className="h-4 w-4 text-primary-600 rounded" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Webhook Notifications</h3>
                      <p className="text-sm text-gray-600">Send transaction data to your webhook URL</p>
                    </div>
                    <input type="checkbox" className="h-4 w-4 text-primary-600 rounded" defaultChecked />
                  </div>
                  <button className="btn-primary flex items-center space-x-2">
                    <Save className="h-4 w-4" />
                    <span>Save Preferences</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings