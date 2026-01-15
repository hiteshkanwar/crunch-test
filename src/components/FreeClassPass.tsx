import { Button } from "@/components/ui";

export default function FreeClassPass() {
  return (
    <section className="py-6 bg-gradient-primary">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-[26px] text-white mb-4">
          Come see for yourself with a{" "}
          <span className="font-bold-cond">FREE CLASS PASS</span>
        </h2>

        <Button variant="outline">SIGN ME UP</Button>
      </div>
    </section>
  );
}
