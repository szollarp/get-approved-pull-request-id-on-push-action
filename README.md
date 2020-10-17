# Action get pull requests ids

[![actions-workflow-test][actions-workflow-test-badge]][actions-workflow-test]
[![release][release-badge]][release]

It's a GitHub Action to get pull request ids that indicates the push GitHub action event.

## Inputs

|      NAME      |                                           DESCRIPTION                                           |   TYPE   | REQUIRED |                                     DEFAULT                                     |
| -------------- | ----------------------------------------------------------------------------------------------- | -------- | -------- | ------------------------------------------------------------------------------- |
| `token` | A GitHub token.                                                                                 | `string` | `true`   | `N/A`                                            | `number` | `true`  | `N/A`


## Example

### Get pull requests ids from push event

```yaml
on:
  push:
    branches:
      - main
  
jobs: 
  get-ids:
    runs-on: ubuntu-latest
    steps:      
      - name: Get pull requests ids
        id: get-ids
        uses: szollarp/get-approved-pull-request-id-on-push-action@v1
        with:
          token: ${{ secrets.GITHUB_TOKEN }}
      - name: Echo ids
        run: echo "ids ${{ steps.get-ids.outputs.ids }}"
```

<!-- badge links -->

[actions-workflow-test]: https://github.com/szollarp/get-approved-pull-request-id-on-push-action/actions?query=workflow%3Aunits-test
[actions-workflow-test-badge]: https://img.shields.io/github/workflow/status/szollarp/get-approved-pull-request-id-on-push-action/units-test?label=Test&style=for-the-badge&logo=github

[release]: https://github.com/szollarp/get-approved-pull-request-id-on-push-action/releases
[release-badge]: https://img.shields.io/github/v/release/szollarp/get-approved-pull-request-id-on-push-action?style=for-the-badge&logo=github
