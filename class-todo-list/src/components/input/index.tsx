import React, { Component } from 'react';
import styled from 'styled-components';

const InputBox = styled.input`
  flex: 1;
  font-size: 16px;
  padding: 10px 10px;
  border-radius: 8px;
  border: 1px solid #bdbdbd;
  outline: none;
`;

interface Props {
  readonly placeholder?: string;
  readonly value?: string;
  readonly onChange?: (text: string) => void;
  readonly onKeyPress?: (event: any) => void;
}

export class Input extends Component<Props> {
  render() {
    const { placeholder, value, onChange, onKeyPress } = this.props;
    return (
      <InputBox
        placeholder={placeholder}
        value={value}
        onKeyPress={onKeyPress}
        onChange={(event) => {
          if (typeof onChange === 'function') {
            onChange(event.target.value);
          }
        }}
      />
    );
  }
}
