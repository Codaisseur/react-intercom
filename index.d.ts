import { Component } from 'react';

export interface IReactIntercomProps {
  appID: string;
  [key: string]: any;
}

export function IntercomAPI(...args: any[]): void;

export default class Intercom extends Component<IReactIntercomProps> {}
