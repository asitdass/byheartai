import { getQuiz } from "@/data/quizzes";
import { QuizRunner } from "./quiz-runner";

/** MDX-facing wrapper: looks up quiz data by id and renders the interactive runner. */
export function Quiz({ id }: { id: string }) {
  const quiz = getQuiz(id);
  if (!quiz) {
    return (
      <p style={{ color: "var(--ink-faint)" }}>
        (Quiz <code>{id}</code> not found.)
      </p>
    );
  }
  return <QuizRunner quiz={quiz} />;
}
