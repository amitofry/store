import React from 'react';
import Product from '../ProductComponent/Product';
import './Concerts.css'

class Concerts extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      today: new Date().toISOString().substring(0, 10),
      product: null,
      events: null,
      date: '',
      city: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit (event) {
    event.preventDefault();

    const product = this.props.productList.find(product => product.name === this.state.city);

    if (!product) {
      this.setState({
        product: null,
        events: null
      })
      return
    }

    this.findUpcomingEvents(product.id, this.state.date, this.state.date).then(upcomingEvents => {
      this.setState({
        product: product,
        events: upcomingEvents
      })
    })
  }

  findUpcomingEvents(metro_area_id, min_date, max_date) {
    let url = 'https://api.songkick.com/api/3.0/metro_areas/' + metro_area_id + '/calendar.json?apikey=8NE1zK8cPERqD8IJ'
    if (min_date) url += '&min_date=' + min_date
    if (max_date) url += '&max_date=' + max_date

    return fetch(url).then(response => {
      if (response.status !== 200) return null
      return response.json().then(data => {
        if (data.resultsPage.status !== 'ok') return null
        return data.resultsPage.results.event || []
      })
    })
  }

  render = () => {
    
    const listItems = this.state.events && this.state.events.map(event => {
      return <li key={event.id}>
        <a href={event.uri} target="_blank">{event.displayName}</a>
      </li>
    })

    if (listItems && !listItems.length) {
      listItems.push(<li key="empty" className="no-results">No upcoming shows in {this.state.product.name}</li>)
    }

    return (
      <div>
        <h1>Concerts</h1>
        <div className="concerts-container">
          <form onSubmit={this.handleSubmit}>
            <label>
              <div>Where are you traveling?</div>
              <input type="search" list="cities" name="city" onChange={this.handleChange} />
            </label>

            <datalist id="cities">
              {this.props.productList.map(product => {
                return <option key={product.name} value={product.name} />
              })}
            </datalist>

            <label>
              <div>When are you going?</div>
              <input type="date" name="date" min={this.state.today} onChange={this.handleChange} />
            </label>

            <button type="submit" className="search_button">Search</button>

          </form>

          {listItems && <ol className="upcoming-events">
            {listItems}
          </ol>}

          {this.state.product &&
            <Product {...this.state.product}
              onAddToCart={this.props.onAddToCart}
              onAddToFavorites={this.props.onAddToFavorites}
              userName={this.props.userName} />
          }
          
      </div>
    </div>      

    )
  }
}


export default Concerts;
