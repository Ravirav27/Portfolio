import DotGrid from "@/components/effects/DotGrid";

export function DotGridSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <DotGrid
          dotSize={10}
          gap={15}
          baseColor="#5227FF"
          activeColor="#5227FF"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
    </section>
  );
}
