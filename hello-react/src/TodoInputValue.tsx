import { KeyboardEvent, ReactNode, useEffect, useRef } from "react"

type Props = {
  value: string;
  onInputChange(val: string): void;
  onTypeEnter(): void;
};

function TodoInputValue({ value, onInputChange, onTypeEnter }: Props): ReactNode {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.select();
  }, []);
  
  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.code === 'Enter') {
      onTypeEnter();
    }  
  }

  return (
    <input ref={inputRef} className="TodoInputValue" value={value} onChange={(e) => onInputChange(e.target.value)} onKeyDown={handleKeyDown} />
  )
}

export default TodoInputValue;
