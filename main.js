const bid = document.getElementById("myChart2").getContext("2d");

const myChart2 = new Chart(bid, {
  data: {
    labels: ["Mon", "Tues", "Wed", "Thur"],
    datasets: [
      {
        type: "bar",
        label: "Skew",
        data: [20, 30, 40, 40],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "#a4a1fb",
      },
      {
        type: "bar",
        label: "Dry Out",
        data: [50, 100, 25, 50],
        fill: false,
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "#85e2fd",
      },

      {
        type: "bar",
        label: "Equity",
        data: [10, 30, 45, 50],
        fill: false,
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "#6be4a8",
      },
    ],
  },
  options: {
    scales: {
      y: {
        min: 0,
        max: 60,
      },
    },
    responsive: true,
  },
});
