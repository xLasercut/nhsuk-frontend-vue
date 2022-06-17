<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  functional: true,
  props: {
    node: {
      required: true
    }
  },
  setup(props) {
    return () => {
      return props.node;
    };
  }
});
</script>
