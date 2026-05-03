const messages = [
  "FREE SHIPPING ON ORDERS OVER $75",
  "NEW DROP — TRAIN ERA COLLECTION",
  "30 DAY FREE RETURNS",
  "SHOP NOW. PAY LATER.",
];

export const AnnouncementBar = () => (
  <div className="bg-primary text-primary-foreground overflow-hidden border-b border-primary">
    <div className="flex whitespace-nowrap py-2.5 marquee">
      {[...messages, ...messages, ...messages].map((m, i) => (
        <span key={i} className="px-8 text-xs font-bold tracking-[0.2em] uppercase">
          {m} <span className="ml-8 opacity-40">/</span>
        </span>
      ))}
    </div>
  </div>
);
