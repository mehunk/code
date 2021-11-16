# 手动触发鼠标移入事件

## 背景

最近在开发的时候需要修改一个鼠标移到一个元素上后显示的一个元素的样式。但是由于只有鼠标移上去的时候才显示，移出以后就隐藏，因此很难调试。

## 目标

手动触发元素的鼠标移入事件，使隐藏的元素显示出来。

## 手动触发 DOM 事件

直接使用 DOM 接口 [`EventTarget.dispatchEvent()`][MDN - dispatchEvent] 向一个指定的事件目标派发一个事件。

## 手动触发鼠标移入事件

接下来我们就创建一个[鼠标移入事件][MDN - mouseenter event]，然后再使用上述接口触发该事件。

```javascript
const el = document.querySelector('whatever')
const mouseenterEvent = new Event('mouseenter')

el.dispatchEvent(mouseenterEvent)
```

## 参考资料

- [MDN - dispatchEvent][MDN - dispatchEvent]
- [MDN - mouseenter event][MDN - mouseenter event]

[MDN - dispatchEvent]: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent
[MDN - mouseenter event]: https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event
