import { HTMLAttributes, ReactNode } from "react"

type Props = {
  value: string
} & HTMLAttributes<HTMLSpanElement>;

// interface Props extends HTMLAttributes<HTMLSpanElement> {
//   value: string;
// }

function TodoSpanValue({ value, ...spanProps }: Props): ReactNode {
  // const spanProps: HTMLAttributes<HTMLSpanElement> = {
  //   className: 'TodoSpanValue'
  // }

  return (
    <span {...spanProps}>
      {value}
    </span>
  )
}

export default TodoSpanValue;
