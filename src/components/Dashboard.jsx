import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line, Bar } from 'react-chartjs-2'
import { revenueData, salesData } from '../data/mockData'
import './Dashboard.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
)

function Dashboard() {
  const lineChartData = {
    labels: revenueData.map((d) => d.month),
    datasets: [
      {
        label: 'Revenue ($)',
        data: revenueData.map((d) => d.revenue),
        borderColor: '#4a90e2',
        backgroundColor: 'rgba(74, 144, 226, 0.1)',
        fill: true,
        tension: 0.3,
      },
    ],
  }

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Monthly Revenue' },
    },
  }

  const barChartData = {
    labels: salesData.map((d) => d.category),
    datasets: [
      {
        label: 'Sales',
        data: salesData.map((d) => d.sales),
        backgroundColor: [
          'rgba(74, 144, 226, 0.7)',
          'rgba(52, 152, 219, 0.7)',
          'rgba(46, 204, 113, 0.7)',
          'rgba(230, 126, 34, 0.7)',
          'rgba(155, 89, 182, 0.7)',
        ],
        borderRadius: 4,
      },
    ],
  }

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Sales by Category' },
    },
  }

  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Dashboard</h2>
      <div className="charts-wrapper">
        <div className="chart-card">
          <Line data={lineChartData} options={lineChartOptions} />
        </div>
        <div className="chart-card">
          <Bar data={barChartData} options={barChartOptions} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
