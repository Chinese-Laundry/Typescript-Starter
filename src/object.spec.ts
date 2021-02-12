const returnObj = require('./lib/object')

describe('test', () => {
    test('objectTest', async() => {
        expect(returnObj({})).toMatchObject({});
    })
})
