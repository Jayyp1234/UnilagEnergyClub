import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
  const [paymentId, setPaymentId] = useState('')
  const [paymentDate, setPaymentDate] = useState('')

  useEffect(() => {
    const generatePaymentId = () => {
      const year = new Date().getFullYear()
      const randomNum = Math.floor(Math.random() * 100000)
        .toString()
        .padStart(6, '0')
      return `UEC-${year}-${randomNum}`
    }

    setPaymentId(generatePaymentId())

    const now = new Date()
    setPaymentDate(
      now.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    )
  }, [])

  return (
    <div className="v-page-wrapper">
      <main className="v-main min-vh-100 d-flex align-items-center justify-content-center py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="text-center mb-4" data-aos="fade-down">
                <img src="/assets/media/logos/unilogo.png" alt="Logo" className="img-fluid mb-4" style={{ maxWidth: '80px' }} />
                <div className="bg-white rounded-4 shadow-sm p-5">
                  <div className="mb-4">
                    <div className="text-success mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
                        <path fill="#28a745" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </div>
                    <h2 className="fs-1 fw-bold mb-2" style={{ color: '#28a745' }}>
                      Payment Successful!
                    </h2>
                    <p className="text-muted mb-4">Your membership payment has been processed successfully.</p>
                  </div>

                  <div className="border-top border-bottom py-4 mb-4">
                    <div className="row text-start g-4">
                      <div className="col-6">
                        <p className="text-muted mb-1">Payment ID</p>
                        <p className="fw-bold mb-0">{paymentId}</p>
                      </div>
                      <div className="col-6">
                        <p className="text-muted mb-1">Amount Paid</p>
                        <p className="fw-bold mb-0">₦2,000</p>
                      </div>
                      <div className="col-6">
                        <p className="text-muted mb-1">Payment Date</p>
                        <p className="fw-bold mb-0">{paymentDate}</p>
                      </div>
                      <div className="col-6">
                        <p className="text-muted mb-1">Status</p>
                        <p className="fw-bold text-success mb-0">Completed</p>
                      </div>
                    </div>
                  </div>

                  <div className="d-grid gap-2">
                    <Link to="/dashboard" className="btn btn-lg" style={{ backgroundColor: 'rgba(233, 194, 2, 1)', color: '#fff' }}>
                      Go to Dashboard
                    </Link>
                    <button onClick={() => window.print()} className="btn btn-outline-secondary btn-lg">
                      Download Receipt
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Success
