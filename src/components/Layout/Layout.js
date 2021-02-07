import { Component, Fragment } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import axios from 'axios';
import Country from '../Country/Country';
import ChartArea from '../Chart/ChartArea';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';

class Layout extends Component {
    state = {
        data: [],
        countries: [],
        selectedCountry: null,
        historical: [],
        loading: true
    }

    componentDidMount() {
        axios.get('https://disease.sh/v3/covid-19/all')
            .then(response => {
                const newArr = { ...response.data, country: 'Global' };
                this.setState({ data: newArr });
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

        axios.get('https://disease.sh/v3/covid-19/historical/all')
            .then(response => {
                // const [a, b] = [Object.keys(response.data.cases), Object.values(response.data.cases)];
                this.setState({ historical: response.data, loading: false });
            })
            .catch(error => {
                console.log(error);
            });
    }

    componentDidUpdate() {
        if (this.state.selectedCountry && this.state.selectedCountry !== this.state.data.country) {
            axios.get('https://disease.sh/v3/covid-19/countries/' + this.state.selectedCountry)
                .then(response => {
                    this.setState({ data: response.data });
                })
                .catch(error => {
                    console.log(error);
                });
            axios.get('https://disease.sh/v3/covid-19/historical/' + this.state.selectedCountry)
                .then(response => {
                    this.setState({ historical: response.data });
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    selectedCuntryHandler = (id) => {
        this.setState({ selectedCountry: id });
    }

    render() {
        let process = <Loader />
        if (!this.state.loading) {
            process = <Fragment>
                <Country
                    data={this.state.countries}
                    specificData={this.state.data.population}
                    country={this.state.data.country}
                    clicked={this.selectedCuntryHandler}
                    flag={this.state.data?.countryInfo?.flag} />
                <Main
                    updated={this.state.data.updated}
                    totalCases={this.state.data.cases}
                    newCases={this.state.data.todayCases}
                    totalRecovered={this.state.data.recovered}
                    newRecovered={this.state.data.todayRecovered}
                    totalDeath={this.state.data.deaths}
                    newDeath={this.state.data.todayDeaths}
                    activeCases={this.state.data.active}
                    isUpdate={this.state.selectedCountry} />
                <ChartArea
                    data={this.state.historical}
                    ratio={this.state.data} />
                <Footer />
            </Fragment>
        }
        return (
            <div>
                <Header />
                {process}
            </div>
        )
    }
}

export default Layout;