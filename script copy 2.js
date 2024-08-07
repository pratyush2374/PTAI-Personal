document.addEventListener("DOMContentLoaded", function () {
  // Steps Chart
  const stepsCtx = document.getElementById('steps-chart').getContext('2d');
  new Chart(stepsCtx, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [10000, 2000], // Assuming goal is 12,000 steps
        backgroundColor: ['#4caf50', '#e0e0e0']
      }],
      labels: ['Steps Taken', 'Remaining']
    },
    options: {
      responsive: true,
      cutoutPercentage: 80,
      legend: { display: false }
    }
  });

  // Water Chart
  const waterCtx = document.getElementById('water-chart').getContext('2d');
  new Chart(waterCtx, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [2.5, 1.5], // Assuming goal is 4 liters
        backgroundColor: ['#2196f3', '#e0e0e0']
      }],
      labels: ['Water Drunk', 'Remaining']
    },
    options: {
      responsive: true,
      cutoutPercentage: 80,
      legend: { display: false }
    }
  });

  // Calories Chart
  const caloriesCtx = document.getElementById('calories-chart').getContext('2d');
  new Chart(caloriesCtx, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [2000, 500], // Assuming goal is 2500 calories
        backgroundColor: ['#ff9800', '#e0e0e0']
      }],
      labels: ['Calories Burned', 'Remaining']
    },
    options: {
      responsive: true,
      cutoutPercentage: 80,
      legend: { display: false }
    }
  });


});
