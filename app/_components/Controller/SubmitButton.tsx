"use client";

import { isSubmittedAtom } from "@/app/atom";
import { Button } from "@/components/ui/button";
import { useAtom } from "jotai";

export default function SubmitButton() {
  const [isSubmitted, setIsSubmitted] = useAtom(isSubmittedAtom);

  return (
    <Button className="mx-4 my-1" onClick={() => setIsSubmitted(!isSubmitted)}>
      {isSubmitted ? "Hide Answer" : "Submit"}
    </Button>
  );
}
