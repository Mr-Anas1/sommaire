import { Button } from "@/components/ui/button";
import { Sparkle } from "lucide-react";

export default function HeroSection() {
  return (
    <section>
      <div className="">
        <div className="flex">
          <Sparkle className="h-6 w-6 mr-2 text-rose-600 animate-pulse" />
          <p>Powered by AI</p>
        </div>
        <h1>Transform PDFs into concise summaries</h1>
        <h2>Get a beautiful summary reel of the document in seconds.</h2>
        <Button>Try Sommaire</Button>
      </div>
    </section>
  );
}
