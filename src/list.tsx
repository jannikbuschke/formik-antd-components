import * as React from "react"
import "./list.css"
import { CSSTransition, TransitionGroup } from "react-transition-group"

export function List() {
  const [items, setItems] = React.useState<{ active: boolean; name: string }[]>(
    [{ active: true, name: "item 1" }, { active: true, name: "item 2" }],
  )
  const [visible, setVisible] = React.useState<boolean>(false)
  React.useEffect(() => {
    if (items.filter((v) => !v.active).length) {
      setItems(items.map((item) => ({ ...item, active: true })))
    }
  }, [items])
  return (
    <div>
      <button
        onClick={() => {
          setVisible(true)
        }}
      >
        make visible
      </button>
      <button
        onClick={() => {
          setItems([
            ...items,
            { active: false, name: "item " + (items.length + 1) },
          ])
        }}
      >
        add one
      </button>
      <ul className="list">
        <CSSTransition
          in={visible}
          timeout={300}
          classNames="alert"
          unmountOnExit
          // onEnter={() => setShowButton(false)}
          // onExited={() => setShowButton(true)}
        >
          <li className="alert">{"hello"}</li>
        </CSSTransition>
        <TransitionGroup className="list">
          {items.map((item, index) => (
            <CSSTransition
              key={item.name}
              //   in={item.active}
              timeout={300}
              classNames="alert"
              unmountOnExit
              // onEnter={() => setShowButton(false)}
              // onExited={() => setShowButton(true)}
            >
              <li
                onClick={() => {
                  setItems(items.filter((v) => v.name != item.name))
                }}
                className="alert"
              >
                {item.name}
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
    </div>
  )
}
