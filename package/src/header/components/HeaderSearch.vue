<template>
  <div class="nhsuk-header__search" v-bind="$attrs">
    <button
      :class="toggleSearchButtonClasses"
      id="toggle-search"
      aria-controls="search"
      aria-label="Open search"
      :aria-expanded="open"
      @click="toggleSearch()"
    >
      <nhs-icon icon="search"></nhs-icon>
      <span class="nhsuk-u-visually-hidden">Search</span>
    </button>
    <div :class="searchWrapClasses" id="wrap-search">
      <form class="nhsuk-header__search-form" id="search" :action="searchAction" method="get" role="search">
        <label class="nhsuk-u-visually-hidden" for="search-field">Search the NHS website</label>
        <input
          class="nhsuk-search__input"
          id="search-field"
          :name="searchInputName"
          type="search"
          placeholder="Search"
          autocomplete="off"
          :aria-activedescendant="activeDescendant"
          :aria-labelledby="ariaLabelledBy"
          role="searchbox"
          aria-autocomplete="list"
          aria-controls="search-results"
          @keydown.down.prevent="onArrowDown()"
          @keydown.up.prevent="onArrowUp()"
          @keydown.enter.prevent="submitSearch()"
          v-model="searchTextInternal"
          @focus="searchOpen = true"
        >
        <ul :class="searchMenuClasses" id="search-results" role="listbox">
          <li
            v-for="(item, index) in searchResults"
            :class="searchResultClasses(index)"
            :id="searchResultId(index)"
            role="option"
            tabindex="-1"
            aria-posinset="1"
            aria-setsize="10"
            @click="submitSearch(index)"
            @mouseover="onMouseOver()"
            :key="index"
          >
            <nhs-icon :id="`search-field-icon__option--${index}`" icon="search"></nhs-icon>
            {{ item.text }}
          </li>
        </ul>
        <button class="nhsuk-search__submit" type="submit" @click.prevent="submitSearch()">
          <nhs-icon icon="search"></nhs-icon>
          <span class="nhsuk-u-visually-hidden">Search</span>
        </button>
        <button class="nhsuk-search__close" id="close-search" @click.prevent="toggleSearch()">
          <nhs-icon icon="close"></nhs-icon>
          <span class="nhsuk-u-visually-hidden">Close search</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import NhsIcon from '../../icon/NhsIcon.vue'
import {computed, defineComponent, onMounted, onUnmounted, PropType, reactive, toRefs, watch} from 'vue'
import {NhsHeaderSearchResult} from './interfaces'

export default defineComponent({
  inheritAttrs: false,
  props: {
    searchConfig: {
      type: Object,
      default: () => {
        return {}
      }
    },
    searchAction: {
      type: String,
      required: true
    },
    searchInputName: {
      type: String,
      required: true
    },
    modelValue: {
      type: Boolean,
      required: true
    },
    searchResults: {
      type: Array as PropType<Array<NhsHeaderSearchResult>>,
      required: true
    },
    searchText: {
      type: String,
      required: true
    }
  },
  components: { NhsIcon },
  setup(props, context) {
    const state = reactive({
      open: props.modelValue,
      searchOpen: false,
      currentResultCount: -1,
      ariaLabelledBy: '',
      searchTextInternal: props.searchText
    })

    watch(() => state.searchTextInternal, (val: string): void => {
      context.emit('update:search-text', val)
    })

    const toggleSearchButtonClasses = computed((): string => {
      const classes = ['nhsuk-header__search-toggle']

      if (state.open) {
        classes.push('is-active')
      }

      return classes.join(' ')
    })

    const searchWrapClasses = computed((): string => {
      const classes = ['nhsuk-header__search-wrap']

      if (state.open) {
        classes.push('js-show')
      }

      return classes.join(' ')
    })

    const searchMenuClasses = computed((): string => {
      const classes = ['autocomplete__menu']

      if (props.searchResults.length > 0 && state.searchOpen) {
        classes.push('autocomplete__menu--visible')
      }
      else {
        classes.push('autocomplete__menu--hidden')
      }

      return classes.join(' ')
    })

    const activeDescendant = computed((): string => {
      if (state.currentResultCount > -1) {
        return searchResultId(state.currentResultCount)
      }

      return ''
    })

    function searchResultClasses(index: number): string {
      const classes = ['autocomplete__option']

      if (state.currentResultCount === index) {
        classes.push('autocomplete__option--focused')
      }

      return classes.join(' ')
    }

    function searchResultId(index: number): string {
      return `search-field__option--${index}`
    }

    function onArrowDown(): void {
      if (state.currentResultCount < props.searchResults.length - 1) {
        state.currentResultCount = state.currentResultCount + 1
      }
    }

    function onArrowUp(): void {
      if (state.currentResultCount >= 0) {
        state.currentResultCount = state.currentResultCount - 1
      }
    }

    function onMouseOver(): void {
      state.currentResultCount = -1
    }


    function onClickOutside(event: any): void {
      if (
        event.target.id !== 'search-field' &&
        event.target.id !== 'search-results' &&
        !event.target.id.includes('search-field__option--') &&
        !event.target.id.includes('search-field-icon__option--')
      ) {
        state.searchOpen = false
        state.currentResultCount = -1
      }
    }

    function toggleSearch(): void {
      state.open = !state.open
      context.emit('update:modelValue', state.open)
    }

    function submitSearch(index: number | undefined = undefined): void {
      if (index || index === 0) {
        context.emit('submit-search', props.searchResults[index])
      }
      else if (state.currentResultCount > -1) {
        context.emit('submit-search', props.searchResults[state.currentResultCount])
      }
      else {
        context.emit('submit-search', state.searchTextInternal)
      }
    }

    onMounted(() => {
      document.addEventListener('click', onClickOutside)
    })

    onUnmounted(() => {
      document.removeEventListener('click', onClickOutside)
    })

    return {
      submitSearch,
      toggleSearchButtonClasses,
      searchWrapClasses,
      ...toRefs(state),
      toggleSearch,
      searchMenuClasses,
      onArrowDown,
      onArrowUp,
      onMouseOver,
      searchResultClasses,
      searchResultId,
      activeDescendant
    }
  }
})
</script>

<style scoped>
.autocomplete-container {
  z-index: 2;
  width: 100%;
}

.autocomplete__menu {
  -moz-box-shadow:0 3px 5px rgba(66,84,98,.5);
  -webkit-box-shadow:0 3px 5px rgba(66,84,98,.5);
  background-color:#fff;
  border-bottom:1px solid #d8dde0;
  border-bottom-left-radius:4px;
  border-bottom-right-radius:4px;
  border-left:1px solid #d8dde0;
  border-right:1px solid #d8dde0;
  box-shadow:0 0 3px 0 rgba(66,84,98,.5);
  list-style:none;
  margin-top:2px;
  overflow-x:hidden;
  overflow-y:auto;
  padding:16px;
  position:absolute;
  top:100%;
  width:100%;
  z-index:1
}
@media (max-width:40.0525em) {
  .autocomplete__menu {
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    border: none;
    box-shadow: none;
    margin-top: 10px;
    position: absolute;
    left: -16px;
    width: calc(100% + 32px);
  }
}
.autocomplete__menu--visible {
  display:block
}
.autocomplete__menu--hidden {
  display:none
}

.autocomplete__option {
  border-bottom:1px solid #f0f4f5;
  color:#005eb8;
  cursor:pointer;
  font-size:16px;
  padding-bottom:12px;
  text-align:left;
  text-decoration:underline
}

.autocomplete__option .nhsuk-icon__search {
  fill:#aeb7bd;
  float:left;
  height:22px;
  margin:2px 4px 0 0;
  width:22px
}

.autocomplete__option--focused,
.autocomplete__option:active,
.autocomplete__option:hover {
  text-decoration:none
}
.autocomplete__option:focus {
  outline:1px solid transparent;
  text-decoration:none
}
.autocomplete__option:focus a {
  background-color:#ffeb3b;
  box-shadow:0 -2px #ffeb3b,0 4px #212b32;
  color:#212b32;
  outline:4px solid transparent;
  text-decoration:none
}
@media (min-width:40.0625em) {
  .autocomplete__option:last-child {
    border-bottom:0
  }
}
.autocomplete__option--no-results {
  border-bottom:0;
  color:#212b32;
  font-size:16px;
  line-height:24px;
  margin:0;
  padding:0;
  text-align:left;
  text-decoration:none
}
@media (max-width:40.0525em) {
  .autocomplete__option--no-results {
    padding:16px 0
  }
}
</style>
