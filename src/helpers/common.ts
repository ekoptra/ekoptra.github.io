const _get_window_height = () =>
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight ||
  0;

const _get_window_Yscroll = () =>
  window.scrollY ||
  document.body.scrollTop ||
  document.documentElement.scrollTop ||
  0;

const _get_doc_height = () =>
  Math.max(
    document.body.scrollHeight || 0,
    document.documentElement.scrollHeight || 0,
    document.body.offsetHeight || 0,
    document.documentElement.offsetHeight || 0,
    document.body.clientHeight || 0,
    document.documentElement.clientHeight || 0
  );

export const getScrollPercentage = () =>
  (_get_window_Yscroll() / (_get_doc_height() - _get_window_height())) * 100;
