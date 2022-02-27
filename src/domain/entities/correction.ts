import { Entity } from "../../core/domain/Entity";

export interface CorrectionProps {
  grade: number;
  submissionId: string;
  createdAt?: Date;
}

export class Correction extends Entity<CorrectionProps> {
  private constructor(props: CorrectionProps, id?: string) {
    super(props, id);
  }

  static create(props: CorrectionProps) {
    const corretion = new Correction({
      ...props,
      createdAt: props.createdAt ?? new Date(),
    });

    return corretion;
  }
}
