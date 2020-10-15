import content from '@/content/skills.md';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SheetContentCvSkills extends Vue {
  content = content;
}
