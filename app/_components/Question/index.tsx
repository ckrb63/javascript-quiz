import { Card, CardHeader } from "@/components/ui/card";
import QuestionCode from "./QuestionCode";
import QuestionText from "./QuestionText";

export default function Question() {
  return (
    <Card className="m-4 scrollbar-thumb-slate-300 md:mt-0 md:max-h-[80vh] md:w-1/2 md:overflow-y-scroll md:scrollbar lg:w-1/3">
      <CardHeader>
        <QuestionText />
      </CardHeader>
      <QuestionCode />
    </Card>
  );
}
