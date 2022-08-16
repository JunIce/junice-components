import MarkdownIt from 'markdown-it';

export const mRender = MarkdownIt({
  highlight: function (str, lang) {
    return '';
  },
});
