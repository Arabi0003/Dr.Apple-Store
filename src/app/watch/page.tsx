import CategoryLayout from "@/components/category/CategoryLayout";
export const metadata = { title: "Apple Watch | Dr. Apple" };
export default function WatchPage() {
  return (
    <CategoryLayout
      title="To wear it is to love it."
      subtitle="The ultimate device for a healthy life."
      tagline="Watch"
      items={[
        { name: "Apple Watch Ultra 2", desc: "The most rugged and capable Apple Watch. Built for outdoor adventures." },
        { name: "Apple Watch Series 9", desc: "Smarter. Brighter. Mightier. The essential companion." },
        { name: "Apple Watch SE", desc: "All the essentials. Light on price." },
        { name: "Watch Bands", desc: "Customize your look with our authentic collection of Apple Watch bands." }
      ]}
    />
  );
}

