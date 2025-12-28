import Header from '../components/Header'
import Footer from '../components/Footer'

const Dashboard = () => {
  return (
    <div className="v-page-wrapper" id="v-dashboard-wrapper">
      <main className="v-main" id="v-page-main">
        <Header />
        <div className="container-fluid py-5">
          <h1>Dashboard</h1>
          <div className="row mt-4">
            <div className="col-12">
              <p>Dashboard features coming soon...</p>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  )
}

export default Dashboard
