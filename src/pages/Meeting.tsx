import Header from '../components/Header'
import Footer from '../components/Footer'

const Meeting = () => {
  return (
    <div className="v-page-wrapper" id="v-dashboard-wrapper">
      <main className="v-main" id="v-page-main">
        <Header />
        <div className="container-fluid py-5">
          <h1>Meetings & Schedule</h1>
          <div className="row mt-4">
            <div className="col-12">
              <p>Meeting schedule and calendar coming soon...</p>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  )
}

export default Meeting
