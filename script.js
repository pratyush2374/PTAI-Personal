document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("weightGraph").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: "Weight (kg)",
          data: [78, 77.5, 76, 75, 74, 73.5, 73, 72.5, 72, 72.2, 72.3, 72],
          borderColor: "#007bff",
          backgroundColor: "rgba(0, 123, 255, 0.2)",
          borderWidth: 2,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          min: 50,
          max: 100,
          beginAtZero: false,
          ticks: {
            stepSize: 10, // Sets the gap between ticks to 10
          },
          grid: {
            borderDash: [5, 5],
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: function (tooltipItem) {
              return `Weight: ${tooltipItem.raw} kg`;
            },
          },
        },
      },
    },
  });
});
