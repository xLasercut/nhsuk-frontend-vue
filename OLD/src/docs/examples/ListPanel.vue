<template>
  <ol class="nhsuk-list">
    <li v-for="(panel, index) in listPanels" :key="`panel-${index}`">
      <nhs-list-panel
        :label="panel.label" :message="panel.message"
        back-to-top :disabled="panel.disabled"
      >
        <nhs-list-panel-item
          v-for="(item, index) in panel.items"
          :key="`panel-${panel.label}-${index}`"
          :href="item.href"
        >
          {{item.text}}
        </nhs-list-panel-item>
      </nhs-list-panel>
    </li>
  </ol>
</template>

<script>
  export default {
    data() {
      return {
        listPanels: [
          {
            label: 'A',
            items: [
              {
                text: 'AAA',
                href: 'http://localhost:3000/conditions/abdominal-aortic-aneurysm/'
              },
              {
                text: 'Abdominal aortic aneurysm',
                href: 'http://localhost:3000/conditions/abdominal-aortic-aneurysm/'
              },
              {
                text: 'Abscess',
                href: 'http://localhost:3000/conditions/abscess/'
              }
            ]
          },
          {
            label: 'B',
            disabled: true,
            message: 'There are currently no conditions listed'
          },
          {
            label: 'C',
            items: [
              {
                text: 'Chest pain',
                href: 'http://localhost:3000/conditions/chest-pain/'
              },
              {
                text: 'Cold sore',
                href: 'http://localhost:3000/conditions/cold-sores/'
              }
            ]
          },
          {
            label: 'D',
            items: [
              {
                text: 'Dandruff',
                href: 'http://localhost:3000/conditions/dandruff/'
              },
              {
                text: 'Dementia',
                href: 'http://localhost:3000/conditions/dementia/'
              },
              {
                text: 'Dental pain',
                href: 'http://localhost:3000/conditions/toothache/'
              }
            ]
          }
        ]
      }
    }
  }
</script>