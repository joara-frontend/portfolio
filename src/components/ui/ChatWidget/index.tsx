"use client";

import { useState, useRef } from 'react';
import { ChatButton } from './ChatButton';
import { ChatModal } from './ChatModal';

export interface Message {
  id: number;
  isBot: boolean;
  text?: string;
  typing?: boolean;
}

export interface QuickReply {
  key: string;
  label: string;
  onClick: () => void;
}

const QUICK_DEFS = [
  { key: 'career', label: '💼 경력이 궁금해요' },
  { key: 'skills', label: '🛠 기술 스택' },
  { key: 'projects', label: '📁 프로젝트' },
  { key: 'contact', label: '✉️ 연락하기' },
];

const INTRO_MESSAGES: Message[] = [
  { id: 1, isBot: true, text: '안녕하세요, 조아라님의 포트폴리오 도우미 아라봇이에요 😊' },
  { id: 2, isBot: true, text: '궁금한 내용을 입력하시거나 아래 버튼을 골라주세요!' },
  { id: 3, isBot: true, text: '버튼 외에도 취미, 특기, 일하는 방식 등 조아라에 관한 다양한 내용을 자유롭게 질문하실 수 있어요!' },
];

interface GeminiPart {
  text: string;
}

interface GeminiContent {
  role: 'user' | 'model';
  parts: GeminiPart[];
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [history, setHistory] = useState<GeminiContent[]>([]);
  const [draft, setDraft] = useState('');
  const [showQuick, setShowQuick] = useState(false);
  const [seenIntro, setSeenIntro] = useState(false);
  const [badge, setBadge] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    setTimeout(() => {
      if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }, 40);
  };

  const togglePanel = () => {
    if (open) { setOpen(false); return; }
    setOpen(true);
    setBadge(false);
    if (!seenIntro) {
      setSeenIntro(true);
      setMessages(prev => [...prev, ...INTRO_MESSAGES]);
      setShowQuick(true);
    }
    scrollToBottom();
  };

  const pushUser = (text: string) => {
    setMessages(prev => [...prev, { id: Date.now(), isBot: false, text }]);
    setShowQuick(false);
    setDraft('');
    scrollToBottom();
  };

  const botReply = async (userText: string) => {
    const typingId = Date.now() + 1;
    setMessages(prev => [...prev, { id: typingId, isBot: true, typing: true }]);
    scrollToBottom();

    const nextHistory: GeminiContent[] = [
      ...history,
      { role: 'user', parts: [{ text: userText }] },
    ];

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextHistory }),
      });

      const data = await res.json() as { reply?: string; error?: string };
      const reply = data.reply ?? data.error ?? '죄송해요, 응답을 가져오는 중 오류가 발생했어요.';

      setHistory([
        ...nextHistory,
        { role: 'model', parts: [{ text: reply }] },
      ]);
      setMessages(prev =>
        prev.map(m => m.id === typingId ? { id: typingId, isBot: true, text: reply } : m)
      );
    } catch {
      setMessages(prev =>
        prev.map(m =>
          m.id === typingId
            ? { id: typingId, isBot: true, text: '죄송해요, 네트워크 오류가 발생했어요. 잠시 후 다시 시도해 주세요.' }
            : m
        )
      );
    }

    setShowQuick(true);
    scrollToBottom();
  };

  const handleQuick = (label: string) => {
    pushUser(label);
    botReply(label);
  };

  const handleSend = () => {
    const text = draft.trim();
    if (!text) return;
    pushUser(text);
    botReply(text);
  };

  const quickReplies: QuickReply[] = QUICK_DEFS.map(q => ({
    ...q,
    onClick: () => handleQuick(q.label),
  }));

  return (
    <div style={{
      position: 'fixed', right: 28, bottom: 96, zIndex: 80,
      fontFamily: "'Quicksand','Pretendard',-apple-system,sans-serif",
    }}>
      <ChatModal
        open={open}
        onClose={() => setOpen(false)}
        messages={messages}
        showQuick={showQuick}
        quickReplies={quickReplies}
        draft={draft}
        onDraftChange={setDraft}
        onSend={handleSend}
        scrollRef={scrollRef}
      />
      <ChatButton open={open} onClick={togglePanel} showBadge={badge && !open} />
    </div>
  );
}
