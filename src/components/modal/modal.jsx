import React from "react";
import Button from "../button/button";
import { useKey } from "../../hooks/use-key";
import "./modal.css"

export function Modal({ open, onClose, children, title }) {
  useKey("Escape", () => {
    onClose();
  });

  return (
  
   
      <div className={`modal ${open ? "open" : ""}`}>
            <div className="modal-container">
                <h1 className="modal-title">{title}</h1>
                {children}
                <Button className="modal-btn" onClick={onClose}>
                    Close
                </Button>
            </div>
    </div>
  );
}


