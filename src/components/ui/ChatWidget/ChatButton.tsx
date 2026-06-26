"use client";

import { BotAvatar } from './BotAvatar';

interface ChatButtonProps {
  open: boolean;
  onClick: () => void;
  showBadge: boolean;
}

export function ChatButton({ open, onClick, showBadge }: ChatButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label="채팅 열기"
      className="cb-fab"
      style={{
        position: 'relative', width: 60, height: 60,
        borderRadius: '50%', border: 'none', cursor: 'pointer',
        padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: open
          ? 'linear-gradient(135deg,#6c7cf0,#5566e0)'
          : 'radial-gradient(circle at 34% 28%,#fff,#9fb2ff 45%,#6c7cf0 100%)',
        boxShadow: '0 20px 38px -14px rgba(108,124,240,.75),inset 0 1px 0 rgba(255,255,255,.5)',
        transition: 'transform .35s cubic-bezier(.2,.9,.3,1.3),background .35s ease,box-shadow .3s ease',
        animation: open ? 'none' : 'cbFloat 3.4s ease-in-out infinite',
      }}
    >
      <div style={{
        position: 'absolute',
        transition: 'opacity .3s ease,transform .3s ease',
        opacity: open ? 0 : 1,
        transform: open ? 'scale(.6) rotate(-90deg)' : 'scale(1)',
      }}>
        <BotAvatar size={36} />
      </div>
      <div style={{
        position: 'absolute',
        transition: 'opacity .3s ease,transform .3s ease',
        opacity: open ? 1 : 0,
        transform: open ? 'scale(1)' : 'scale(.6) rotate(90deg)',
      }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </div>
      {showBadge && (
        <span style={{
          position: 'absolute', top: -2, right: -2,
          width: 20, height: 20, borderRadius: '50%',
          background: '#ff7a5e', color: '#fff',
          fontSize: 12, fontWeight: 700,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 10px -3px rgba(255,122,94,.8)',
          border: '2px solid #fff',
        }}>
          1
        </span>
      )}
    </button>
  );
}
