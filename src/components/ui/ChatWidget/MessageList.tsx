"use client";

import type { RefObject } from 'react';
import type { Message, QuickReply } from './index';
import { MessageItem } from './MessageItem';

interface MessageListProps {
  messages: Message[];
  showQuick: boolean;
  quickReplies: QuickReply[];
  scrollRef: RefObject<HTMLDivElement>;
}

export function MessageList({ messages, showQuick, quickReplies, scrollRef }: MessageListProps) {
  return (
    <div
      ref={scrollRef}
      className="cb-scroll"
      style={{
        flex: 1, overflowY: 'auto', padding: '18px 16px 8px',
        display: 'flex', flexDirection: 'column', gap: 12,
        background: 'linear-gradient(180deg,rgba(245,247,255,.5),rgba(250,248,255,.3))',
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: 2 }}>
        <span style={{
          fontSize: 11, fontWeight: 600, color: '#9095b4',
          background: 'rgba(255,255,255,.7)', padding: '4px 12px', borderRadius: 20,
        }}>오늘</span>
      </div>

      {messages.map(m => <MessageItem key={m.id} message={m} />)}

      {showQuick && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, padding: '4px 0 6px 38px', animation: 'cbPop .4s ease both' }}>
          {quickReplies.map(q => (
            <button
              key={q.key}
              onClick={q.onClick}
              className="cb-chip"
              style={{
                cursor: 'pointer', fontFamily: 'inherit',
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '9px 15px', borderRadius: 14,
                background: 'rgba(255,255,255,.85)', border: '1px solid rgba(108,124,240,.28)',
                color: '#5566e0', fontWeight: 600, fontSize: 13.5,
                boxShadow: '0 8px 18px -12px rgba(90,100,180,.5)',
              }}
            >
              {q.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
