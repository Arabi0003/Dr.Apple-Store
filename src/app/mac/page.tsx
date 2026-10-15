import CategoryLayout from "@/components/category/CategoryLayout";
export const metadata = { title: "Mac | Dr. Apple Kano" };
export default function MacPage() {
  return (
    <CategoryLayout
      title="Mind-blowing. Head-turning."
      subtitle="Supercharged by M3. The most advanced Mac lineup ever."
      tagline="Mac"
      items={[
        { name: "MacBook Pro 14” & 16”", desc: "The ultimate pro laptop. Featuring the M3, M3 Pro, and M3 Max chips." },
        { name: "MacBook Air 13” & 15”", desc: "Strikingly thin and fast. Powered by M3. Perfect for students and everyday use." },
        { name: "iMac", desc: "The world's best all-in-one desktop. Stunning 24-inch 4.5K Retina display." },
        { name: "Mac mini & Studio", desc: "Desktop powerhouses. Compact designs that fit anywhere." }
      ]}
    />
  );
}
