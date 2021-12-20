<template>
  <component :is="component"></component>
</template>

<script>
  import ActionLink from '../examples/ActionLink.vue'
  import BackLink from '../examples/BackLink.vue'
  import Body from '../examples/Body.vue'
  import Breadcrumb from '../examples/Breadcrumb.vue'
  import ButtonDocs from '../examples/ButtonDocs.vue'
  import ButtonDocsDisabled from '../examples/ButtonDocsDisabled.vue'
  import CareCardNonUrgent from '../examples/CareCardNonUrgent.vue'
  import CareCardUrgent from '../examples/CareCardUrgent.vue'
  import CareCardImmediate from '../examples/CareCardImmediate.vue'
  import Checkbox from '../examples/Checkbox.vue'
  import CheckboxDisabled from '../examples/CheckboxDisabled.vue'
  import CheckboxError from '../examples/CheckboxError.vue'
  import CheckboxSlots from '../examples/CheckboxSlots.vue'
  import ContentsList from '../examples/ContentsList.vue'
  import Details from '../examples/Details.vue'
  import DoDont from '../examples/DoDont.vue'
  import DoDontSlots from '../examples/DoDontSlots.vue'
  import ErrorSummary from '../examples/ErrorSummary.vue'
  import ErrorText from '../examples/ErrorText.vue'
  import Expander from '../examples/Expander.vue'
  import ExpanderGroup from '../examples/ExpanderGroup.vue'
  import Fieldset from '../examples/Fieldset.vue'
  import FieldsetHeading from '../examples/FieldsetHeading.vue'
  import FieldsetSlots from '../examples/FieldsetSlots.vue'
  import Footer from '../examples/Footer.vue'
  import FooterColumn from '../examples/FooterColumn.vue'
  import Grid from '../examples/Grid.vue'
  import Header from '../examples/Header.vue'
  import HeaderServiceSearch from '../examples/HeaderServiceSearch.vue'
  import HeaderTransactionalName from '../examples/HeaderTransactionalName.vue'
  import Heading from '../examples/Heading.vue'
  import Hero from '../examples/Hero.vue'
  import HeroImageText from '../examples/HeroImageText.vue'
  import HintText from '../examples/HintText.vue'
  import Image from '../examples/Image.vue'
  import Input from '../examples/Input.vue'
  import InputError from '../examples/InputError.vue'
  import InputWidth from '../examples/InputWidth.vue'
  import InputSlots from '../examples/InputSlots.vue'
  import InsetText from '../examples/InsetText.vue'
  import Label from '../examples/Label.vue'
  import LabelBold from '../examples/LabelBold.vue'
  import LabelHeading from '../examples/LabelHeading.vue'
  import List from '../examples/List.vue'
  import ListPanel from '../examples/ListPanel.vue'
  import NavAZ from '../examples/NavAZ.vue'
  import Pagination from '../examples/Pagination.vue'
  import RadioError from '../examples/RadioError.vue'
  import RadioDisabled from '../examples/RadioDisabled.vue'
  import RadioDivider from '../examples/RadioDivider.vue'
  import RadioSlots from '../examples/RadioSlots.vue'
  import ReviewDate from '../examples/ReviewDate.vue'
  import Select from '../examples/Select.vue'
  import SelectError from '../examples/SelectError.vue'
  import SelectSlots from '../examples/SelectSlots.vue'
  import SkipLink from '../examples/SkipLink.vue'
  import SummaryList from '../examples/SummaryList.vue'
  import SummaryListNoBorder from '../examples/SummaryListNoBorder.vue'
  import Table from '../examples/Table.vue'
  import TablePanel from '../examples/TablePanel.vue'
  import WarningCallout from '../examples/WarningCallout.vue'
  import Textarea from '../examples/Textarea'
  import TextareaError from '../examples/TextareaError'
  import TextareaSlots from '../examples/TextareaSlots'
  import DateInputError from '../examples/DateInputError.vue'
  import DateInputSlots from '../examples/DateInputSlots.vue'
  import HeaderOrg from '../examples/HeaderOrg.vue'
  import HeaderOrgWhiteNav from '../examples/HeaderOrgWhiteNav.vue'
  import RadioConditional from '../examples/RadioConditional.vue'
  import CheckboxConditional from '../examples/CheckboxConditional.vue'
  import TableResponsive from '../examples/TableResponsive'
  import CardBasic from '../examples/CardBasic.vue'
  import CardClickable from '../examples/CardClickable.vue'
  import CardImage from '../examples/CardImage.vue'
  import CardGroup from '../examples/CardGroup.vue'
  import CardFeature from '../examples/CardFeature.vue'
  import Tag from '../examples/Tag.vue'

  const map = {
    'ActionLink': ActionLink,
    'BackLink': BackLink,
    'Body': Body,
    'Breadcrumb': Breadcrumb,
    'ButtonDocs': ButtonDocs,
    'ButtonDocsDisabled': ButtonDocsDisabled,
    'CareCardNonUrgent': CareCardNonUrgent,
    'CareCardUrgent': CareCardUrgent,
    'CareCardImmediate': CareCardImmediate,
    'Checkbox': Checkbox,
    'CheckboxDisabled': CheckboxDisabled,
    'CheckboxError': CheckboxError,
    'CheckboxSlots': CheckboxSlots,
    'ContentsList': ContentsList,
    'Details': Details,
    'DoDont': DoDont,
    'DoDontSlots': DoDontSlots,
    'ErrorSummary': ErrorSummary,
    'ErrorText': ErrorText,
    'Expander': Expander,
    'ExpanderGroup': ExpanderGroup,
    'Fieldset': Fieldset,
    'FieldsetHeading': FieldsetHeading,
    'FieldsetSlots': FieldsetSlots,
    'Footer': Footer,
    'FooterColumn': FooterColumn,
    'Grid': Grid,
    'Header': Header,
    'HeaderServiceSearch': HeaderServiceSearch,
    'HeaderTransactionalName': HeaderTransactionalName,
    'Heading': Heading,
    'Hero': Hero,
    'HeroImageText': HeroImageText,
    'HintText': HintText,
    'Image': Image,
    'Input': Input,
    'InputError': InputError,
    'InputWidth': InputWidth,
    'InputSlots': InputSlots,
    'InsetText': InsetText,
    'Label': Label,
    'LabelBold': LabelBold,
    'LabelHeading': LabelHeading,
    'List': List,
    'ListPanel': ListPanel,
    'NavAZ': NavAZ,
    'Pagination': Pagination,
    'RadioError': RadioError,
    'RadioDisabled': RadioDisabled,
    'RadioDivider': RadioDivider,
    'RadioSlots': RadioSlots,
    'ReviewDate': ReviewDate,
    'Select': Select,
    'SelectError': SelectError,
    'SelectSlots': SelectSlots,
    'SkipLink': SkipLink,
    'SummaryList': SummaryList,
    'SummaryListNoBorder': SummaryListNoBorder,
    'Table': Table,
    'TablePanel': TablePanel,
    'TableResponsive': TableResponsive,
    'WarningCallout': WarningCallout,
    'Textarea': Textarea,
    'TextareaError': TextareaError,
    'TextareaSlots': TextareaSlots,
    'DateInputError': DateInputError,
    'DateInputSlots': DateInputSlots,
    'HeaderOrg': HeaderOrg,
    'HeaderOrgWhiteNav': HeaderOrgWhiteNav,
    'RadioConditional': RadioConditional,
    'CheckboxConditional': CheckboxConditional,
    'CardBasic': CardBasic,
    'CardClickable': CardClickable,
    'CardImage': CardImage,
    'CardGroup': CardGroup,
    'CardFeature': CardFeature,
    'Tag': Tag
  }

  export default {
    props: {
      file: {
        type: String,
        required: true
      }
    },
    computed: {
      component() {
        return map[this.file]
      }
    }
  }
</script>
