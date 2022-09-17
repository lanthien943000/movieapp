const ChangeMovie = (e, time, amount, start) => {
  let begin = amount / 100;
  let curtime = 0;
  let scrollycounter = 0;
  const y = window.scrollY;
  while (curtime <= time) {
    window.setTimeout(SHS_B, curtime, e, scrollycounter, begin, start, y);
    curtime += time / 100;
    scrollycounter++;
  }
  window.scrollTo(1, y);
};

const SHS_B = (e, sc, begin, start, y) => {
  e.scrollLeft = begin * sc + start;
};

export default ChangeMovie;
