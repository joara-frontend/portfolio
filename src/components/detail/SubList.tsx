interface SubListProps {
  dotColor: string;
  label: string;
  items: string[];
}

export default function SubList({ dotColor, label, items }: SubListProps) {
  return (
    <div>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "11px",
        }}
      >
        <span
          style={{
            width: "9px",
            height: "9px",
            borderRadius: "50%",
            background: dotColor,
            flexShrink: 0,
          }}
        />
        <span
          style={{
            fontSize: "15px",
            fontWeight: 700,
            color: "var(--ink)",
            fontFamily: "'Quicksand', 'Pretendard', sans-serif",
          }}
        >
          {label}
        </span>
      </div>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: "9px",
          paddingLeft: "17px",
        }}
      >
        {items.map((item, i) => (
          <li
            key={i}
            style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
          >
            <span
              style={{
                flexShrink: 0,
                marginTop: "8px",
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#c2b8e8",
              }}
            />
            <span
              style={{
                fontSize: "15px",
                lineHeight: 1.65,
                color: "var(--ink-2)",
                wordBreak: "keep-all",
              }}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
