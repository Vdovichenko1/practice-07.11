import React, { Component } from 'react';
import s from './Accrodion.module.css';
export default class Accordion extends Component {
  state = {
    visible: false,
  };

  toggleAccordion = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    return (
      <div className={s.container}>
        <div className={s.accordion}>
          <div  onClick={this.toggleAccordion}>
            <p className={s.title}>First Question</p>
            {this.state.visible && (
              <div className={s.content}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  eu interdum diam. Donec interdum porttitor risus non bibendum.
                  Maecenas sollicitudin eros in quam imperdiet placerat. Cras
                  justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec
                  dignissim arcu nec elit faucibus condimentum. Donec facilisis
                  consectetur enim sit amet varius. Pellentesque justo dui,
                  sodales quis luctus a, iaculis eget mauris. Aliquam dapibus,
                  ante quis fringilla feugiat, mauris risus condimentum massa,
                  at elementum libero quam ac ligula. Pellentesque at rhoncus
                  dolor. Duis porttitor nibh ut lobortis aliquam. Nullam eu
                  dolor venenatis mauris placerat tristique eget id dolor.
                  Quisque blandit adipiscing erat vitae dapibus. Nulla aliquam
                  magna nec elementum tincidunt.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
