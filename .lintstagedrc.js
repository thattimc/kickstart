const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

module.exports = {
  '*': 'prettier --ignore-unknown --write',
  '*.{js,ts,tsx}': [buildEslintCommand],
  '*.{ts,tsx}': () => 'tsc --noEmit',
  '*.prisma': () => 'prisma format',
}
