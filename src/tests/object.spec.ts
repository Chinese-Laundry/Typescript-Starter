const returnObj = require('../libs/object')

describe('test', () => {
    test('matchObjectsTest', async() => {
        expect(returnObj({})).toMatchObject({});
    })
})
