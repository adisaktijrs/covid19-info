import { Component } from 'react';
import Header from './Header';
import Main from './Main';
import axios from 'axios';
import Country from './Country';

class Layout extends Component {
    state = {
        data: [],
        countries: []
    }

    componentDidMount() {
        axios.get('https://disease.sh/v3/covid-19/all')
            .then(response => {
                this.setState({ data: response.data });
                // console.log(this.state.data);
            })
            .catch(error => {
                console.log(error);
            });

        axios.get('https://disease.sh/v3/covid-19/countries')
            .then(response => {
                const arr = [...response.data];
                const newArr = arr.sort((a, b) => {
                    return parseInt(b.cases) - parseInt(a.cases);
                });
                this.setState({ countries: newArr });
                
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <Header />
                <Country data={this.state.countries} />
                <Main
                    updated={this.state.data.updated}
                    totalCases={this.state.data.cases}
                    newCases={this.state.data.todayCases}
                    totalRecovered={this.state.data.recovered}
                    newRecovered={this.state.data.todayRecovered}
                    totalDeath={this.state.data.deaths}
                    newDeath={this.state.data.todayDeaths}
                    activeCases={this.state.data.active} />
            </div>
        )
    }
}

export default Layout;