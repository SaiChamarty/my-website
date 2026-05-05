import React from "react";
import "./Chat.css";

export default function Chat() {
  return (
    <div className="chat-shell">

      {/* ── HEADER ── */}
      <div className="chat-head">
        <div className="chat-head-left">
          <div className="chat-title">Saiborg</div>
          <div className="chat-meta">
            <span className="chat-online-dot" />
            ONLINE — DEMO MODE
          </div>
        </div>
      </div>

      {/* ── MESSAGES ── */}
      <div className="chat-body">
        <div className="chat-msg chat-msg-bot">
          <div className="chat-msg-label">saiborg /</div>
          This is where the completed Saiborg LLM will be available for interaction.
          Intended as a transformer-based language model trained from scratch on
          ethically scraped text data. Details and training updates coming soon!
        </div>
        <div className="chat-msg chat-msg-bot chat-thinking">
          <div className="chat-msg-label">saiborg /</div>
          <div className="chat-dots">
            <span className="chat-dot" />
            <span className="chat-dot" />
            <span className="chat-dot" />
          </div>
        </div>
      </div>

      {/* ── INPUT ── */}
      <div className="chat-input-row">
        <div className="chat-input-field">Type a message...</div>
        <div className="chat-send-btn">→</div>
      </div>

    </div>
  );
}
