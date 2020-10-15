import content from '@/content/languages.md';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SheetContentCvLanguages extends Vue {
  content = content;
}
