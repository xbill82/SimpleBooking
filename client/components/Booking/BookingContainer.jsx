import React from 'react';

export default class SlideContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Yo! Je vais venir aux Contes!</h1>
        <p>Je vais venir
          <select>
            <option>Tout(e) seul(e)</option>
            <option>A 2 personnes</option>
            <option>A 3 personnes</option>
          </select>
        </p>
      </div>
    )
  }

  componentDidMount() {}

  componentDidUpdate() {}

}
