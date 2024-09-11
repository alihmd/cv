import content from '@/content/work.md';
import { Component, Vue } from 'vue-property-decorator';

interface Work {
  id: number;
  place: string;
  additional: string;
  websiteUrl: string[];
  logoUrl: string;
  location: string;
  year: string;
  title: string;
  content: string;
}

@Component
export default class SheetContentCvWork extends Vue {
  content: string = content;
  works: Work[] = [];
  private counter = 1;

  created() {
    const c = this.content;
    const split = c.split('---').map(x => x.trim());
    this.works = split.map(str => this._processWork(str));
  }

  private _processWork(str: string): Work {
    const jsonString = str.substring(str.indexOf('```json') + 7, str.indexOf('```end'));
    str = str.substring(str.indexOf('```end') + 7);

    const data = JSON.parse(jsonString);

    data.logoUrl = this.getImgUrl(data.logoUrl);
    return {
      id: this.counter++,
      ...data,
      content: str,
    };
  }

  getImgUrl(place: string) {
    place = place.trim().toLowerCase() + '-logo.png';
    const image = require.context('@/assets/work/', false);

    try {
      const url = image('./' + place);
      return url;
    } catch (error) {
      return null;
    }
  }
}
