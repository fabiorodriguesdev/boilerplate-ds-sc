# Contributing

There are some steps you should be aware of before starting to contribute to this repository. Please read it all and if you have any questions reach one of the leads/custodians of the Design System.

## Table of contents

- [Reporting a bug](#creating-issues)
- [Commits](#commits)
  - [Writing a body message](#writing-body-message)
  - [Writing a footer message](#writing-footer-message)
- [Pull Requests](#pull-requests)
  - [Naming your PR](#naming-prs)
- [Release Process](#release-process)
  - [Naming your Merge title](#naming-merge-title)
  - [What prefixes will generate a new version and release?](#commit-prefixes)
- [Documenting](#documenting)
  - [Documenting components props](#documenting-props)
- [Code style](#code-style)

  - [Naming Files/Folders](#naming-files-and-folders)
  - ["as const" statement](#as-const)
  - [Styled files](#styled-files)
  - [Utils](#utils)

## Reporting a bug <a id="creating-issues"></a>

When you find a bug please head to our [Board](https://github.com/orgs/FINVIA/projects/8/views/1) and create a new issue there. Remember to:

- Explain in **detail** what the problem is.
- Add any `log` possible if you have.
- Add a video or an image showing the unnexpected behaviour.
- Add the tags `design-system`, `frontend`, `bug` and `refinement` to it.
- If you can, already suggest how to fix it.
- Post in our slack channel `#design-system` with the link to the issue.

Following those steps this bug ticket will be refined and get done asap.

## Commits <a id="commits"></a>

Before changing anything, you need to know that we use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) as a pattern to write our commits!

The commit message must follow the structure:

```shell
<type>[optional scope]: <description>
[optional body]
[optional footer(s)]
```

Only these types are allowed: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore` and `revert`. All of them are based on [commitizen-cli](https://github.com/commitizen/cz-cli).

Here follows explanations on each prefix you can use and **when** to use.

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `refactor`: A code change that neither fixes a bug or adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests
- `chore`: Changes to the build process or auxiliary tools and libraries such as documentation generation
- `ci`: Changes to CI pipeline of the project
- `revert`: Reverting changes
- `build`: Changes that affects the build process of the project.

### Writing a body message <a id="writing-body-message"></a>

Body message is optional. Usually you'll use it to add more information about the changes or refer to a breaking change, ex:

```shell
feat(Button): change state api
BREAKING CHANGE: we needed to change prop named as state to appearance
```

Body message is usually added when you use `git commit` and open your default editor on terminal.

### Writing a footer message <a id="writing-footer-message"></a>

By default, we should add in the first commit the issue/card id, ex:

```shell
feat(Button): change state api
BREAKING CHANGE: we needed to change prop named as state to appearance
closes #1234 //issue id
```

## Pull Requests <a id="pull-requests"></a>

Please write a significant PR message. Our PRs are important documentation that we can reach out in case of any need of clarification on decisions taken in our codebase, so take your time and write down decisions you might have taken, different directions you might have gone during your task etc.

### Naming your PR <a id="naming-prs"></a>

Please follow the same naming structure we use for our commits.

**Ex.:**

- `feat(Button): change state api`
- `fix(Stepper): fixed click action`
- `chore(Grid): refactored the component`
- `docs(Contributing): added explanations to the project`

## Release Process <a id="release-process"></a>

The release is created by [release-please](https://github.com/google-github-actions/release-please-action) action in our [workflows](https://github.com/FINVIA/mono/blob/main/.github/workflows/wg-frontend-design-system-release.yaml).

`release-please` runs when a merge happens in `main`. If this merge contains any changes in `money-ui` it will automatically create a pull request bumping the `package.json` version and updating `CHANGELOG.md` based on our commits using `conventional commits`.

After `release-please` pull request get merged, workflows runs again creating a new tag, a release, and publishing a newer version of `money-ui`.

### Naming your Merge title <a id="naming-merge-title"></a>

When you click on the `Squash and Merge` button, you need to provide a title to your Merge action. This title must follow the **same structure of your commits and PR title**, the `CHANGELOG.md` relies on that to be automatically generated correctly.

Also, this title will define if the version to bump is a `major`, `minor` or `patch`.

### What prefixes will generate a new version and release? <a id="commit-prefixes"></a>

`release-please` will publish a new version only when the following prefixes exists on your Merge Title:

- `fix`
- `feat`

## Documenting <a id="documenting"></a>

Please note that we document **ALL** components in detail. We will **NOT** approve any PR that doesn't contain the correct and well defined documentation for each variant of the component.

You can follow this checklist:

- Component has its introduction text explaining what it is and for what it is used.
- Component has all the props with its explanations (defined in the `.types.ts` file)
- Component has **VISUAL** examples of all variants and possibilities in the docs.
- Component has **CODE** examples of all variants and possibilities in the docs.

### Documenting components props <a id="documenting-props"></a>

In order to add explanations to each prop of the component you must add comments to the Types in order to it being rendered in the documentation automatically:

**Ex.:**

```ts
export interface CardProps {
  /**
   * Define padding of the Card.
   */
  padding?: keyof Spacings;

  /**
   * Remove rounded borders.
   */
  squared?: boolean;

  /**
   * Border width of the Card.
   */
  borderWidth?: keyof BorderWidth;

  ...
}
```

## Code style <a id="code-style"></a>

Please make sure you follow our code style when creating new Components or changing something in our codebase.

### Naming Files/Folders <a id="naming-files-and-folders"></a>

When creating a new component please follow this naming structure:

```shell
components
└─ ComponentName
   ├─ ComponentName.tsx             # Main component
   ├─ ComponentName.styled.ts       # styled-components
   ├─ ComponentName.types.ts        # types, interfaces etc..
   ├─ ComponentName.stories.mdx     # Storybook stories
   ├─ ComponentName.test.ts         # Component unit tests
   └─ index.ts                      # Exports of the default component and necessary types
```

**PS.:** Note that everything related to the component we write in `PascalCase`, even if the file is not a component itself.

### "as const" statement <a id="as-const"></a>

Every time you use a `as const` statement make sure the `key` is `uppercase` and the value in `lowercase`:

**Ex.:**

```ts
export const variants = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
} as const;
```

Use `as const` instead of `enum` so we can use approaches like:

```ts
type Variants = typeof variants[keyof typeof variants];

export interface ButtonProps {
  variants: Variants;
}
```

and later on you can also use it in your `.styled.ts` file

```ts
const buttonWithSecondaryStyles = ({ theme, variant }: ThemeWithProps) =>
  variant === variants.SECONDARY &&
  css`
    background-color: ${theme.colors.blue['400']};
  `;
```

### Styled files <a id="styled-files"></a>

When creating `.styled.ts` files, make sure you store your default styles and variant styles in separated `consts` and just pass them to the styled element at the end.

**Ex.:**

```ts
// Default style
const buttonBaseStyles = ({ theme }: ThemeWithProps) => css`
  background-color: ${theme.colors.orange['650']};
`;

// Secondary style
const buttonWithSecondaryStyles = ({ theme, variant }: ThemeWithProps) =>
  variant === variants.SECONDARY &&
  css`
    background-color: ${theme.colors.blue['400']};
  `;

// Combine them when creating the styled component
export const Button = styled.button(
  buttonBaseStyles,
  buttonWithSecondaryStyles
);
```

### Utils <a id="utils"></a>

Note that we have a folder called `components-utils` in our `src` folder. All utils functions you might need to use in your component should go there. Outside our `src` folder we have another folder called `utils` there should be locate only functions that are used for `tests` or Storybook documentation. If you import any function from `./utils` in your component it will **BREAK** the release build.
