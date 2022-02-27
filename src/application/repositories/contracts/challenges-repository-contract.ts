import { Challenge } from "@src/domain/entities/challenge";

export interface ChallengesRepositoryContract {
  findById(id: string): Promise<Challenge | null>;
}
