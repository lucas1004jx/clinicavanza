export const scrollIntoView = (
  id: string,
  offset: number = 0,
) => {
  const element = document.getElementById(id);
  const finalOffset = offset + 48;

  if (typeof window !== 'undefined' && element) {
    window.scroll({
      top: element.getBoundingClientRect().top
          + window.pageYOffset
          - finalOffset,
      behavior: 'smooth',
    });
  }
};
