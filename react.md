# React
react 是一个用于构建用户界面的 JavaScript 库，特别适用于构建单页应用程序。它由 Facebook 开发和维护，采用组件化的思想，使得代码复用性和可维护性更高。
# JSX
JSX 是一种 JavaScript 的语法扩展，允许在 JavaScript 中编写类似 HTML 的语法。JSX 代码最终会被编译成普通的 JavaScript 代码。
# 生命周期
Mounting：constructor、static getDerivedStateFromProps、render、componentDidMount
Updating：static getDerivedStateFromProps、shouldComponentUpdate、render、getSnapshotBeforeUpdate、componentDidUpdate
Unmounting：componentWillUnmount
Error Handling：static getDerivedStateFromError、componentDidCatch
# Hooks
useState 是一个 Hook，用于在函数组件中添加状态（state）。useState 返回一个数组，其中第一个元素是当前状态的值，第二个元素是一个函数，用于更新该状态的值。
useEffect 的依赖数组用于控制何时执行副作用。如果依赖数组为空，useEffect 只在组件挂载时执行一次。如果依赖数组包含变量，useEffect 会在这些变量变化时重新执行。
useContext：用于访问 React 的 Context。
useReducer：用于复杂的状态逻辑管理。
useCallback：用于 memoize 回调函数。
useMemo：用于 memoize 计算结果。
useRef：用于访问 DOM 元素或在组件之间共享可变数据。
memo 高阶组件：传入一个组件然后生成一个组件
该hooks用来减少不必要的渲染，它搭配useCallback和useMemo使用
# Context API
Context API 是 React 提供的一种在组件树中传递数据的方式，无需通过 props 逐层传递。使用步骤如下：
创建 Context：const MyContext = React.createContext(defaultValue);
提供 Context：<MyContext.Provider value={value}>
消费 Context：<MyContext.Consumer>{value => /* render something based on the context */}</MyContext.Consumer> 或 useContext(MyContext)
# react的性能优化
使用 React.memo 或 PureComponent 避免不必要的渲染。
使用 useCallback 和 useMemo 避免不必要的函数和计算。
使用 shouldComponentUpdate 控制组件的更新。
使用虚拟滚动（如 react-window）处理大量列表数据。
使用懒加载和代码分割（如 React.lazy 和 Suspense）优化初始加载时间。