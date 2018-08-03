import React, { Fragment, Component } from 'react';

export default class Main extends Component {
  state = {
    repositoryInput: '',
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleAddRepository}>
          <input
            placeholder="Digite um repositorio"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Adicionar</button>
        </form>

        <ul>
          <li>
            <p>
              <strong>facebook/react</strong> (A desktop app for inspecting your React JS and React
              Native projects. macOS, Linux, and Windows.)
            </p>
            <a href="http://api.github.com/facebook/react" alt="react">
              Link
            </a>
          </li>
        </ul>
      </Fragment>
    );
  }
}
