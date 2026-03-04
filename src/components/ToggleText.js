import React, { useState, useRef } from "react";
import "./ToggleText.css";

function ToggleText() {

  const text = useRef(null);

  const [visible, setVisible] = useState(true);
  const [time, setTime] = useState(0.5);

  function toggle() {
    setVisible(!visible);
  }

  function changeTime(e) {
    setTime(e.target.value);
  }

  return (
    <div>

      <h1>Скрытие и отображение текста с анимацией</h1>

      <button onClick={toggle}>
        {visible ? "Скрыть текст" : "Показать текст"}
      </button>

      <input
        type="text"
        value={time}
        onChange={changeTime}
      />

      <div
        ref={text}
        className={visible ? "text show" : "text hide"}
        style={{ transitionDuration: time + "s" }}
      >
        Это скрываемый текст. Нажмите кнопку, чтобы скрыть или показать его.
      </div>

    </div>
  );
}

export default ToggleText;