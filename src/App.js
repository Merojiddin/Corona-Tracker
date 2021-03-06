import React from 'react';

import { Cards, Charts, CountryPicker } from './components';
import styles from './App.module.css'
import { fetchData } from './api'

import coronaImage from './images/image.png'

class App extends React.Component {

  state = {
    data: {},
    country: ''
  }
  

  async componentDidMount() {
    const data = await fetchData()
    this.setState({ data: data})
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({data: fetchedData, country: country})
    console.log(fetchedData)
    

  }
  
  render() {
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19"/>
        <Cards data = {this.state.data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Charts  data={this.state.data} country={this.state.country}/>
        
      </div>
    );
  }
}

export default App;
