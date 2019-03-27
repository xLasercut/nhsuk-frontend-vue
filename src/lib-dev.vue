<script>
import { NhsukFrontendVueSample, NhsukButton } from './entry';
export default {
    name:  'NhsukFrontendVueLibDev', // vue library dev component
    components: {
        NhsukFrontendVueSample,
        NhsukButton
    },
}
</script>

<template>
    <div class="nhsuk-frontend-vue-lib-dev">
        <nhsuk-frontend-vue-sample></nhsuk-frontend-vue-sample>
        <nhsuk-button>test</nhsuk-button>
    </div>
</template>

<style scoped>
    .nhsuk-frontend-vue-lib-dev {
        display: block;
        width: 400px;
        margin: 25px auto;
    }
</style>
