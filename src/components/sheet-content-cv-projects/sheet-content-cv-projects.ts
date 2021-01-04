import content from '@/content/projects.md';
import { Component, Vue } from 'vue-property-decorator';

interface Project {
  id: number;
  name: string;
  logoUrl: string;
  link: string;
  role: string;
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
    const name = str.substr(0, str.indexOf('\n'));
    str = str.substr(str.indexOf('\n') + 1);

    const logoUrl = this.getImgUrl(name);

    const link = str.substr(0, str.indexOf('\n'));
    str = str.substr(str.indexOf('\n') + 1);

    const role = str.substr(0, str.indexOf('\n'));
    str = str.substr(str.indexOf('\n') + 1);

    str = str.substr(1);

    return {
      id: this.counter++,
      name,
      logoUrl,
      link,
      role,
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
