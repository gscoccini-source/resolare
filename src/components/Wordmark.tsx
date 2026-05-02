export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-semibold tracking-tight ${className}`}>
      <span className="text-amber-500">RE</span>
      <span className="text-slate-900">solare</span>
    </span>
  );
}
