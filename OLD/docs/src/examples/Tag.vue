<template>
  <nhs-table
    :headers="headers"
    :data="items"
    :responsive="false"
  >
    <template #item.classname="item">
      <code>{{item.props.classname}}</code>
    </template>

    <template #item.tag="item">
      <nhs-tag :color="item.props.tag">{{item.props.tagText}}</nhs-tag>
    </template>
  </nhs-table>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: 'Class name',
          value: 'classname'
        },
        {
          text: 'Tag',
          value: 'tag',
          style: 'width: 120px'
        }
      ],
      items: [
        {
          classname: 'nhsuk-tag',
          tag: '',
          tagText: 'Active'
        },
        {
          classname: 'nhsuk-tag--white',
          tag: 'white',
          tagText: 'Started'
        },
        {
          classname: 'nhsuk-tag--grey',
          tag: 'grey',
          tagText: 'Not started'
        },
        {
          classname: 'nhsuk-tag--green',
          tag: 'green',
          tagText: 'New'
        },
        {
          classname: 'nhsuk-tag--aqua-green',
          tag: 'aqua-green',
          tagText: 'Active'
        },
        {
          classname: 'nhsuk-tag--blue',
          tag: 'blue',
          tagText: 'Pending'
        },
        {
          classname: 'nhsuk-tag--purple',
          tag: 'purple',
          tagText: 'Received'
        },
        {
          classname: 'nhsuk-tag--pink',
          tag: 'pink',
          tagText: 'Sent'
        },
        {
          classname: 'nhsuk-tag--red',
          tag: 'red',
          tagText: 'Rejected'
        },
        {
          classname: 'nhsuk-tag--orange',
          tag: 'orange',
          tagText: 'Declined'
        },
        {
          classname: 'nhsuk-tag--yellow',
          tag: 'yellow',
          tagText: 'Delayed'
        }
      ]
    }
  }
}
</script>
