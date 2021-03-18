const e = React.createElement;

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    if (this.state.clicked) {
      return "Voce clicou no botao.";
    }

    return e(
      "button",
      { onClick: () => this.setState({ clicked: true }) },
      "Meu botao React"
    );
  }
}

const domContainer = document.querySelector("#react-container");
ReactDOM.render(e(Button), domContainer);
