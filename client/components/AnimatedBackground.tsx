export default function AnimatedBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]"
    >
      <div
        className="absolute -top-32 -left-24 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_30%_30%,hsl(var(--brand-start)/0.35),transparent_60%)] blur-3xl animate-[float-slow_10s_ease-in-out_infinite]"
      />
      <div
        className="absolute -bottom-24 -right-24 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_70%_70%,hsl(var(--brand-end)/0.35),transparent_60%)] blur-3xl animate-[float-slow_12s_ease-in-out_infinite]"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(120deg,hsl(var(--brand-start)/0.15),hsl(var(--brand-end)/0.15),transparent)] bg-[length:200%_200%] animate-[gradient-shift_18s_ease_infinite]"
      />
    </div>
  );
}
