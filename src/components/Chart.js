import { Card, CardTitle } from 'reactstrap';
import ApexChart from 'react-apexcharts';

const chart = (props) => {

    let categories, data = [0];
    if (props.data) {
        categories = Object.keys(props.data);
        data = Object.values(props.data);
    }

    const colors = props.type === 'cases' ? ['#F44336'] : props.type === 'recovered' ? ['#5cb85c'] : ['#6c757d'];

    const series = [{
        name: 'Cases',
        data: data
    }];

    const options = {
        chart: {
            id: "area",
            toolbar: {
                show: false
            }
        },
        colors: colors,
        xaxis: {
            show: false,
            categories: categories,
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
            colors: colors,
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
            colors: colors,
            width: 4,
            dashArray: 0,
        },
        markers: {
            colors: colors,
        },
        tooltip: {
            enabled: true,
            fillSeriesColor: false,
            y: {
                formatter: function (value) {
                    return value.toLocaleString()
                },
                title: {
                    formatter: (seriesName) => seriesName,
                },
            },

        }
    }
    
    return(
        <Card body className = { "border-0 shadow-sm rounded mb-3 pb-0"} >
            <CardTitle tag="h6" className={"mb-0 text-center"}>{props.title}</CardTitle>
            <ApexChart
                options={options}
                series={series}
                type="area"
                width="100%"
            />
        </Card>
    )
}

export default chart;
