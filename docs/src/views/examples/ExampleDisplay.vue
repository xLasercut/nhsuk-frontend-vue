<template>
  <div :id="id()" :style="containerStyle()" v-if="hasContainer">
    <nhs-main>
      <nhs-row>
        <nhs-col :span="containerSize">
          <router-view></router-view>
        </nhs-col>
      </nhs-row>
    </nhs-main>
  </div>
  <router-view :id="id()" v-else></router-view>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import router from '../../router';
import { ExampleDisplayConfig } from '../../assets/interfaces';
import { setPageColor } from '../../assets/helpers';

const DISPLAY_STYLE: ExampleDisplayConfig = {
  '/examples/breadcrumb': {
    container: false
  },
  '/examples/button-reversed': {
    containerBg: '#005eb8'
  },
  '/examples/footer': {
    container: false
  },
  '/examples/header': {
    container: false
  },
  '/examples/header-org': {
    container: false
  },
  '/examples/header-org-white': {
    container: false
  },
  '/examples/header-org-white-nav': {
    container: false
  },
  '/examples/header-transactional': {
    container: false
  },
  '/examples/header-transactional-name': {
    container: false
  },
  '/examples/header-logo': {
    container: false
  },
  '/examples/header-nav': {
    container: false
  },
  '/examples/header-search': {
    container: false
  },
  '/examples/hero': {
    container: false
  },
  '/examples/hero-image': {
    container: false
  },
  '/examples/hero-image-text': {
    container: false
  },
  '/examples/header-service': {
    container: false
  },
  '/examples/header-service-nav': {
    container: false
  },
  '/examples/card-group': {
    containerSize: 100
  }
};

export default defineComponent({
  setup() {
    function id() {
      bodyStyle();
      return '';
    }

    function bodyStyle(): void {
      const currentRoutePath = router.currentRoute.value.path;
      if (!(currentRoutePath in DISPLAY_STYLE)) {
        setPageColor('#f0f4f5');
        return;
      }

      setPageColor(DISPLAY_STYLE[currentRoutePath]['bodyBg'] || '#f0f4f5');
    }

    function containerStyle() {
      const currentRoutePath = router.currentRoute.value.path;
      if (!(currentRoutePath in DISPLAY_STYLE)) {
        return {
          'background-color': 'none'
        };
      }

      return {
        'background-color': DISPLAY_STYLE[currentRoutePath]['containerBg'] || 'none'
      };
    }

    const containerSize = computed((): number => {
      const currentRoutePath = router.currentRoute.value.path;
      if (!(currentRoutePath in DISPLAY_STYLE)) {
        return 66;
      }

      return DISPLAY_STYLE[currentRoutePath]['containerSize'] || 66;
    });

    const hasContainer = computed((): boolean => {
      const currentRoutePath = router.currentRoute.value.path;
      if (!(currentRoutePath in DISPLAY_STYLE)) {
        return true;
      }

      return DISPLAY_STYLE[currentRoutePath]['container'] !== false;
    });

    return { containerSize, hasContainer, containerStyle, id };
  }
});
</script>
