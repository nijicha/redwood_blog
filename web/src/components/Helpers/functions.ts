// This is be like twin.macro
// https://github.com/ben-rogerson/twin.macro
export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
