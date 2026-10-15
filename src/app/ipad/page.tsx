import CategoryLayout from "@/components/category/CategoryLayout";
export const metadata = { title: "iPad | Dr. Apple Kano" };
export default function IpadPage() {
  return (
    <CategoryLayout
      title="Touch, draw, and type."
      subtitle="Your next computer is not a computer."
      tagline="iPad"
      items={[
        { name: "iPad Pro (M4)", desc: "The ultimate iPad experience with the most advanced display." },
        { name: "iPad Air", desc: "Serious performance in a thin and light design." },
        { name: "iPad (10th Gen)", desc: "All-new colorful design. Perfect for everyday tasks." },
        { name: "iPad mini", desc: "The full iPad experience designed to fit in one hand." }
      ]}
    />
  );
}
