const core = require("@actions/core");
const github = require("@actions/github");

async function run(): Promise<void> {
  try {
    const token = core.getInput("token", { required: true });

    const { context, getOctokit } = github;
    const octokit = getOctokit(token);

    const pull_requests = await octokit.repos.listPullRequestsAssociatedWithCommit(
      {
        ...context.repo,
        commit_sha: context.sha,
      }
    );

    if (!pull_requests) {
      core.setOutput("id", null);
    }

    const closed = pull_requests.data.filter(
      (pr: { state: string }) => pr.state === "closed"
    );
    const ids = closed.map(({ id }: { id: number }) => id);
    core.setOutput("ids", ids);
  } catch (error) {
    core.error(error);
    core.setFailed(error.message);
  }
}

run();
