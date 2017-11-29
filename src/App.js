import React, { Component } from 'react';
import {
  PageHeader,
  Table
} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Container">
          <PageHeader>
            <img src="./images/meteor.jpeg"/>
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
              
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default App;
