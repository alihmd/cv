import content from '@/content/work.md';
import { Component, Vue } from 'vue-property-decorator';

interface Work {
  id: number;
  place: string;
  websiteUrl: string[];
  logoUrl: string;
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
    const place = str.substring(0, str.indexOf('\n'));
    str = str.substring(str.indexOf('\n') + 1);

    const logoUrl = this.getImgUrl(place);

    const year = str.substring(0, str.indexOf('\n'));
    str = str.substring(str.indexOf('\n') + 1);

    const websiteUrl = str.substring(0, str.indexOf('\n')).split('|');
    str = str.substring(str.indexOf('\n') + 1);

    const eolIndex = str.indexOf('\n');
    const title = eolIndex > 0 ? str.substring(0, str.indexOf('\n')) : str;

    str = eolIndex > 0 ? str.substring(str.indexOf('\n') + 1) : '';

    return {
      id: this.counter++,
      place,
      websiteUrl,
      logoUrl,
      year,
      title,
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
