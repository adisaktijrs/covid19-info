import { Card, CardTitle } from 'reactstrap';
import ApexChart from 'react-apexcharts';

const chartRadial = (props) => {

    const series = props.data ? [props.data.toFixed(1)] : [0];

    const options = {
        colors: ['#17a2b8'],
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 15,
                    size: "60%"
                },

                dataLabels: {
                    showOn: "always",
                    name: {
                        show: false,
                    },
                    value: {
                        offsetY: 7,
                        color: "#17a2b8",
                        fontSize: "23px",
                        show: true
                    }
                }
            }
        },

        stroke: {
            lineCap: "round",
        },
    }

    return (
        <Card body className={"border-0 shadow-sm rounded mb-3 pb-0"} >
            <CardTitle tag="h6" className={"mb-0 text-center"}>{props.title}</CardTitle>
            <ApexChart
                options={options}
                series={series}
                type="radialBar"
                width="95%"
            />
        </Card>
    )
}

export default chartRadial;
