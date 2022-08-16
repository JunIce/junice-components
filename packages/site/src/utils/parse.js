import MarkdownIt from 'markdown-it';

const mRender = MarkdownIt({
  highlight: function (str, lang) {
    return '';
  },
});

const defaultPreprocessors = {
  html: (code) => code,
};

let id = 0;
const reg =
  /\<template\>([\s\S]+)\<\/template\>\s+\<script\>\s+export\s+default\s+([\s\S]+)\<\/script\>\s+\<style\>([\s\S]+)\<\/style\>/;

function defaultWrap(demo, code) {
  console.log(demo, code);
  const id = `vue-demo-${id}`;

  const [_, template, script, style] = demo.match(reg);

  if (script) {
    // script
    script.template = template;
  }

  console.log(res);

  return `<div id="${id}"></div>`;
}

function plugin(md, params = {}) {
  const defaultRenderer = md.renderer.rules.fence;
  const wrap = params.wrap || defaultWrap;
  const preprocessors = {
    ...defaultPreprocessors,
    ...(params.preprocessors || {}),
  };

  md.renderer.rules.fence = function demoRenderer(tokens, idx, options, env, self) {
    // console.log(tokens, idx);

    const token = tokens[idx];
    const preprocess = preprocessors[token.info.trim()];

    if (!preprocess) {
      return defaultRenderer(tokens, idx, options, env, self);
    }

    const demo = preprocess(token.content);

    return wrap(demo, defaultRenderer(tokens, idx, options, env, self));
  };
}

mRender.use(plugin, {
  preprocessors: {
    vue: (code) => {
      // console.log(code);
      return code;
    },
  },
});

export { mRender };
