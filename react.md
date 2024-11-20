useState 是一个 Hook，用于在函数组件中添加状态（state）。useState 返回一个数组，其中第一个元素是当前状态的值，第二个元素是一个函数，用于更新该状态的值。

useEffect 的依赖数组用于控制何时执行副作用。如果依赖数组为空，useEffect 只在组件挂载时执行一次。如果依赖数组包含变量，useEffect 会在这些变量变化时重新执行。

useRef

memo 高阶组件：传入一个组件然后生成一个组件
该hooks用来减少不必要的渲染，它搭配useCallback和useMemo使用