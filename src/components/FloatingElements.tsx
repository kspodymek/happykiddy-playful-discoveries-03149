export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute top-20 left-10 text-6xl opacity-20 animate-float-slow">
        ✨
      </div>
      <div className="absolute top-40 right-20 text-5xl opacity-20 animate-float-slower">
        🌈
      </div>
      <div className="absolute top-1/3 right-1/4 text-6xl opacity-20 animate-float-slow">
        🧩
      </div>
      <div className="absolute bottom-20 right-10 text-5xl opacity-15 animate-float-slower">
        📚
      </div>
      <div className="absolute top-1/2 left-10 text-6xl opacity-20 animate-float">
        🎲
      </div>
      <div className="absolute top-2/3 right-1/3 text-5xl opacity-15 animate-float-slow">
        🦄
      </div>
      <div className="absolute bottom-1/3 right-20 text-6xl opacity-20 animate-float-slower">
        🚗
      </div>
    </div>
  );
}
