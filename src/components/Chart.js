import { Component } from 'react';
import { Card, CardTitle } from 'reactstrap';
import ApexChart from 'react-apexcharts';

class Chart extends Component {
    state = {
        options: {
            chart: {
                id: "area",
                toolbar: {
                    show: false
                }
            },
            colors: ['#F44336'],
            xaxis: {
                show: false,
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
                labels: {
                    show: false
                }
            },
            yaxis: {
                show: false,
                labels: {
                    show: false,
                    
                },
                
            },
            dataLabels: {
                enabled: false,
            },
            grid: {
                padding: {
                    left: 0,
                    right: 0
                }
            },
            fill: {
                colors: ['#F44336'],
                type: "gradient",
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.8,
                    opacityTo: 0.9,
                    stops: [0, 90, 100]
                }
            },
            stroke: {
                show: true,
                curve: 'smooth',
                lineCap: 'round',
                colors: ['#F44336'],
                width: 4,
                dashArray: 0,      
            },
            markers: {
                colors: ['#F44336'],
            },
            tooltip: {
                enabled: true,
                fillSeriesColor: false,
                
            }

        },
        
        series: [
            {
                name: "Kasus",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
        ]
    };

    render() {
        return (
            <Card body className={"border-0 shadow-sm rounded mb-3 pb-0"}>
                <CardTitle tag="h6" className={"mb-0"}>Akumulasi Kasus</CardTitle>
                <ApexChart
                    options={this.state.options}
                    series={this.state.series}
                    type="area"
                    width="100%"
                />
            </Card>
        );
    }
}

export default Chart;
