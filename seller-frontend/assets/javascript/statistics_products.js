const data = [
  // { user: 'Asmaa Hamid', label: 'week1', revenue: 10 },
  // { user: 'Asmaa Hamid', label: 'week2', revenue: 20 },
  // { user: 'Asmaa Hamid', label: 'week3', revenue: 40 },
  // { user: 'Asmaa Hamid', label: 'week4', revenue: 60 },
]
const user_id = JSON.parse(localStorage.getItem('user')).id
const getRevenueWeek = async () => {
  // data.push({ user: user_id, label: 'Last week', revenue: 50000 })

  await axios
    .get(
      'http://localhost/e-commerce/ecommerce-server/api/seller_revenue.php?id=' +
        user_id +
        '&interval=week'
    )
    .then(
      (response) => {
        console.log(response.data)
        if (response.data.status) {
          //success
          console.log(response.data.data)
          data.push({
            user: user_id,
            label: 'Last week',
            revenue: response.data.data,
          })

          console.log(data)
        } else {
          //error
          alert(response.data.message)
        }
      },
      (error) => {
        console.log(error)
      }
    )
}

const getRevenueMonth = async () => {
  // data.push({ user: user_id, label: 'Last week', revenue: 50000 })

  await axios
    .get(
      'http://localhost/e-commerce/ecommerce-server/api/seller_revenue.php?id=' +
        user_id +
        '&interval=month'
    )
    .then(
      (response) => {
        console.log(response.data)
        if (response.data.status) {
          //success
          console.log(response.data.data)
          data.push({
            user: user_id,
            label: 'Last Month',
            revenue: response.data.data,
          })

          console.log(data)
        } else {
          //error
          alert(response.data.message)
        }
      },
      (error) => {
        console.log(error)
      }
    )
}

const getRevenueYear = async () => {
  // data.push({ user: user_id, label: 'Last week', revenue: 50000 })

  await axios
    .get(
      'http://localhost/e-commerce/ecommerce-server/api/seller_revenue.php?id=' +
        user_id +
        '&interval=year'
    )
    .then(
      (response) => {
        console.log(response.data)
        if (response.data.status) {
          //success
          console.log(response.data.data)
          data.push({
            user: user_id,
            label: 'Last Year',
            revenue: response.data.data,
          })

          console.log(data)
        } else {
          //error
          alert(response.data.message)
        }
      },
      (error) => {
        console.log(error)
      }
    )
}

const config = {
  type: 'bar',
  options: {
    tension: 0.4,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          color: '#323246',
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#323246',
        },
      },
    },
  },
}

const converDataToArray = (data, labels, revenues) => {
  data.forEach((record) => {
    labels.push(record.label)
    revenues.push(record.revenue)
  })
}

const createLineChart = (title, convas, data) => {
  let labels = [],
    revenues = []
  converDataToArray(data, labels, revenues)

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: `${title} - ${data[0].user}`,
        backgroundColor: '#64C5B1',
        borderColor: '#64C5B1',
        data: revenues,
      },
    ],
  }

  config['data'] = chartData

  new Chart(convas, config)
}

const best_seller_convas = document.querySelector('#seller-chart')

const getRevenue = async () => {
  await getRevenueWeek()
  await getRevenueMonth()
  await getRevenueYear()

  createLineChart('Revenue', best_seller_convas, data)
}
getRevenue()
