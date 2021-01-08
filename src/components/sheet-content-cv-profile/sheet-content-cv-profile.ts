import content from '@/content/profile.md';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SheetContentCvProfile extends Vue {
  content = content;
}
