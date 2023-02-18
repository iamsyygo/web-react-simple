import React, { PureComponent, createRef } from "react";
import {
  SwitchTransition,
  CSSTransition,
  TransitionGroup,
} from "react-transition-group";
import "./index.css";
export default class Home extends PureComponent<
  any,
  {
    isGo: boolean;
  }
> {
  logo: React.RefObject<HTMLDivElement>;
  constructor(props: any) {
    super(props);
    this.handleState = this.handleState.bind(this);
    this.logo = createRef<HTMLDivElement>();
    this.state = {
      isGo: false,
    };
  }
  handleState() {
    const { isGo } = this.state;
    this.setState({
      isGo: !isGo,
    });
  }
  render() {
    const { logo } = this;
    const { isGo } = this.state;
    const { slot } = this.props;
    console.log(slot);

    return (
      <>
        <button onClick={this.handleState}>{isGo ? "NO" : "OFF"}</button>
        <SwitchTransition mode="out-in">
          <CSSTransition
            nodeRef={logo}
            key={isGo ? "ok" : "fail"}
            classNames="with"
            timeout={2000}
          >
            <div ref={logo}>
              <div>
                <a href="https://reactjs.org" target="_blank" rel="noreferrer">
                  <img
                    src={isGo ? slot.react : slot.vite}
                    className="logo react"
                    alt="React logo"
                  />
                </a>
              </div>
              <h1>{isGo ? "React" : "Vite"}</h1>
            </div>
          </CSSTransition>
        </SwitchTransition>
        <UlList />
      </>
    );
  }
}

class UlList extends PureComponent<any, any> {
  constructor(props: any) {
    super(props);
    const list = [
      {
        name: "A",
        id: "1",
      },
      {
        name: "B",
        id: "2",
      },
      {
        name: "C",
        id: "3",
      },
      {
        name: "D",
        id: "4",
      },
    ];
    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.state = {
      list,
    };
  }
  handleAdd() {
    const { list } = this.state;
    const newList = [
      ...list,
      {
        name: list[list.length - 1].id++,
        id: list[list.length - 1].id++,
      },
    ];
    this.setState({
      list: newList,
    });
  }
  handleDelete() {
    const { list } = this.state;
    list.pop();
    const newList = [...list];
    this.setState({
      list: newList,
    });
  }
  render() {
    console.log(`------`);

    return (
      <>
        <button onClick={this.handleAdd}>新增</button>
        <button onClick={this.handleDelete}>删除</button>

        <TransitionGroup>
          {this.state.list.map(({ name = "", id = "" }, index: number) => {
            return (
              <CSSTransition timeout={2000} classNames="group" key={id}>
                <li style={{ transitionDelay: `${100 * index}ms` }}>
                  {name} - {id}
                </li>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </>
    );
  }
}
