export class dataFeed {

    static async fetchData() {
        const response = await fetch('./dataFeeds/dataFeed.json');
        return await response.json()
    }

    static async getData() {
        return await this.fetchData();
    }
    
}