import React, { Component } from 'react';
import {
  PageHeader,
  Table
} from 'react-bootstrap';
import nasaData from './nasa_Data.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rawData: nasaData,
      asteroids: []
    }

  }
    componentWillMount(){
      let nasaData = this.state.rawData.near_earth_objects
      let newAsteroids = []

      Object.keys(nasaData).forEach((date)=>{
        nasaData[date].forEach((asteroid)=>{
          newAsteroids.push({
            id: asteroid.neo_reference_id,
            name: asteroid.name,
            date: asteroid.close_approach_data[0].close_approach_date,
            diameterMin: asteroid.estimated_diameter.feet.estimated_diameter_min.toFixed(0),
            diameterMax: asteroid.estimated_diameter.feet.estimated_diameter_max.toFixed(0),
            approach: asteroid.close_approach_data[0].miss_distance.miles,
            velocity: parseFloat(asteroid.close_approach_data[0].relative_velocity.miles_per_hour).toFixed(0),
            distance: asteroid.close_approach_data[0].miss_distance.miles
          })
        })
      })
      this.setState({asteroids: newAsteroids})

    }

  render() {
    return (
      <div className="App">
        <div className="Container">
          <PageHeader>
            <img src="./images/meteor.jpeg" alt="meteor"/>
            Incoming Meteor!
          </PageHeader>
          <h5> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra lectus non dignissim consectetur. Donec congue ullamcorper magna et mollis. Cras ac hendrerit leo. Nulla facilisi. Mauris condimentum convallis luctus. Vivamus tincidunt dolor nisi, vitae congue libero placerat id. Aenean non orci facilisis, placerat sem a, consectetur nisi. Cras id blandit ex. Vivamus facilisis, lorem eu imperdiet rhoncus, tellus nisi vestibulum ipsum, nec sagittis arcu justo vitae metus.
          </h5>
          <h2> List of closest meteors to Earth </h2>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Estimated Diameter (feet)</th>
                <th>Date of Closest Approach</th>
                <th>Distance Miles</th>
                <th>Velocity (miles/hour)</th>
              </tr>
            </thead>
            <tbody>
              {this.state.asteroids.map((asteroid) =>{
                return(
                  <tr key={asteroid.id} >
                    <td>{asteroid.name}</td>
                    <td>{asteroid.diameterMin} - {asteroid.diameterMax}</td>
                    <td>{asteroid.date}</td>
                    <td>{asteroid.distance}</td>
                    <td>{asteroid.velocity}</td>
                  </tr>
                )
              })}
            
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default App;
