import styled from "styled-components";

// styled.div 是一个返回React组件的函数(标签模板字符串)
const HomeWrapper = styled.div`
  width: 100%;
  height: 100% !important;
`;

// styled.div`` 是调用函数的另外一种写法 == styled.div()

// fun`react is ${name} in all, .e.g. ${value} is a framework`
// 输出:[
//     [ 'react is ', ' in all, .e.g. ', ' is a framework' ],
//     name,
//     value
//     ]
