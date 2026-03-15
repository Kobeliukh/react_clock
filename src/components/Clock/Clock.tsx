import './Clock.scss';
import React from 'react';

interface Props {
  name: string;
}

export class Clock extends React.Component<Props, {}> {
  today = new Date();

  tickTimerId = 0;

  componentDidMount() {
    this.tickTimerId = window.setInterval(() => {
      // eslint-disable-next-line no-console
      console.log(new Date().toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.tickTimerId);
  }

  render() {
    const { name } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{name}</strong>

        {' time is '}

        <span className="Clock__time">
          {this.today.toUTCString().slice(-12, -4)}
        </span>
      </div>
    );
  }
}
