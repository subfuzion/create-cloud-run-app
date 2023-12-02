# create-cloud-run-app

Get started with boilerplate for writing, testing, linting, and formatting
TypeScript for a Node.js app to deploy to Cloud Run.

```
npx create-cloud-run-app [path]
```

> **Note**
>
> - If `path` isn't specified, it defaults to the current working directory (`.`).
> - The directory under `path` must be empty. 

## Details

Configuration boilerplate for jump starting your app development includes:

* [TypeScript]
* [Jest]
* Linting and formatting
  * [EditorConfig]
  * [ESLint]
  * [Prettier]

The linting and formatting tools have been configured to  work together:

* `.editorconfig` has format settings that feed into Prettier
* `.eslintrc.json` uses Prettier for formatting

It is also configured with a `pre-commit` hook using [Husky] and [lint-staged]
that will automatically reformat your source files when you commit.

## Development

The generated app includes a number of package scripts, most importantly:

- `build`
- `test` | `test:watch`
- `deploy`

For normal development, just run `test:watch`. This will restart the Express app
on file changes under the `src` or `test` directories, and also re-run tests.

## Notes

To use the latest published version, enter:

```
npx create-cloud-run-app@latest [path]
```

If you want to use the latest version from the [cloud-run-app] repo, enter:

```
npx github:subfuzion/create-cloud-run-app [path]
```

## Source

The source for the generated app is in the [cloud-run-app] repo.

## License

Licensed under [MIT].

[cloud-run-app]: https://github.com/subfuzion/cloud-run-app/
[EditorConfig]: https://editorconfig.org/
[ESLint]: https://eslint.org/
[Husky]: https://typicode.github.io/husky/
[Jest]: https://jestjs.io/
[lint-staged]: https://github.com/okonet/lint-staged/
[MIT]: ./LICENSE
[Node.js]: https://nodejs.org/en/download/
[Prettier]: https://prettier.io/
[TypeScript]: https://typescriptlang.org/
[user.name]: https://docs.github.com/en/get-started/getting-started-with-git/setting-your-username-in-git#setting-your-git-username-for-every-repository-on-your-computer/
[user.email]: https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address#setting-your-email-address-for-every-repository-on-your-computer/
