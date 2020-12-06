
import { isEmpty } from './../utils/utils';

export class dataStore {
    static data: any = {};

    static storeData() {
        window.localStorage.setItem('votes', JSON.stringify(this.data));
    }

    static getDataStored() {
        this.data = JSON.parse(window.localStorage.getItem('votes') || '{}');
    }

    static createDataStorage(data) {
        this.data = data;
        this.storeData();
    }

    static updateData(newData) {
        const itemIndex = this.data.findIndex(item => item.id === newData.id);
        this.data[itemIndex] = { ...newData };
        this.storeData();
    }

    static getData() {
        if (isEmpty(this.data)) this.getDataStored();
        return this.data;
    }
}