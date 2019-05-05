import appConfig from '@src/appConfig';
import Cookies from 'cookies-js';

export default {
  dataSource: {
    id: '0',
    name: '',
    pages: [
    ],
  },
  inited: false,
  async refresh() {
    if (this.inited) {
      return;
    }

    this.inited = true;
    const response = await fetch(`${appConfig.apiUrl}project/current`);

    if (response.status === 200) {
      const json = await response.json();
      this.dataSource = json.data;
    }
  },
  async addPage(page) {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const { pages } = this.dataSource;
    this.pages = [].concat(pages).concat([{ ...page, id: pages.length }]);
  },
  async reset(folderPath) {
    const response = await fetch(`${appConfig.apiUrl}project/current`, {
      method: 'POST',
      body: JSON.stringify({ folderPath }),
      headers: {
        'content-type': 'application/json',
        'x-csrf-token': Cookies.get('csrfToken'),
      },
    });
    const json = await response.json();
    this.dataSource = json.data;
  },
  setData(dataSource) {
    this.dataSource = dataSource;
  },
};
