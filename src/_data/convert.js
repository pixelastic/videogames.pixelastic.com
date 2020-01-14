import { _ } from 'golgoth';
export default {
  fromMarkdown(markdownText, data) {
    console.info(_.keys(data));
    return data.markdown(markdownText);
  },
};
