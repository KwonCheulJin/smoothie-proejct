import React, { Component } from 'react';
import styled from 'styled-components';
import type { IScriptSnapshot } from 'typescript';

import { Button, Input, ToDoItem } from 'components';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Contents = styled.div`
  display: flex;
  background-color: #ffffff;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

const InputContainer = styled.div`
  display: flex;
`;

const ToDoListContainer = styled.div`
  min-width: 350px;
  height: 400px;
  overflow-y: scroll;
  border: 1px solid #bdbdbd;
  margin-bottom: 20px;
`;

interface Props {}

interface State {
  readonly toDo: string;
  readonly toDoList: string[];
  readonly error: boolean;
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      toDo: '',
      toDoList: [],
      error: false,
    };
  }

  private addToDo = (): void => {
    const { toDo, toDoList } = this.state;
    if (toDo) {
      this.setState({
        toDo: '',
        toDoList: [...toDoList, toDo],
      });
    }
  };
  private deleteTodo = (index: number): void => {
    let list = [...this.state.toDoList];
    list.splice(index, 1);
    this.setState({
      toDoList: list,
    });
  };

  private handleKeyPress = (event: any): void => {
    if (event.key === 'Enter') {
      this.addToDo();
    }
  };

  render() {
    const { toDo, toDoList, error } = this.state;
    return (
      <Container>
        {!error && (
          <Contents>
            <ToDoListContainer data-testid="toDoList">
              {toDoList.map((item, index) => (
                <ToDoItem key={item} label={item} onDelete={() => this.deleteTodo(index)} />
              ))}
            </ToDoListContainer>
            <InputContainer>
              <Input
                placeholder="할 일을 입력해 주세요"
                value={toDo}
                onKeyPress={this.handleKeyPress}
                onChange={(text) => this.setState({ toDo: text })}
              />
              <Button label="추가" onClick={this.addToDo} />
            </InputContainer>
          </Contents>
        )}
      </Container>
    );
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    console.log('getDerivedStateFromProps');
    // if (nextProps.id !== prevState.id) {
    //   return { value: nextProps.value };
    // }
    return null;
  }

  componentDidMount() {
    console.log('componenteDidMount');
  }

  getSnapshotBeforeUpdate(prevProps: Props, prevState: State) {
    console.log('getSnapshotBeforeUpdate');
    return { testData: true };
  }

  componentDidUpdate(prevProps: Props, prevState: State, snapshot: IScriptSnapshot) {
    console.log('componentDidUpdate');
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    console.log('shouldComponentUpdate');
    return true;
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.setState({
      error: true,
    });
  }
}

export default App;
