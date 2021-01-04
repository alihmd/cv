import { config } from '@/config';
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SheetHeader extends Vue {
  private pictureHidden = config.pictureHidden;
  private grayscalePicture = config.grayscalePicture;
}
