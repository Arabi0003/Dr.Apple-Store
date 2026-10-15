import CategoryLayout from "@/components/category/CategoryLayout";
export const metadata = { title: "Accessories | Dr. Apple" };
export default function AccessoriesPage() {
  return (
    <CategoryLayout
      title="Magic is in the details."
      subtitle="Explore genuine cases, chargers, and audio gear to complement your devices."
      tagline="Accessories"
      items={[
        { name: "AirPods Pro & Max", desc: "Immersive high-fidelity audio, Active Noise Cancellation, and spatial audio." },
        { name: "MagSafe Accessories", desc: "Snap on a magnetic case, wallet, or wireless charger with ease." },
        { name: "Power Adapters & Cables", desc: "100% genuine Apple fast-charging bricks and braided USB-C cables." },
        { name: "AirTag & Protection", desc: "Keep track of your items and protect your iPhone with official silicone cases." }
      ]}
    />
  );
}

