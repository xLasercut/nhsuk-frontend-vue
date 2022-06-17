import { computed, SetupContext } from 'vue';

function getAttributes(
  attrsToAdd: Array<string>,
  props: { [key: string]: any },
  context: SetupContext<any>
) {
  return computed(() => {
    const attributes = Object.assign({}, context.attrs);
    for (const attributeName of attrsToAdd) {
      if (props[attributeName]) {
        attributes[attributeName] = props[attributeName];
      }
    }
    return attributes;
  });
}

export { getAttributes };
