import React, { Component } from 'react';
import s from './FAQ.module.css';
import FAQItem from './FAQItem';

export default class FAQ extends Component {

  state = {
    visible: false,
    keys: [],
  };
  hendleOpenQuestion = () => {
    this.setState({ visible: true });
  };
  hendleCloseQuestion = () => {
    this.setState({ visible: false ,keys:[]});
  };
  toggleQuestionOnKey = e => {
    let key = e.target.textContent;
    this.setState(prevState => ({
      keys: prevState.keys.includes(key)
        ? prevState.keys.filter(item => item !== key)
        : [...prevState.keys, key],
    }));
  };
  render() {
    return (
      <div className={s.container}>
        <div className={s.accordion}>
          <h1>FAQ</h1>
          <button
            type="button"
            onClick={this.hendleOpenQuestion}
            className={s.btn}
            id="expand-all"
          >
            Expand All
          </button>
          <button
            type="button"
            onClick={this.hendleCloseQuestion}
            className={s.btn}
            id="collapse-all"
          >
            Collapse All
          </button>
          <FAQItem
            keys={this.state.keys}
            visible={this.state.visible}
            toggleQuestionOnKey={this.toggleQuestionOnKey}
          />
        </div>
      </div>
    );
  }
}
