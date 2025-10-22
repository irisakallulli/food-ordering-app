// Minimal stub for macOS-only fsevents so Windows builds don't fail
export default undefined;
export const watch = () => ({ stop: () => {} });
export const getInfo = () => ({});
