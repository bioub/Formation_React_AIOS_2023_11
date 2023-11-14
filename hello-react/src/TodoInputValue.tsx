import { ReactNode } from "react"

type Props = {
  value: string
};

function TodoInputValue({ value }: Props): ReactNode {
  return (
    <input className="TodoInputValue" defaultValue={value} />
  )
}

export default TodoInputValue;
