export default function HeroContent({ progress = 0 }) {
  return (
    <div
      style={{
        transform: `translateY(${0 + progress * 80}px)`,
        opacity: 1 - progress,
        filter: `blur(${progress * 6}px)`
      }}
      className="text-right"
    >

      <h1 className="text-8xl font-bold text-white leading-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]">
        Ricardo Sánchez Herrera
      </h1>
    <p className="text-8xl tracking-[0.25em] text-right opacity-90
                  bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500
                  bg-clip-text text-transparent animate-pulse-slow">
      SOFTWARE DEVELOPER
    </p>

      

      
    </div>
  );
}