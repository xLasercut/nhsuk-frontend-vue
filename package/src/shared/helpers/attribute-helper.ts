import { computed, SetupContext } from 'vue';

function addAttributes(
  attrsToAdd: Array<string>,
  props: { [key: string]: any },
  attrs: SetupContext['attrs']
) {
  return computed(() => {
    const attributes = Object.assign({}, attrs);
    for (const attributeName of attrsToAdd) {
      if (props[attributeName]) {
        attributes[attributeName] = props[attributeName];
      }
    }
    return attributes;
  });
}

export { addAttributes };
