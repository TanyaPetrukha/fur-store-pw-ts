export class TestDataLoader {
    static loadTestData(filename: string){
        const testData = require(`../testdata/${filename}`);
        return testData;
    }
}