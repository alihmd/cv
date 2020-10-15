import content from '@/content/cover-letter.md';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SheetContentCl extends Vue {
  content = content;
}
