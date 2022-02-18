import { Entity } from "../../core/domain/Entity";

interface SubmissionProps {
  challengeId: string;
  studentId: string;
  createdAt?: Date;
}

export class Submission extends Entity<SubmissionProps> {
  private constructor(props: SubmissionProps, id?: string) {
    super(props, id);
  }

  static create(props: SubmissionProps) {
    const submission = new Submission({
      ...props,
      createdAt: props.createdAt ?? new Date(),
    });

    return submission;
  }
}
