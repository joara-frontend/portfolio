"use client";

import type { KeyboardEvent } from 'react';

interface InputBarProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
}

export function InputBar({ value, onChange, onSend }: InputBarProps) {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div style={{
      flex: 'none', padding: '12px 14px',
      borderTop: '1px solid rgba(140,150,210,.16)',
      background: 'rgba(255,255,255,.6)',
      display: 'flex', alignItems: 'center', gap: 10,
    }}>
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="메시지를 입력해주세요"
        style={{
          flex: 1, minWidth: 0, border: 'none', outline: 'none',
          background: 'rgba(245,247,255,.9)', borderRadius: 16, padding: '13px 16px',
          fontFamily: 'inherit', fontSize: 14, color: '#2b2d42',
          boxShadow: 'inset 0 1px 3px rgba(90,100,180,.12)',
        }}
      />
      <button
        onClick={onSend}
        aria-label="전송"
        className="cb-send"
        style={{
          flex: 'none', width: 44, height: 44, border: 'none', cursor: 'pointer',
          borderRadius: 14,
          background: 'linear-gradient(135deg,#7c8bf5,#6c7cf0)', color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 12px 22px -10px rgba(108,124,240,.7)',
          transition: 'transform .25s cubic-bezier(.2,.9,.3,1.3)',
        }}
      >
        <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.4 20.4l17.45-7.48a1 1 0 0 0 0-1.84L3.4 3.6a.99.99 0 0 0-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z" />
        </svg>
      </button>
    </div>
  );
}
