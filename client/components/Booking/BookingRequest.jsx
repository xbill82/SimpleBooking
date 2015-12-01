import React from 'react';

export default class BookingRequest extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Yo! Est-ce qu'il y a de la place?</h1>
        <div>Soirée du {this.props.date}, raconte {this.props.artistName}.</div>
        <div>Je voudrais venir &nbsp;
          <select>
            <option>Tout(e) seul(e)</option>
            <option>A 2 personnes</option>
            <option>A 3 personnes</option>
          </select>
        </div>
        <button >Je viens!</button>
      </div>
    )
  }

  componentDidMount() {}

  componentDidUpdate() {}

}

BookingRequest.defaultProps = {
  date: 'vendredi 12 mars 2012',
  artistName: 'Serge Valentin'
};
