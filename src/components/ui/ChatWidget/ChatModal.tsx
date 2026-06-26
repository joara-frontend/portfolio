"use client";

import type { RefObject } from 'react';
import type { Message, QuickReply } from './index';
import { BotAvatar } from './BotAvatar';
import { MessageList } from './MessageList';
import { InputBar } from './InputBar';

interface ChatModalProps {
  open: boolean;
  onClose: () => void;
  messages: Message[];
  showQuick: boolean;
  quickReplies: QuickReply[];
  draft: string;
  onDraftChange: (value: string) => void;
  onSend: () => void;
  scrollRef: RefObject<HTMLDivElement>;
}

export function ChatModal({
  open, onClose, messages, showQuick, quickReplies,
  draft, onDraftChange, onSend, scrollRef,
}: ChatModalProps) {
  return (
    <div style={{
      position: 'absolute', bottom: 76, right: 0, width: 370, maxWidth: '88vw',
      transformOrigin: 'bottom right',
      transform: open ? 'translateY(0) scale(1)' : 'translateY(16px) scale(.92)',
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'auto' : 'none',
      transition: 'opacity .32s ease, transform .42s cubic-bezier(.2,.9,.3,1.3)',
    }}>
      <div style={{
        display: 'flex', flexDirection: 'column', height: 520, maxHeight: '72vh',
        borderRadius: 26, overflow: 'hidden',
        background: 'rgba(255,255,255,.82)',
        backdropFilter: 'blur(22px)', WebkitBackdropFilter: 'blur(22px)',
        border: '1px solid rgba(255,255,255,.85)',
        boxShadow: '0 40px 80px -28px rgba(70,80,160,.55),inset 0 1px 0 rgba(255,255,255,.7)',
      }}>

        {/* header */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 12, padding: '16px 18px',
          background: 'linear-gradient(135deg,#7c8bf5,#6c7cf0)', color: '#fff', flex: 'none',
        }}>
          <div style={{ position: 'relative', width: 42, height: 42, flex: 'none' }}>
            <BotAvatar size={42} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: "'Quicksand','Pretendard',sans-serif", fontSize: 16, fontWeight: 700, lineHeight: 1.2 }}>
              아라봇<span style={{ fontWeight: 500, opacity: 0.85 }}> · ARA-bot</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 2 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#7dffce', boxShadow: '0 0 0 3px rgba(125,255,206,.3)', display: 'block' }} />
              <span style={{ fontSize: 12, opacity: 0.92 }}>보통 몇 초 안에 응답해요</span>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="닫기"
            className="cb-btn"
            style={{
              flex: 'none', width: 32, height: 32, border: 'none', cursor: 'pointer',
              borderRadius: '50%', background: 'rgba(255,255,255,.2)', color: '#fff',
              fontSize: 17, display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            ✕
          </button>
        </div>

        <MessageList
          messages={messages}
          showQuick={showQuick}
          quickReplies={quickReplies}
          scrollRef={scrollRef}
        />

        <InputBar value={draft} onChange={onDraftChange} onSend={onSend} />
      </div>
    </div>
  );
}
