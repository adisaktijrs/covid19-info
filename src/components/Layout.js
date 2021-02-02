import { Component } from 'react';
import Header from './Header';
import Main from './Main';
import axios from 'axios';
import Country from './Country';
import ChartArea from './ChartArea';

class Layout extends Component {
  state = {
    data: [],
    countries: [],
    selectedCountry: null
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
  }

  componentDidUpdate() {
    if (this.state.selectedCountry && this.state.selectedCountry !== this.state.data.country) {
      axios.get('https://disease.sh/v3/covid-19/countries/' + this.state.selectedCountry)
        .then(response => {
          this.setState({data: response.data});
        })
        }
  }

  selectedCuntryHandler = (id) => {
    this.setState({ selectedCountry: id });
  }

  render() {
    return (
      <div>
        <Header />
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
        <ChartArea />
      </div>
    )
  }
}

export default Layout;