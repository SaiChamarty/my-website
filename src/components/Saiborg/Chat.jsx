import React from "react";
import "./Chat.css";

export default function Chat() {
  return (
    <div className="chat-shell">
      <div className="chat-header">Chat</div>
      <div className="chat-body">
        <div className="chat-bubble">
          This is where the completed chat LLM will be displayed for checking it out.
          Intended usage is a transformer based LLM, with text only scraped ethically
          from the internet. As this is a young project, details will be coming soon!
        </div>
      </div>
      <div className="chat-input">
        <div className="chat-input-placeholder">Type a message...</div>
      </div>
    </div>
  );
}
