import { useEffect, useState } from "react";
import { randomColor } from "../../utils/utils";

export default function Texture() {
  const [color, setColor] = useState<string>("");

  useEffect(() => {
    setColor(randomColor("ff0000", "#831313"))
  }, [])

  return (
    <>
      <span className="texture" style={{background: color}}></span>
    </>
  )
}