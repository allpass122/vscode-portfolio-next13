export const checkLightTheme = (theme: string) => {
  if (
    theme === "wireframe" ||
    theme === "light" ||
    theme === "cupcake" ||
    theme === "retro" ||
    theme === "winter"
  )
    return true;
  return false;
};
