
import styles from './Select.module.css';
import { ReactNode, useEffect, useRef, useState } from "react"

type Props = {
  items: string[];
  selected: string;
  onSelected(v: string): void;
}

function Select({ items, selected, onSelected }: Props): ReactNode {
  const [menuOpen, setMenuOpen] = useState(false);
  const hostRef = useRef<HTMLDivElement>(null);

  function handleSelectedClick() {
    setMenuOpen(!menuOpen);
  }

  function handleItemClick(item: string) {
    onSelected(item);
  }

  useEffect(() => {
    function handleWindowClick(event: MouseEvent) {
      if (!hostRef.current?.contains((event.target as HTMLElement))) {
        setMenuOpen(false);
      }
    }
    window.addEventListener('click', handleWindowClick)
    return () => {
      window.removeEventListener('click', handleWindowClick)
    }
  }, [])

  return (
    <div className="Select" ref={hostRef}>
      <div className={styles.selected} onClick={handleSelectedClick}>{selected}</div>
      {menuOpen && <div className={styles.menu}>
        {items.map((item) => <div className={styles.item} key={item} onClick={() => handleItemClick(item)}>{item}</div>)}
      </div>}
    </div>
  )
}

export default Select;
