import { branch as gitBranch } from './branch';
import { commitDate as gitCommitDate } from './commit-date';
import { commitEntry as gitCommitEntry } from './commit-entry';
import { commitMessage as gitCommitMessage } from './commit-message';
import { commitSha as gitCommitSha } from './commit-sha';

export const gitModule = {
  branch: gitBranch,
  commitDate: gitCommitDate,
  commitEntry: gitCommitEntry,
  commitMessage: gitCommitMessage,
  commitSha: gitCommitSha,
};
