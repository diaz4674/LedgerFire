import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: [
          `Variable Costs $${this.props.variable}`,
          `Fixed Costs $${this.props.fixed}`
        ],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      },
      series: [this.props.variable, this.props.fixed]
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="pie"
          width="380"
        />
      </div>
    );
  }
}

export default App;
