import type { CSSProperties, ReactNode } from 'react';
import type { Message } from './index';
import { BotAvatar } from './BotAvatar';

function renderText(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') && part.endsWith('**')
      ? <strong key={i}>{part.slice(2, -2)}</strong>
      : part
  );
}

interface MessageItemProps {
  message: Message;
}

export function MessageItem({ message: m }: MessageItemProps) {
  const rowStyle: CSSProperties = m.isBot
    ? { display: 'flex', gap: 8, alignItems: 'flex-end', maxWidth: '85%', alignSelf: 'flex-start', animation: 'cbPop .35s ease both' }
    : { display: 'flex', justifyContent: 'flex-end', maxWidth: '82%', alignSelf: 'flex-end', animation: 'cbPop .35s ease both' };

  const bubbleStyle: CSSProperties = m.isBot
    ? { background: 'rgba(255,255,255,.95)', color: '#2b2d42', borderRadius: '4px 18px 18px 18px', padding: '11px 15px', boxShadow: '0 10px 22px -16px rgba(90,100,180,.5)', fontSize: 14, lineHeight: 1.6 }
    : { background: 'linear-gradient(135deg,#7c8bf5,#6c7cf0)', color: '#fff', borderRadius: '18px 18px 4px 18px', padding: '11px 15px', boxShadow: '0 12px 22px -12px rgba(108,124,240,.6)', fontSize: 14, lineHeight: 1.6 };

  return (
    <div style={rowStyle}>
      {m.isBot && (
        <div style={{ position: 'relative', width: 30, height: 30, flex: 'none', alignSelf: 'flex-end', marginBottom: 2 }}>
          <BotAvatar size={30} />
        </div>
      )}
      <div style={bubbleStyle}>
        {m.typing ? (
          <div style={{ display: 'flex', gap: 4, padding: '3px 2px' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#9aa0c4', animation: 'cbDot 1.2s infinite', display: 'block' }} />
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#9aa0c4', animation: 'cbDot 1.2s infinite .2s', display: 'block' }} />
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#9aa0c4', animation: 'cbDot 1.2s infinite .4s', display: 'block' }} />
          </div>
        ) : (
          <span style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{renderText(m.text ?? '')}</span>
        )}
      </div>
    </div>
  );
}
