# @sudongyuer/eslint-config

<p align="center">
<img src="https://cdn.staticaly.com/gh/sudongyuer/image-bed@master/20220703/icon.2c5k1lu0fkkk.webp" height="150">
</p>

<p align="center">
  <a href="https://npmjs.com/package/@sudongyuer/eslint-config"><img src="https://img.shields.io/npm/v/@sudongyuer/eslint-config?color=a1b858&label="></a>
<p>

- Single quotes, no semi
- Auto fix for formatting (aimed to be used standalone without Prettier)
- TypeScript, Vue, React out-of-box
- Lint also for json, yaml, markdown
- Sorted imports, dangling commas for cleaner commit diff
- Reasonable defaults, best practices, only one-line of config


## Usage

### Install

```bash
pnpm add -D eslint @sudongyuer/eslint-config
```

### Config `.eslintrc`

```json
{
  "extends": "@sudongyuer"
}
```

> You don't need `.eslintignore` normally as it has been provided by the preset.

### Add script for package.json

For example:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

### Config WebStorm auto fix


![](https://tva1.sinaimg.cn/large/e6c9d24egy1h3tvp96c74j212l0u077u.jpg)

### Config VS Code auto fix

Create `.vscode/settings.json`

```json
{
  "prettier.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Author

sudongyuer email:976499226@qq.com

## License

MIT
