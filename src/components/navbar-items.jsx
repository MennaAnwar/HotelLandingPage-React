import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

export default function Items({ link, text }) {
  return (
    <div className={`navb-items d-flex item  `}>
      <Link
        id={text}
        to={link}
        onClick={(e) => {
          if (e.target.id === "Contact") document.scrollToBottom();
        }}
      >
        {text}
      </Link>
    </div>
  );
}
