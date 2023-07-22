const capitalize = require('./capitalize')
test('It is turning a string to a capitalized string',()=>{
    expect(capitalize('nelofar')).toBe('nelofar');
});