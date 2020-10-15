import content from '@/content/summary.md';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SheetContentCvSummary extends Vue {
  content = content;
}
