import React from 'react';
import Product from '../ProductComponent/Product';
import songkick from '../../songkick'
import './UpcomingEvents.css'

class UpcomingEvents extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: null,
      days: null
    };
  }

  selectCity (product) {
    this.setState({ product: product, days: [] })
    
    const today = Date.now()
    const oneDay = 86400000

    const days = [
      { title: 'Today' },
      { title: 'Tomorrow' },
      { title: 'In 2 days' }
    ]

    const promises = days.map((day, i) => {
      const epoch = today + (oneDay * i)
      const date = new Date(epoch).toISOString().substring(0, 10)
      const options = {
        min_date: date,
        max_date: date,
        per_page: 5
      }

      return songkick.findUpcomingEvents(product.id, options)
    })

    Promise.all(promises).then(results => {
      this.setState({
        days: days.map((day, i) => {
          day.events = results[i] || []
          console.log(day, results[i])
          return day
        })
      })
    })
  }

  render = () => {
    return (
      <div>
        <h1>Upcoming Events</h1>
        <div className="upcoming-events-container">
          <div className="cities">
            {this.props.productList.map((product, i) => {
              return <a href="#" key={i} onClick={() => this.selectCity(product)}>{product.name}</a>
            })}
          </div>
          <div className="content">
            {this.state.product &&
              <Product {...this.state.product}
                onAddToCart={this.props.onAddToCart}
                onAddToFavorites={this.props.onAddToFavorites}
                userName={this.props.userName} />
            }
            {this.state.days && <div className="results days">
              {
                this.state.days.map(day => {
                return <div class="day">
                  <h4>{day.title}</h4>
                  {day.events.length ? <ol>
                    {day.events.map(event => {
                      return <li key={event.id}>
                        <a href={event.uri} target="_blank">{event.displayName}</a>
                      </li>
                    })}
                  </ol> : <div>No results</div>}
                </div>
              })}
            </div>}
          </div>
        </div>
      </div>
    )
  }
}


export default UpcomingEvents;
