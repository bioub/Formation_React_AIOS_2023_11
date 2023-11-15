import { KeyboardEvent, ReactNode } from "react"

type Props = {
  value: string;
  onInputChange(val: string): void;
  onTypeEnter(): void;
};

function TodoInputValue({ value, onInputChange, onTypeEnter }: Props): ReactNode {
  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.code === 'Enter') {
      onTypeEnter();
    }  
  }

  return (
    <input className="TodoInputValue" value={value} onChange={(e) => onInputChange(e.target.value)} onKeyDown={handleKeyDown} />
  )
}

export default TodoInputValue;
