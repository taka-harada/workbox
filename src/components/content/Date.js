import React from 'react'
import Moment from 'react-moment';

class DDate extends React.Component {
  render() {
    const unixTimestamp = Date.now() / 1000;

    return (
      <div>
      <div>
        {(new Date()).toUTCString()}
        </div>
        <Moment unix utc>
            {unixTimestamp}
        </Moment>
      </div>
    )
  }
}
export default DDate;

// export default Date;
// class Date extends React.Component {
//   render() {
//     return (
//       <dev>
//         <Moment utc format="ddd, DD MMM YYYY HH:mm:ss Z">{this.props.dateToFormat}</Moment>
//       </dev>
//     )
//   }
// }
// export default Date;
