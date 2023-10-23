import content from '@/content/projects.md';
import { Component, Vue } from 'vue-property-decorator';

interface Project {
  id: number;
  name: string;
  logoUrl: string;
  urlTexts: string[] | null;
  urls: string[] | null;
  content: string;
}

@Component
export default class SheetContentCvProjects extends Vue {
  content: string = content;
  projects: Project[] = [];
  private counter = 1;

  created() {
    const c = this.content;
    const split = c.split('---').map(x => x.trim());
    this.projects = split.map(str => this._processProjects(str));
  }

  private _processProjects(str: string): Project {
    const name = str.substring(0, str.indexOf('\n'));
    str = str.substring(str.indexOf('\n') + 1);

    const logoUrl = this.getImgUrl(name.substring(0, name.indexOf(' ')));

    const links = str.substring(0, str.indexOf('#links-end#'));
    const urls = links.match(/(?<=\().+?(?=\))/g);
    const urlTexts = links.match(/(?<=\[).+?(?=\])/g);
    str = str.substring(str.indexOf('#links-end#\r\n') + 13);

    str = str.substring(1);

    return {
      id: this.counter++,
      name,
      logoUrl,
      urls,
      urlTexts,
      content: str,
    };
  }

  getImgUrl(name: string) {
    name = name.trim().toLowerCase() + '-logo.png';
    const image = require.context('@/assets/projects/', false);

    try {
      const url = image('./' + name);
      return url;
    } catch (error) {
      return null;
    }
  }
}
